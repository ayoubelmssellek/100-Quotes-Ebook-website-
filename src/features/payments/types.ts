export type PaymentProvider = "stripe" | "paddle" | "external";

export type CheckoutSessionInput = {
  productId: string;
  slug: string;
  price: number;
  currency: string;
  title: string;
  successUrl: string;
  cancelUrl: string;
  customerEmail?: string;
  metadata?: Record<string, string>;
  providerProductId?: string;
};

export type CheckoutSessionResult = {
  provider: PaymentProvider;
  checkoutUrl: string;
  sessionId: string;
};

export interface PaymentService {
  readonly provider: PaymentProvider;
  createCheckoutSession(
    input: CheckoutSessionInput,
  ): Promise<CheckoutSessionResult>;
}

export function getDefaultPaymentProvider(): PaymentProvider {
  const configured = process.env.PAYMENT_PROVIDER?.toLowerCase();
  if (configured === "stripe" || configured === "paddle" || configured === "external") {
    return configured;
  }
  return "external";
}

/** Fallback public checkout link (Stripe Payment Link, Gumroad, Lemon Squeezy, etc.) */
export function getExternalCheckoutUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();
  return url || undefined;
}

/**
 * Per-product checkout URL. Falls back to NEXT_PUBLIC_CHECKOUT_URL.
 * Env keys must be listed explicitly for Next.js to inline NEXT_PUBLIC_ vars.
 */
export function getProductCheckoutUrl(
  checkoutUrlEnv?: string,
): string | undefined {
  const byEnv: Record<string, string | undefined> = {
    NEXT_PUBLIC_CHECKOUT_URL_QUOTES: process.env.NEXT_PUBLIC_CHECKOUT_URL_QUOTES,
    NEXT_PUBLIC_CHECKOUT_URL_EVERYDAY:
      process.env.NEXT_PUBLIC_CHECKOUT_URL_EVERYDAY,
    NEXT_PUBLIC_CHECKOUT_URL_KIDS: process.env.NEXT_PUBLIC_CHECKOUT_URL_KIDS,
    NEXT_PUBLIC_CHECKOUT_URL_KIDS_SINGLE:
      process.env.NEXT_PUBLIC_CHECKOUT_URL_KIDS_SINGLE,
    NEXT_PUBLIC_CHECKOUT_URL_KIDS_PACK5:
      process.env.NEXT_PUBLIC_CHECKOUT_URL_KIDS_PACK5,
    NEXT_PUBLIC_CHECKOUT_URL_KIDS_PACK10:
      process.env.NEXT_PUBLIC_CHECKOUT_URL_KIDS_PACK10,
    NEXT_PUBLIC_CHECKOUT_URL_KIDS_CANVA:
      process.env.NEXT_PUBLIC_CHECKOUT_URL_KIDS_CANVA,
    NEXT_PUBLIC_CHECKOUT_URL_CLIPART:
      process.env.NEXT_PUBLIC_CHECKOUT_URL_CLIPART,
    NEXT_PUBLIC_CHECKOUT_URL_VINTAGE:
      process.env.NEXT_PUBLIC_CHECKOUT_URL_VINTAGE,
  };

  if (checkoutUrlEnv) {
    const specific = byEnv[checkoutUrlEnv]?.trim();
    if (specific) return specific;
  }

  return getExternalCheckoutUrl();
}
