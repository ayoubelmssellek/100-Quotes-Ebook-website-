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
