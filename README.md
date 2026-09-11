# Mind & Heart Hub — Digital Products Store

Next.js storefront for e-books and digital downloads:

- **100 Inspirational Quotes for Self-Improvement** — €11
- **Everyday Motivation** — €11
- **The Ultimate Motivation Bundle** — €100 (editable PDF + both motivation PDFs)
- **Kids Science Stories** — singles (€11) + Basic / Premium / Pro packs

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

## Orders

**Order Now** sends the request through EmailJS (frontend only) to `contact@mindandhearthub.shop`. The customer stays on the site and sees a success or error message. Support remains `support@mindandhearthub.shop`.

Set these public values in `.env.local` / Vercel (do not add the EmailJS private key):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=
```

In the EmailJS template, set the recipient to `contact@mindandhearthub.shop` and include variables such as `{{product_name}}`, `{{plan}}`, `{{price}}`, `{{order_id}}`, `{{order_date}}`, and `{{message}}`.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run lint`
