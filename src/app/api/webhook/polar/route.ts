import { Webhooks } from "@polar-sh/nextjs";
import { markCheckoutPaid } from "@/features/payments/orders";

/**
 * Polar webhook endpoint.
 *
 * In Polar dashboard → Webhooks → Add Endpoint:
 *   URL:     https://YOUR_DOMAIN/api/webhook/polar
 *   Events:  order.paid, checkout.updated
 *   Secret:  copy into POLAR_WEBHOOK_SECRET
 */
export const POST = Webhooks({
  webhookSecret: process.env.POLAR_WEBHOOK_SECRET ?? "",
  onOrderPaid: async (payload) => {
    const order = payload.data;
    if (order.checkoutId) {
      markCheckoutPaid(order.checkoutId, {
        orderId: order.id,
        email: order.customer?.email ?? undefined,
        productIds: order.productId ? [order.productId] : undefined,
      });
    }

    console.info("[polar] order.paid", {
      orderId: order.id,
      checkoutId: order.checkoutId,
    });
  },
  onCheckoutUpdated: async (payload) => {
    const checkout = payload.data;
    if (checkout.status === "succeeded" || checkout.status === "confirmed") {
      markCheckoutPaid(checkout.id, {
        email: checkout.customerEmail ?? undefined,
        productIds: checkout.products?.map((product) => product.id),
      });
    }

    console.info("[polar] checkout.updated", {
      checkoutId: checkout.id,
      status: checkout.status,
    });
  },
});
