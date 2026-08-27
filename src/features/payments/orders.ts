/**
 * Lightweight paid-checkout registry for future payment webhooks.
 * Replace with Redis/DB for multi-instance production.
 */

export type PaidCheckoutRecord = {
  checkoutId: string;
  orderId?: string;
  email?: string;
  productIds?: string[];
  paidAt: string;
};

const paidCheckouts = new Map<string, PaidCheckoutRecord>();

export function markCheckoutPaid(
  checkoutId: string,
  details: Omit<PaidCheckoutRecord, "checkoutId" | "paidAt"> = {},
) {
  paidCheckouts.set(checkoutId, {
    checkoutId,
    ...details,
    paidAt: new Date().toISOString(),
  });
}

export function isCheckoutMarkedPaid(checkoutId: string): boolean {
  return paidCheckouts.has(checkoutId);
}

export function getPaidCheckout(
  checkoutId: string,
): PaidCheckoutRecord | undefined {
  return paidCheckouts.get(checkoutId);
}
