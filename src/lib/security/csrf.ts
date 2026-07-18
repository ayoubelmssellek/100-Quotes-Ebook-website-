import { headers } from "next/headers";

/**
 * Basic origin check for Server Actions / mutations.
 * Next.js also enforces CSRF protections for Server Actions.
 */
export async function assertSameOrigin(): Promise<boolean> {
  const headerStore = await headers();
  const origin = headerStore.get("origin");
  const host = headerStore.get("host");

  if (!origin || !host) {
    return process.env.NODE_ENV !== "production";
  }

  try {
    const originHost = new URL(origin).host;
    return originHost === host;
  } catch {
    return false;
  }
}

export function sanitizePlainText(input: string): string {
  return input
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .replace(/[<>&"'`]/g, "")
    .trim();
}
