/** Public origin for payment handoff + success pages. */
export const siteOrigin =
  (typeof process !== "undefined" && process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "")) ||
  "https://www.mindandhearthub.shop";
