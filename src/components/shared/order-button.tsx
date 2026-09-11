"use client";

import { Button } from "@/components/ui/button";
import { useOrderFlow } from "@/features/orders/order-flow-provider";

type OrderButtonProps = {
  productId: string;
  className?: string;
};

function SuccessMessage({ className }: { className?: string }) {
  return (
    <div
      className={className}
      role="status"
      aria-live="polite"
    >
      <p className="text-base font-semibold text-[var(--ink)]">
        Order Received Successfully! ✅
      </p>
      <p className="mt-2 text-sm leading-relaxed text-[var(--slate)]">
        Thank you for your order.
        <br />
        Your order has been received successfully.
        <br />
        We will contact you shortly with the next steps.
      </p>
    </div>
  );
}

export function OrderButton({ productId, className }: OrderButtonProps) {
  const { status, errorMessage, submitOrder } = useOrderFlow();
  const isSending = status === "sending";

  if (status === "success") {
    return <SuccessMessage className={className} />;
  }

  return (
    <div className={className}>
      <Button
        type="button"
        variant="primary"
        size="lg"
        className={className?.includes("w-full") ? "w-full" : undefined}
        disabled={isSending}
        aria-busy={isSending}
        onClick={() => {
          void submitOrder(productId);
        }}
      >
        {isSending ? "Sending Order..." : "Order Now"}
      </Button>
      {status === "error" && errorMessage ? (
        <p className="mt-3 text-center text-sm leading-relaxed text-[var(--semantic-error)]" role="alert">
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
}
