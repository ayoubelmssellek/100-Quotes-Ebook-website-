"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { sendProductOrder } from "@/features/orders/send-order";

type OrderStatus = "idle" | "sending" | "success" | "error";

type OrderFlowContextValue = {
  status: OrderStatus;
  errorMessage: string | null;
  submitOrder: (productId: string) => Promise<void>;
};

const OrderFlowContext = createContext<OrderFlowContextValue | null>(null);

export function OrderFlowProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<OrderStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const inFlight = useRef(false);
  const succeeded = useRef(false);

  const submitOrder = useCallback(async (productId: string) => {
    if (inFlight.current || succeeded.current) return;
    inFlight.current = true;
    setStatus("sending");
    setErrorMessage(null);

    try {
      await sendProductOrder(productId);
      succeeded.current = true;
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(
        "We couldn’t send your order. Please try again in a moment.",
      );
    } finally {
      inFlight.current = false;
    }
  }, []);

  return (
    <OrderFlowContext.Provider value={{ status, errorMessage, submitOrder }}>
      {children}
    </OrderFlowContext.Provider>
  );
}

export function useOrderFlow() {
  const context = useContext(OrderFlowContext);
  if (!context) {
    throw new Error("useOrderFlow must be used within OrderFlowProvider");
  }
  return context;
}
