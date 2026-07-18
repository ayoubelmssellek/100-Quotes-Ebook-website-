import type {
  CheckoutSessionInput,
  CheckoutSessionResult,
  PaymentService,
} from "../types";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export class StripePaymentService implements PaymentService {
  readonly provider = "stripe" as const;

  async createCheckoutSession(
    input: CheckoutSessionInput,
  ): Promise<CheckoutSessionResult> {
    const secretKey = requireEnv("STRIPE_SECRET_KEY");
    const priceId = input.providerProductId || requireEnv("STRIPE_PRICE_ID");

    const params = new URLSearchParams();
    params.set("mode", "payment");
    params.set("success_url", input.successUrl);
    params.set("cancel_url", input.cancelUrl);
    params.set("line_items[0][price]", priceId);
    params.set("line_items[0][quantity]", "1");
    params.set("metadata[slug]", input.slug);
    params.set("metadata[productId]", input.productId);

    if (input.customerEmail) {
      params.set("customer_email", input.customerEmail);
    }

    const response = await fetch(
      "https://api.stripe.com/v1/checkout/sessions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      },
    );

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Stripe checkout failed: ${detail}`);
    }

    const data = (await response.json()) as {
      id: string;
      url: string | null;
    };

    if (!data.url) {
      throw new Error("Stripe did not return a checkout URL");
    }

    return {
      provider: this.provider,
      checkoutUrl: data.url,
      sessionId: data.id,
    };
  }
}
