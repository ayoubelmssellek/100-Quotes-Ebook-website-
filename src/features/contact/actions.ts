"use server";

import DOMPurify from "isomorphic-dompurify";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getBookBySlug } from "@/features/books/data/books";
import { getPaymentService } from "@/features/payments";
import type { PaymentProvider } from "@/features/payments";
import { assertSameOrigin } from "@/lib/security/csrf";
import { getClientIp, rateLimit } from "@/lib/security/rate-limit";
import { absoluteUrl } from "@/lib/utils";
import { checkoutSchema, contactFormSchema } from "@/lib/validations/forms";

export type ActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

function sanitizeHtmlText(value: string): string {
  return DOMPurify.sanitize(value, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] }).trim();
}

export async function submitContactForm(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const sameOrigin = await assertSameOrigin();
  if (!sameOrigin) {
    return { success: false, message: "Invalid request origin." };
  }

  const headerStore = await headers();
  const ip = getClientIp(headerStore);
  const limited = rateLimit(`contact:${ip}`, 5, 60_000);

  if (!limited.success) {
    return {
      success: false,
      message: "Too many requests. Please try again in a minute.",
    };
  }

  const parsed = contactFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    website: formData.get("website") || undefined,
  });

  if (!parsed.success) {
    return {
      success: false,
      message: "Please fix the highlighted fields.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  if (parsed.data.website) {
    return { success: true, message: "Thanks! We’ll get back to you soon." };
  }

  const safePayload = {
    name: sanitizeHtmlText(parsed.data.name),
    email: parsed.data.email,
    subject: sanitizeHtmlText(parsed.data.subject),
    message: sanitizeHtmlText(parsed.data.message),
  };

  // Wire to your email provider (Resend, Postmark, etc.) using server-only secrets.
  if (process.env.CONTACT_WEBHOOK_URL) {
    await fetch(process.env.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...safePayload,
        receivedAt: new Date().toISOString(),
      }),
    });
  } else if (process.env.NODE_ENV === "development") {
    console.info("[contact]", safePayload);
  }

  return {
    success: true,
    message: "Thanks! Your message has been sent. We’ll reply shortly.",
  };
}

export async function startCheckout(formData: FormData): Promise<void> {
  const sameOrigin = await assertSameOrigin();
  if (!sameOrigin) {
    throw new Error("Invalid request origin.");
  }

  const headerStore = await headers();
  const ip = getClientIp(headerStore);
  const limited = rateLimit(`checkout:${ip}`, 10, 60_000);

  if (!limited.success) {
    throw new Error("Too many checkout attempts. Please wait a moment.");
  }

  const parsed = checkoutSchema.safeParse({
    productId: formData.get("productId"),
    slug: formData.get("slug"),
    provider: formData.get("provider") || process.env.PAYMENT_PROVIDER || "polar",
    email: formData.get("email") || undefined,
  });

  if (!parsed.success) {
    throw new Error("Invalid checkout request.");
  }

  const book = getBookBySlug(parsed.data.slug);
  if (!book || book.id !== parsed.data.productId) {
    throw new Error("Product not found.");
  }

  const provider = parsed.data.provider as PaymentProvider;
  const paymentService = getPaymentService(provider);

  const providerProductId =
    provider === "stripe"
      ? process.env.STRIPE_PRICE_ID || process.env.NEXT_PUBLIC_STRIPE_PRICE_ID
      : provider === "paddle"
        ? process.env.PADDLE_PRICE_ID || process.env.NEXT_PUBLIC_PADDLE_PRICE_ID
        : process.env.POLAR_PRODUCT_ID ||
          process.env.NEXT_PUBLIC_POLAR_PRODUCT_ID;

  try {
    const session = await paymentService.createCheckoutSession({
      productId: book.id,
      slug: book.slug,
      price: book.pricing.price,
      currency: book.pricing.currency,
      title: book.title,
      successUrl: absoluteUrl(`/books/${book.slug}/success?session_id={CHECKOUT_SESSION_ID}`),
      cancelUrl: absoluteUrl(`/books/${book.slug}#pricing`),
      customerEmail: parsed.data.email,
      providerProductId,
    });

    redirect(session.checkoutUrl);
  } catch (error) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[checkout-demo]", error);
      redirect(`/books/${book.slug}/success?demo=1`);
    }
    throw error;
  }
}
