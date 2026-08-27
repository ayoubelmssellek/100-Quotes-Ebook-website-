import { PaddlePaymentService } from "./services/paddle";
import { StripePaymentService } from "./services/stripe";
import {
  getDefaultPaymentProvider,
  type PaymentProvider,
  type PaymentService,
} from "./types";

export function getPaymentService(
  provider: PaymentProvider = getDefaultPaymentProvider(),
): PaymentService {
  switch (provider) {
    case "paddle":
      return new PaddlePaymentService();
    case "stripe":
    default:
      return new StripePaymentService();
  }
}

export * from "./types";
