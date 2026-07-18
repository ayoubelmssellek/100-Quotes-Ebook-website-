"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getBookBySlug } from "@/features/books/data/books";
import { getPaymentService } from "@/features/payments";
import type { PaymentProvider } from "@/features/payments";
import { assertSameOrigin } from "@/lib/security/csrf";
import { getClientIp, rateLimit } from "@/lib/security/rate-limit";
import { absoluteUrl } from "@/lib/utils";
import { checkoutSchema } from "@/lib/validations/forms";

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
      successUrl: absoluteUrl(
        `/books/${book.slug}/success?session_id={CHECKOUT_SESSION_ID}`,
      ),
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
