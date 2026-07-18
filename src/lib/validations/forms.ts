import { z } from "zod";

export const checkoutSchema = z.object({
  productId: z.string().min(1),
  slug: z.string().min(1).max(120),
  provider: z.enum(["polar", "stripe", "paddle"]),
  email: z.string().email().optional(),
});

export type CheckoutValues = z.infer<typeof checkoutSchema>;
