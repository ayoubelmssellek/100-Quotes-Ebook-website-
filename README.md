# Mind & Heart Hub — Digital Products Store

Next.js storefront for e-books and digital downloads:

- **100 Inspirational Quotes for Self-Improvement** — $12
- **Everyday Motivation** — $12
- Kids Story Books Collection — $19 (coming soon)
- Black & White Animal Clipart — $15 (coming soon)
- 50 Vintage Digital Templates — $27 (coming soon)

## Stack

- Next.js 15 (App Router)
- TypeScript (strict)
- Tailwind CSS 4
- Zod + React Hook Form

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Catalog

Products live in `src/features/products/data/catalog.ts`. Add PDFs under `content/books/` and map them in `src/app/api/download/[bookId]/route.ts`.

## Payments (Whop)

Create each product on Whop, upload the files there, then paste the **checkout URL** into `.env` / Vercel:

```env
PAYMENT_PROVIDER=whop
NEXT_PUBLIC_WHOP_CHECKOUT_QUOTES=https://whop.com/checkout/...
NEXT_PUBLIC_WHOP_CHECKOUT_EVERYDAY=https://whop.com/checkout/...
NEXT_PUBLIC_WHOP_CHECKOUT_KIDS_01=https://whop.com/checkout/...
# ... see .env.example for all keys
```

**Buy Now** on the site redirects to that Whop link. Whop handles payment + file delivery.  
Change a link anytime in env vars — no code change.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
