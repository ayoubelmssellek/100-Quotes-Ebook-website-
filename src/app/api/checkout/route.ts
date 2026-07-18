import { Checkout } from "@polar-sh/nextjs";
import { absoluteUrl } from "@/lib/utils";

const server =
  process.env.POLAR_SERVER === "sandbox" ? "sandbox" : "production";

/**
 * Polar Checkout endpoint.
 * Buy Now links to: /api/checkout?products=YOUR_POLAR_PRODUCT_ID
 */
export const GET = Checkout({
  accessToken: process.env.POLAR_ACCESS_TOKEN,
  successUrl: absoluteUrl(
    "/books/100-inspirational-quotes-for-self-improvement/success?checkout_id={CHECKOUT_ID}",
  ),
  returnUrl: absoluteUrl("/#pricing"),
  server,
  theme: "light",
  includeCheckoutId: true,
});
