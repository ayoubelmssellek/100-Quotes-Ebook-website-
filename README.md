# Mind & Heart Hub — E-book Sales Website

Premium Next.js storefront for:

**100 Inspirational Quotes for Self-Improvement – Part 1**

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

## Payments

Polar has been removed. Buy Now uses an external checkout URL:

```env
NEXT_PUBLIC_SITE_URL=https://www.mindandhearthub.shop
NEXT_PUBLIC_CHECKOUT_URL=https://your-payment-provider-checkout-link
DOWNLOAD_ACCESS_TOKEN=long-random-secret
```

Set your payment provider’s success redirect to:

`https://www.mindandhearthub.shop/books/100-inspirational-quotes-for-self-improvement/success`

Optional Stripe/Paddle adapters remain under `src/features/payments` for later API integration.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
