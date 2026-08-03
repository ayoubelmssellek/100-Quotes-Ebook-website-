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

function readInterval(
  value: string | undefined,
  fallback: ConsultationInterval,
): ConsultationInterval {
  const normalized = value?.trim().toLowerCase();
  switch (normalized) {
    case "one_time":
    case "1_month":
    case "month":
      return normalized === "one_time"
        ? "one_time"
        : normalized === "month"
          ? "1_month"
          : (normalized as ConsultationInterval);
    case "3_months":
    case "3_month":
      return "3_months";
    case "6_months":
    case "6_month":
      return "6_months";
    case "12_months":
    case "12_month":
    case "year":
      return "12_months";
    default:
      return fallback;
  }
}

function intervalMeta(interval: ConsultationInterval): {
  intervalMonths: number;
  intervalLabel: string;
} {
  switch (interval) {
    case "one_time":
      return { intervalMonths: 0, intervalLabel: "once" };
    case "1_month":
      return { intervalMonths: 1, intervalLabel: "1 mo" };
    case "3_months":
      return { intervalMonths: 3, intervalLabel: "3 mo" };
    case "6_months":
      return { intervalMonths: 6, intervalLabel: "6 mo" };
    case "12_months":
      return { intervalMonths: 12, intervalLabel: "12 mo" };
  }
}

/**
 * Consultation packages with matching duration ladder:
 * $15 / 1 mo → $30 / 3 mo → $40 / 6 mo → $60 / 12 mo
 * Controlled from Vercel env vars. Redeploy after changes.
 */
export function getConsultationPlans(): ConsultationPlan[] {
  if (process.env.CONSULTATION_ENABLED === "false") return [];

  const currency = process.env.CONSULTATION_CURRENCY || "USD";

  const rawPlans = [
    {
      id: "consult_15",
      envKey: "15",
      defaultName: "Starter",
      defaultPrice: 15,
      defaultInterval: "1_month" as ConsultationInterval,
      defaultDescription:
        "A focused 1-month check-in to clarify goals and stay accountable.",
      defaultFeatures: [
        "1 consultation session",
        "Email support",
        "Personal action plan",
        "Billed every 1 month",
      ],
      defaultFeatured: false,
    },
    {
      id: "consult_30",
      envKey: "30",
      defaultName: "Growth",
      defaultPrice: 30,
      defaultInterval: "3_months" as ConsultationInterval,
      defaultDescription:
        "3 months of guidance for habits, mindset, and consistent growth.",
      defaultFeatures: [
        "Consultation sessions across 3 months",
        "Priority email support",
        "Custom habit roadmap",
        "Progress review",
        "Billed every 3 months",
      ],
      defaultFeatured: true,
    },
    {
      id: "consult_40",
      envKey: "40",
      defaultName: "Momentum",
      defaultPrice: 40,
      defaultInterval: "6_months" as ConsultationInterval,
      defaultDescription:
        "6 months of structured coaching for confidence and discipline.",
      defaultFeatures: [
        "Consultation sessions across 6 months",
        "Priority support",
        "Personalized growth plan",
        "Weekly check-in prompts",
        "Billed every 6 months",
      ],
      defaultFeatured: false,
    },
    {
      id: "consult_60",
      envKey: "60",
      defaultName: "Premium",
      defaultPrice: 60,
      defaultInterval: "12_months" as ConsultationInterval,
      defaultDescription:
        "12 months of premium support for long-term transformation.",
      defaultFeatures: [
        "Consultation sessions across 12 months",
        "Direct priority support",
        "Full personalized strategy",
        "Monthly progress report",
        "Billed every 12 months",
      ],
      defaultFeatured: false,
    },
  ];

  const plans: ConsultationPlan[] = rawPlans.map((plan) => {
    const interval = readInterval(
      process.env[`CONSULTATION_${plan.envKey}_INTERVAL`],
      plan.defaultInterval,
    );
    const meta = intervalMeta(interval);
    const featuredEnv = process.env[`CONSULTATION_${plan.envKey}_FEATURED`];

    return {
      id: plan.id,
      name:
        process.env[`CONSULTATION_${plan.envKey}_NAME`] || plan.defaultName,
      price: readNumber(
        process.env[`CONSULTATION_${plan.envKey}_PRICE`],
        plan.defaultPrice,
      ),
      currency,
      interval,
      intervalMonths: meta.intervalMonths,
      intervalLabel: meta.intervalLabel,
      description:
        process.env[`CONSULTATION_${plan.envKey}_DESCRIPTION`] ||
        plan.defaultDescription,
      features: readFeatures(
        process.env[`CONSULTATION_${plan.envKey}_FEATURES`],
        plan.defaultFeatures,
      ),
      polarProductId:
        process.env[`CONSULTATION_${plan.envKey}_POLAR_PRODUCT_ID`] ||
        undefined,
      featured:
        featuredEnv === undefined
          ? plan.defaultFeatured
          : featuredEnv === "true",
      ctaLabel: process.env[`CONSULTATION_${plan.envKey}_CTA`] || "Subscribe",
    };
  });

  return plans.filter((plan) => {
    const key = `CONSULTATION_${Math.round(plan.price)}_ENABLED`;
    return process.env[key] !== "false";
  });
}
