export type ConsultationInterval =
  | "one_time"
  | "1_month"
  | "3_months"
  | "6_months"
  | "12_months";

export type ConsultationPlan = {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: ConsultationInterval;
  intervalMonths: number;
  intervalLabel: string;
  description: string;
  features: string[];
  polarProductId?: string;
  featured?: boolean;
  ctaLabel: string;
};

const INTERVAL_META: Record<
  ConsultationInterval,
  { intervalMonths: number; intervalLabel: string }
> = {
  one_time: { intervalMonths: 0, intervalLabel: "once" },
  "1_month": { intervalMonths: 1, intervalLabel: "1 mo" },
  "3_months": { intervalMonths: 3, intervalLabel: "3 mo" },
  "6_months": { intervalMonths: 6, intervalLabel: "6 mo" },
  "12_months": { intervalMonths: 12, intervalLabel: "12 mo" },
};

/**
 * Consultation packages (content in code).
 * Only Polar product IDs come from env/Vercel.
 */
const PLAN_DEFINITIONS = [
  {
    id: "consult_15",
    envProductIdKey: "CONSULTATION_15_POLAR_PRODUCT_ID",
    name: "Starter",
    price: 15,
    interval: "1_month" as const,
    description:
      "A focused 1-month check-in to clarify goals and stay accountable.",
    features: [
      "1 consultation session",
      "Email support",
      "Personal action plan",
      "Billed every 1 month",
    ],
    featured: false,
    ctaLabel: "Subscribe",
  },
  {
    id: "consult_30",
    envProductIdKey: "CONSULTATION_30_POLAR_PRODUCT_ID",
    name: "Growth",
    price: 30,
    interval: "3_months" as const,
    description:
      "3 months of guidance for habits, mindset, and consistent growth.",
    features: [
      "Consultation sessions across 3 months",
      "Priority email support",
      "Custom habit roadmap",
      "Progress review",
      "Billed every 3 months",
    ],
    featured: true,
    ctaLabel: "Subscribe",
  },
  {
    id: "consult_40",
    envProductIdKey: "CONSULTATION_40_POLAR_PRODUCT_ID",
    name: "Momentum",
    price: 40,
    interval: "6_months" as const,
    description:
      "6 months of structured coaching for confidence and discipline.",
    features: [
      "Consultation sessions across 6 months",
      "Priority support",
      "Personalized growth plan",
      "Weekly check-in prompts",
      "Billed every 6 months",
    ],
    featured: false,
    ctaLabel: "Subscribe",
  },
  {
    id: "consult_60",
    envProductIdKey: "CONSULTATION_60_POLAR_PRODUCT_ID",
    name: "Premium",
    price: 60,
    interval: "12_months" as const,
    description:
      "12 months of premium support for long-term transformation.",
    features: [
      "Consultation sessions across 12 months",
      "Direct priority support",
      "Full personalized strategy",
      "Monthly progress report",
      "Billed every 12 months",
    ],
    featured: false,
    ctaLabel: "Subscribe",
  },
] as const;

export function getConsultationPlans(): ConsultationPlan[] {
  return PLAN_DEFINITIONS.map((plan) => {
    const meta = INTERVAL_META[plan.interval];
    const polarProductId = process.env[plan.envProductIdKey]?.trim();

    return {
      id: plan.id,
      name: plan.name,
      price: plan.price,
      currency: "USD",
      interval: plan.interval,
      intervalMonths: meta.intervalMonths,
      intervalLabel: meta.intervalLabel,
      description: plan.description,
      features: [...plan.features],
      polarProductId: polarProductId || undefined,
      featured: plan.featured,
      ctaLabel: plan.ctaLabel,
    };
  });
}
