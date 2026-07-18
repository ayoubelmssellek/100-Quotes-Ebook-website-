export type ConsultationPlan = {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: "month" | "one_time";
  description: string;
  features: string[];
  polarProductId?: string;
  featured?: boolean;
  ctaLabel: string;
};

function readNumber(value: string | undefined, fallback: number): number {
  if (!value) return fallback;
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function readFeatures(value: string | undefined, fallback: string[]): string[] {
  if (!value?.trim()) return fallback;
  return value
    .split("|")
    .map((item) => item.trim())
    .filter(Boolean);
}

/**
 * Consultation subscription plans.
 * Prices, names, and Polar product IDs are controlled from Vercel env vars.
 * Change values in Vercel → Redeploy to apply.
 */
export function getConsultationPlans(): ConsultationPlan[] {
  if (process.env.CONSULTATION_ENABLED === "false") return [];

  const currency = process.env.CONSULTATION_CURRENCY || "USD";

  const plans: ConsultationPlan[] = [
    {
      id: "consult_15",
      name: process.env.CONSULTATION_15_NAME || "Starter",
      price: readNumber(process.env.CONSULTATION_15_PRICE, 15),
      currency,
      interval:
        process.env.CONSULTATION_15_INTERVAL === "one_time" ? "one_time" : "month",
      description:
        process.env.CONSULTATION_15_DESCRIPTION ||
        "A focused monthly check-in to clarify goals and stay accountable.",
      features: readFeatures(process.env.CONSULTATION_15_FEATURES, [
        "1 consultation session / month",
        "Email support",
        "Personal action plan",
      ]),
      polarProductId: process.env.CONSULTATION_15_POLAR_PRODUCT_ID || undefined,
      featured: process.env.CONSULTATION_15_FEATURED === "true",
      ctaLabel: process.env.CONSULTATION_15_CTA || "Subscribe",
    },
    {
      id: "consult_30",
      name: process.env.CONSULTATION_30_NAME || "Growth",
      price: readNumber(process.env.CONSULTATION_30_PRICE, 30),
      currency,
      interval:
        process.env.CONSULTATION_30_INTERVAL === "one_time" ? "one_time" : "month",
      description:
        process.env.CONSULTATION_30_DESCRIPTION ||
        "Deeper guidance for habits, mindset, and consistent self-improvement.",
      features: readFeatures(process.env.CONSULTATION_30_FEATURES, [
        "2 consultation sessions / month",
        "Priority email support",
        "Custom habit roadmap",
        "Progress review",
      ]),
      polarProductId: process.env.CONSULTATION_30_POLAR_PRODUCT_ID || undefined,
      featured: process.env.CONSULTATION_30_FEATURED !== "false",
      ctaLabel: process.env.CONSULTATION_30_CTA || "Subscribe",
    },
    {
      id: "consult_40",
      name: process.env.CONSULTATION_40_NAME || "Momentum",
      price: readNumber(process.env.CONSULTATION_40_PRICE, 40),
      currency,
      interval:
        process.env.CONSULTATION_40_INTERVAL === "one_time" ? "one_time" : "month",
      description:
        process.env.CONSULTATION_40_DESCRIPTION ||
        "Structured coaching for confidence, discipline, and long-term growth.",
      features: readFeatures(process.env.CONSULTATION_40_FEATURES, [
        "3 consultation sessions / month",
        "Priority support",
        "Personalized growth plan",
        "Weekly check-in prompts",
      ]),
      polarProductId: process.env.CONSULTATION_40_POLAR_PRODUCT_ID || undefined,
      featured: process.env.CONSULTATION_40_FEATURED === "true",
      ctaLabel: process.env.CONSULTATION_40_CTA || "Subscribe",
    },
    {
      id: "consult_60",
      name: process.env.CONSULTATION_60_NAME || "Premium",
      price: readNumber(process.env.CONSULTATION_60_PRICE, 60),
      currency,
      interval:
        process.env.CONSULTATION_60_INTERVAL === "one_time" ? "one_time" : "month",
      description:
        process.env.CONSULTATION_60_DESCRIPTION ||
        "Full premium support for serious transformation and accountability.",
      features: readFeatures(process.env.CONSULTATION_60_FEATURES, [
        "4 consultation sessions / month",
        "Direct priority support",
        "Full personalized strategy",
        "Monthly progress report",
        "Resource recommendations",
      ]),
      polarProductId: process.env.CONSULTATION_60_POLAR_PRODUCT_ID || undefined,
      featured: process.env.CONSULTATION_60_FEATURED === "true",
      ctaLabel: process.env.CONSULTATION_60_CTA || "Subscribe",
    },
  ];

  return plans.filter((plan) => {
    const key = `CONSULTATION_${Math.round(plan.price)}_ENABLED`;
    return process.env[key] !== "false";
  });
}
