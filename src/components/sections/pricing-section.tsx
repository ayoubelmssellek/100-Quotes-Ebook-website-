import { Check } from "lucide-react";
import { CheckoutButton } from "@/components/shared/checkout-button";
import { getProductCheckoutUrl } from "@/features/payments";
import { formatPrice } from "@/lib/utils";
import type { DigitalProduct } from "@/types/product";

type PricingSectionProps = {
  book: DigitalProduct;
};

export function PricingSection({ book }: PricingSectionProps) {
  const isComingSoon = book.status === "coming_soon";
  const checkoutUrl = getProductCheckoutUrl(book.pricing.checkoutUrlEnv);
  const checkoutHref = isComingSoon
    ? "/contact"
    : checkoutUrl || "/contact";

  const productLabel =
    book.type === "ebook"
      ? "One e-book. Lifetime access."
      : "One download. Lifetime access.";

  return (
    <section id="pricing" className="scroll-mt-24 bg-[var(--surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--steel)]">
            Pricing
          </p>
          <h2 className="text-balance text-[36px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[48px]">
            {isComingSoon ? "Coming soon" : productLabel}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
            {isComingSoon
              ? "This product is not for sale yet. Contact support to get notified at launch."
              : "Instant download after checkout. No subscription required."}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-md">
          <article className="rounded-lg border-2 border-[var(--primary)] bg-[var(--surface)] p-8 shadow-[rgba(15,15,15,0.08)_0px_4px_12px_0px]">
            <span className="inline-flex rounded-full bg-[var(--primary)] px-2.5 py-1 text-[13px] font-semibold text-white">
              {isComingSoon ? "Coming Soon" : "Digital Download"}
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
              One-time payment · Instant delivery
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

            <CheckoutButton href={checkoutHref} size="lg" className="mt-8 w-full">
              {isComingSoon
                ? "Notify Me"
                : checkoutUrl
                  ? "Buy Now"
                  : "Contact Support to Buy"}
            </CheckoutButton>

            <p className="mt-4 text-center text-xs leading-relaxed text-[var(--steel)]">
              Secure checkout. Payment is handled by our payment provider.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
