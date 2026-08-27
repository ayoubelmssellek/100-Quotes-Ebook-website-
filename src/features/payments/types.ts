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

/** Public checkout link for the ebook (Stripe Payment Link, Gumroad, Lemon Squeezy, etc.) */
export function getExternalCheckoutUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_CHECKOUT_URL?.trim();
  return url || undefined;
}
