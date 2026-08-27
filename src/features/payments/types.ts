import { getProductCheckoutUrl } from "./whop-checkout";

export type PaymentProvider = "stripe" | "paddle" | "external" | "whop";

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
  if (
    configured === "stripe" ||
    configured === "paddle" ||
    configured === "external" ||
    configured === "whop"
  ) {
    return configured;
  }
  return "whop";
}

export {
  getProductCheckoutUrl,
  getWhopCheckoutEnvMap,
  WHOP_CHECKOUT_ENV_KEYS,
} from "./whop-checkout";

/** @deprecated Use getProductCheckoutUrl */
export function getExternalCheckoutUrl(): string | undefined {
  return getProductCheckoutUrl();
}
