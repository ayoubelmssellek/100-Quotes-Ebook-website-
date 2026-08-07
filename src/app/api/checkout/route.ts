import { Polar } from "@polar-sh/sdk";
import { NextRequest, NextResponse } from "next/server";

function getSiteUrl(req: NextRequest): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;

  const host = req.headers.get("x-forwarded-host") || req.headers.get("host");
  const proto = req.headers.get("x-forwarded-proto") || "https";
  if (host) return `${proto}://${host}`;

  return "http://localhost:3000";
}

/**
 * Polar Checkout — Buy Now hits:
 * /api/checkout?products=YOUR_PRODUCT_ID
 */
export async function GET(req: NextRequest) {
  const accessToken = process.env.POLAR_ACCESS_TOKEN;
  const productFromEnv =
    process.env.POLAR_PRODUCT_ID || process.env.NEXT_PUBLIC_POLAR_PRODUCT_ID;
  const server =
    process.env.POLAR_SERVER === "sandbox" ? "sandbox" : "production";

  if (!accessToken) {
    return NextResponse.json(
      {
        error: "Checkout is not configured",
        detail:
          "Missing POLAR_ACCESS_TOKEN in Vercel Environment Variables. Add it and redeploy.",
      },
      { status: 500 },
    );
  }

  const url = new URL(req.url);
  const products = url.searchParams.getAll("products").filter(Boolean);
  if (products.length === 0 && productFromEnv) {
    products.push(productFromEnv);
  }

  if (products.length === 0) {
    return NextResponse.json(
      {
        error: "Missing product",
        detail:
          "Add ?products=YOUR_PRODUCT_ID or set POLAR_PRODUCT_ID in Vercel.",
      },
      { status: 400 },
    );
  }

  const siteUrl = getSiteUrl(req);
  const successUrl = `${siteUrl}/books/100-inspirational-quotes-for-self-improvement/success?checkout_id={CHECKOUT_ID}`;

  try {
    const polar = new Polar({ accessToken, server });
    // Do not pass returnUrl — Polar only shows the back arrow when returnUrl is set.
    const checkout = await polar.checkouts.create({
      products,
      successUrl,
      allowDiscountCodes: false,
    });

    if (!checkout.url) {
      return NextResponse.json(
        { error: "Polar did not return a checkout URL" },
        { status: 502 },
      );
    }

    const redirectUrl = new URL(checkout.url);
    redirectUrl.searchParams.set("theme", "light");
    return NextResponse.redirect(redirectUrl.toString());
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unknown Polar checkout error";

    console.error("[polar checkout]", {
      server,
      products,
      siteUrl,
      message,
      error,
    });

    return NextResponse.json(
      {
        error: "Unable to start Polar checkout",
        detail: message,
        hint:
          "Confirm POLAR_ACCESS_TOKEN, POLAR_PRODUCT_ID, and POLAR_SERVER (sandbox vs production) match your Polar dashboard. Then redeploy.",
        server,
        products,
      },
      { status: 500 },
    );
  }
}
