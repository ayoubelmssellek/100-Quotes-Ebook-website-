import { Polar } from "@polar-sh/sdk";

function getPolarClient() {
  const accessToken = process.env.POLAR_ACCESS_TOKEN;
  if (!accessToken) {
    throw new Error("Missing POLAR_ACCESS_TOKEN");
  }

  return new Polar({
    accessToken,
    server: process.env.POLAR_SERVER === "sandbox" ? "sandbox" : "production",
  });
}

/**
 * Verifies a Polar checkout session is completed/paid.
 */
export async function verifyPolarCheckout(
  checkoutId: string,
): Promise<{ valid: boolean; email?: string | null }> {
  try {
    const polar = getPolarClient();
    const checkout = await polar.checkouts.get({ id: checkoutId });

    const valid =
      checkout.status === "succeeded" || checkout.status === "confirmed";

    return {
      valid,
      email: checkout.customerEmail ?? null,
    };
  } catch (error) {
    console.error("[polar] verify checkout failed", error);
    return { valid: false };
  }
}
