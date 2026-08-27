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

## Payments

Buy Now uses external checkout URLs (Stripe Payment Link, Lemon Squeezy, Gumroad, etc.):

```env
NEXT_PUBLIC_SITE_URL=https://www.mindandhearthub.shop
NEXT_PUBLIC_CHECKOUT_URL=https://fallback-checkout-link
NEXT_PUBLIC_CHECKOUT_URL_QUOTES=
NEXT_PUBLIC_CHECKOUT_URL_EVERYDAY=
DOWNLOAD_ACCESS_TOKEN=long-random-secret
```

Set each product’s success redirect to:

`https://www.mindandhearthub.shop/books/<product-slug>/success`

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
