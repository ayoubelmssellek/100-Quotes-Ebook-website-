import { Check } from "lucide-react";
import { CurrencyCheckout } from "@/components/shared/currency-checkout";
import { getProductCheckoutUrl } from "@/features/payments";
import { formatPrice } from "@/lib/utils";
import type { DigitalProduct } from "@/types/product";

type PricingSectionProps = {
  book: DigitalProduct;
};

export function PricingSection({ book }: PricingSectionProps) {
  const isComingSoon = book.status === "coming_soon";
  const checkoutOptions = (book.pricing.currencyOptions ?? [
    {
      price: book.pricing.price,
      currency: book.pricing.currency as "USD" | "EUR",
      compareAtPrice: book.pricing.compareAtPrice,
      checkoutUrl: book.pricing.checkoutUrl,
      checkoutUrlEnv: book.pricing.checkoutUrlEnv,
    },
  ]).map((option) => ({
    ...option,
    checkoutUrl:
      option.checkoutUrl ??
      getProductCheckoutUrl(option.checkoutUrlEnv, !book.pricing.currencyOptions),
  }));

  const productLabel =
    book.type === "ebook"
      ? "One e-book. Lifetime access."
      : "One download. Lifetime access.";

  return (
    <section id="pricing" className="scroll-mt-24 bg-[var(--surface-soft)] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.5px] text-[var(--steel)]">
            Pricing
          </p>
          <h2 className="text-balance text-[36px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[48px]">
            {isComingSoon ? "Coming soon" : productLabel}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
            {isComingSoon
              ? "This product is not for sale yet."
              : "Pay securely. Instant file access after checkout."}
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-md">
          <article className="rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] p-8 shadow-[0_8px_24px_rgba(0,0,0,0.04)]">
            <span className="inline-flex rounded-full bg-[var(--primary)] px-2.5 py-1 text-[13px] font-semibold text-white">
              {isComingSoon ? "Coming Soon" : "Digital Download"}
            </span>
            <h3 className="mt-5 text-[22px] font-semibold leading-snug text-[var(--ink)]">
              {book.title}
            </h3>
            <div className="mt-4 flex items-end gap-3">
              <p className="text-5xl font-semibold tracking-tight text-[var(--ink)]">
                {formatPrice(
                  checkoutOptions[0].price,
                  checkoutOptions[0].currency,
                )}
              </p>
              {checkoutOptions[0].compareAtPrice ? (
                <p className="mb-2 text-base text-[var(--stone)] line-through">
                  {formatPrice(
                    checkoutOptions[0].compareAtPrice,
                    checkoutOptions[0].currency,
                  )}
                </p>
              ) : null}
            </div>
            <p className="mt-2 text-sm text-[var(--steel)]">
              One-time payment · Instant digital delivery
            </p>

            <ul className="mt-8 space-y-3">
              {book.pricing.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-base text-[var(--charcoal)]"
                >
                  <Check
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--brand-green)]"
                    aria-hidden
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {isComingSoon ? (
              <a
                href="/contact"
                className="mt-8 inline-flex h-11 w-full items-center justify-center rounded-full bg-[var(--primary)] px-6 text-sm font-medium text-[var(--on-primary)]"
              >
                Notify Me
              </a>
            ) : (
              <CurrencyCheckout
                options={checkoutOptions}
                className="mt-8"
              />
            )}

            <p className="mt-4 text-center text-xs leading-relaxed text-[var(--steel)]">
              {isComingSoon
                ? "We’ll let you know when this product launches."
                : "Secure checkout. Your files are available after payment."}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
