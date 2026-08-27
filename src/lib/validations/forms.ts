import { z } from "zod";

const sanitize = (value: string) =>
  value
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/[<>]/g, "")
    .trim();

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name must be under 80 characters")
    .transform(sanitize),
  email: z
    .string()
    .email("Enter a valid email address")
    .max(254, "Email is too long")
    .transform((value) => value.toLowerCase().trim()),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(120, "Subject must be under 120 characters")
    .transform(sanitize),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters")
    .transform(sanitize),
  website: z
    .string()
    .optional()
    .transform((value) => value ?? ""),
});

export type ContactFormValues = z.input<typeof contactFormSchema>;

export const checkoutSchema = z.object({
  productId: z.string().min(1),
  slug: z.string().min(1).max(120),
  provider: z.enum(["external", "stripe", "paddle"]),
  email: z.string().email().optional(),
});

export type CheckoutValues = z.infer<typeof checkoutSchema>;
