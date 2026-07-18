# Mind & Heart Hub — E-book Sales Website

Premium Next.js storefront for digital e-books, starting with:

**100 Inspirational Quotes for Self-Improvement – Part 1**

## Stack

- Next.js 15 (App Router)
- TypeScript (strict)
- Tailwind CSS 4
- shadcn-style UI primitives
- Zod + React Hook Form
- Polar / Stripe / Paddle payment adapters

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

See `.env.example`. Never commit secrets. Payment credentials are server-only.

## Architecture

```
src/
  app/                  # Routes, SEO, API
  components/           # UI + layout + sections
  features/
    books/              # Product catalog + landing composition
    payments/           # Reusable Polar/Stripe/Paddle services
    contact/            # Contact form + server actions
  lib/security/         # Rate limit, CSRF helpers, secure cookies
  types/                # Shared domain types
content/books/          # Private digital files (not publicly listed)
```

Add a new book by extending `src/features/books/data/books.ts`. Dynamic routes at `/books/[slug]` pick it up automatically.

## Polar checkout setup

1. In Polar, create your e-book **Product** and copy its Product ID.
2. Create an **API key** (Organization → Developers / Settings).
3. Create a **Webhook** (recommended):
   - URL: `https://YOUR_DOMAIN/api/webhook/polar`
   - Events: `order.paid`, `checkout.updated`
   - Copy the signing secret
4. Add to `.env.local` / Vercel env:

```env
NEXT_PUBLIC_SITE_URL=https://YOUR_DOMAIN
PAYMENT_PROVIDER=polar
POLAR_SERVER=production
POLAR_ACCESS_TOKEN=polar_oat_...
POLAR_PRODUCT_ID=your_product_id
NEXT_PUBLIC_POLAR_PRODUCT_ID=your_product_id
POLAR_WEBHOOK_SECRET=whsec_...
```

5. Buy Now goes to `/api/checkout?products=PRODUCT_ID` → Polar hosted checkout → success page with download.

Local testing: use `POLAR_SERVER=sandbox` and a tunnel (ngrok) for the webhook URL.

## Payments

Polar is the default. Stripe/Paddle adapters remain available via `PAYMENT_PROVIDER`.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
- `npm run format` — Prettier
