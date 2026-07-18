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

export class PolarPaymentService implements PaymentService {
  readonly provider = "polar" as const;

  async createCheckoutSession(
    input: CheckoutSessionInput,
  ): Promise<CheckoutSessionResult> {
    const accessToken = requireEnv("POLAR_ACCESS_TOKEN");
    const productId =
      input.providerProductId || requireEnv("POLAR_PRODUCT_ID");

    const response = await fetch("https://api.polar.sh/v1/checkouts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        products: [productId],
        success_url: input.successUrl,
        customer_email: input.customerEmail,
        metadata: {
          slug: input.slug,
          productId: input.productId,
          ...input.metadata,
        },
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Polar checkout failed: ${detail}`);
    }

    const data = (await response.json()) as {
      id: string;
      url: string;
    };

    return {
      provider: this.provider,
      checkoutUrl: data.url,
      sessionId: data.id,
    };
  }
}
