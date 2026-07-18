import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { startCheckout } from "@/features/payments/actions";
import { formatPrice } from "@/lib/utils";
import type { BookProduct } from "@/types/product";

type PricingSectionProps = {
  book: BookProduct;
};

export function PricingSection({ book }: PricingSectionProps) {
  const provider = process.env.PAYMENT_PROVIDER ?? "polar";

  return (
    <section id="pricing" className="scroll-mt-24 bg-[var(--surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--steel)]">
            Pricing
          </p>
          <h2 className="text-balance text-[36px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[48px]">
            One book. Lifetime access.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
            Instant download after checkout. No subscription required.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-md">
          <article className="rounded-lg border-2 border-[var(--primary)] bg-[var(--surface)] p-8 shadow-[rgba(15,15,15,0.08)_0px_4px_12px_0px]">
            <span className="inline-flex rounded-full bg-[var(--primary)] px-2.5 py-1 text-[13px] font-semibold text-white">
              Most Popular
            </span>
            <h3 className="mt-5 text-[22px] font-semibold leading-snug text-[var(--ink)]">
              {book.title}
            </h3>
            <div className="mt-4 flex items-end gap-3">
              <p className="text-5xl font-semibold tracking-tight text-[var(--ink)]">
                {formatPrice(book.pricing.price, book.pricing.currency)}
              </p>
              {book.pricing.compareAtPrice ? (
                <p className="mb-2 text-base text-[var(--stone)] line-through">
                  {formatPrice(
                    book.pricing.compareAtPrice,
                    book.pricing.currency,
                  )}
                </p>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-[var(--steel)]">
              One-time payment · Instant PDF delivery
            </p>

            <ul className="mt-8 space-y-3">
              {book.pricing.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-base text-[var(--charcoal)]"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--semantic-success)]"
                    aria-hidden
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <form action={startCheckout} className="mt-8">
              <input type="hidden" name="productId" value={book.id} />
              <input type="hidden" name="slug" value={book.slug} />
              <input type="hidden" name="provider" value={provider} />
              <Button type="submit" size="lg" className="w-full">
                Buy Now
              </Button>
            </form>

            <p className="mt-4 text-center text-xs leading-relaxed text-[var(--steel)]">
              Secure checkout via Polar, Stripe, or Paddle. Payment secrets never
              touch the browser.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
