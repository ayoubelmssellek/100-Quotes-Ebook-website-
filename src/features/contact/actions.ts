"use server";

import DOMPurify from "isomorphic-dompurify";
import { headers } from "next/headers";
import { assertSameOrigin } from "@/lib/security/csrf";
import { getClientIp, rateLimit } from "@/lib/security/rate-limit";
import { contactFormSchema } from "@/lib/validations/forms";

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
