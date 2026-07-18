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

export class PaddlePaymentService implements PaymentService {
  readonly provider = "paddle" as const;

  async createCheckoutSession(
    input: CheckoutSessionInput,
  ): Promise<CheckoutSessionResult> {
    const apiKey = requireEnv("PADDLE_API_KEY");
    const priceId = input.providerProductId || requireEnv("PADDLE_PRICE_ID");
    const apiBase =
      process.env.PADDLE_ENVIRONMENT === "production"
        ? "https://api.paddle.com"
        : "https://sandbox-api.paddle.com";

    const response = await fetch(`${apiBase}/transactions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [{ price_id: priceId, quantity: 1 }],
        customer: input.customerEmail
          ? { email: input.customerEmail }
          : undefined,
        custom_data: {
          slug: input.slug,
          productId: input.productId,
          ...input.metadata,
        },
        checkout: {
          url: input.successUrl,
        },
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Paddle checkout failed: ${detail}`);
    }

    const data = (await response.json()) as {
      data: {
        id: string;
        checkout?: { url?: string };
      };
    };

    const checkoutUrl = data.data.checkout?.url;
    if (!checkoutUrl) {
      throw new Error("Paddle did not return a checkout URL");
    }

    return {
      provider: this.provider,
      checkoutUrl,
      sessionId: data.data.id,
    };
  }
}
