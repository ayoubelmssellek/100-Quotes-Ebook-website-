/** Pending Stripe/PayControl URL (same-origin shell only). */
export const PENDING_PAY_URL_KEY = "mh_pending_pay_url";

/** Buyer left for Stripe — Back should show cancel UI. */
export const PAY_EXITED_KEY = "mh_pay_exited";

/**
 * Context saved on THIS shell origin (localhost:3010 / mindandhearthub)
 * BEFORE Stripe opens. Survives Stripe in the same tab via sessionStorage.
 * Stripe never receives these values.
 */
export const PAY_CONTEXT_KEY = "mh_pay_context";

export type PayLocale = "pt" | "es" | "fr" | "nl" | "en";

export type PayContext = {
  lang: PayLocale;
  /** Absolute IPTV prices URL — cancel CTA only. */
  pricesUrl: string;
  /** PayControl/Stripe URL — retry CTA. */
  payUrl: string;
  order?: string;
  plan?: string;
  connections?: string;
  email?: string;
  name?: string;
};

export function isSafeHttpsUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === "https:";
  } catch {
    return false;
  }
}

export function isSafeReturnUrl(url: string): boolean {
  try {
    const u = new URL(url);
    return u.protocol === "https:" || u.protocol === "http:";
  } catch {
    return false;
  }
}

export function parseLocale(raw: string | null | undefined): PayLocale {
  const v = (raw || "").toLowerCase();
  if (v === "pt" || v === "es" || v === "fr" || v === "nl") return v;
  return "en";
}

export function readPayContext(): PayContext | null {
  try {
    const raw = sessionStorage.getItem(PAY_CONTEXT_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as Partial<PayContext>;
    if (!data || typeof data !== "object") return null;
    return {
      lang: parseLocale(data.lang),
      pricesUrl: typeof data.pricesUrl === "string" ? data.pricesUrl : "",
      payUrl: typeof data.payUrl === "string" ? data.payUrl : "",
      order: typeof data.order === "string" ? data.order : undefined,
      plan: typeof data.plan === "string" ? data.plan : undefined,
      connections: typeof data.connections === "string" ? data.connections : undefined,
      email: typeof data.email === "string" ? data.email : undefined,
      name: typeof data.name === "string" ? data.name : undefined,
    };
  } catch {
    return null;
  }
}

export function writePayContext(ctx: PayContext): void {
  sessionStorage.setItem(PAY_CONTEXT_KEY, JSON.stringify(ctx));
}
