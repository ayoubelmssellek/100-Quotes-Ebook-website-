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

## Payments

Set `PAYMENT_PROVIDER` to `polar`, `stripe`, or `paddle`, then fill the matching secrets in `.env.local`.

Without credentials, checkout falls back to a demo success page in development.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint
- `npm run format` — Prettier
