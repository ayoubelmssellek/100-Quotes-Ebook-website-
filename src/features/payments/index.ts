import { PaddlePaymentService } from "./services/paddle";
import { PolarPaymentService } from "./services/polar";
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
    case "stripe":
      return new StripePaymentService();
    case "paddle":
      return new PaddlePaymentService();
    case "polar":
    default:
      return new PolarPaymentService();
  }
}

export * from "./types";
