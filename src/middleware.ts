import { NextResponse, type NextRequest } from "next/server";

/**
 * Sets secure session cookie defaults for any app cookies we create later.
 * Checkout providers manage their own cookies; this hardens first-party cookies.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const requestId = request.headers.get("x-request-id") ?? crypto.randomUUID();
  response.headers.set("x-request-id", requestId);

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)",
  ],
};
