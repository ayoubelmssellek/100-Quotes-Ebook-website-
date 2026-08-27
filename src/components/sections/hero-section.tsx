import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckoutButton } from "@/components/shared/checkout-button";
import { getProductCheckoutUrl } from "@/features/payments";
import { getProductTypeLabel } from "@/features/products/data/catalog";
import { formatPrice } from "@/lib/utils";
import type { DigitalProduct } from "@/types/product";

type HeroSectionProps = {
  book: DigitalProduct;
};

export function HeroSection({ book }: HeroSectionProps) {
  const typeLabel = getProductTypeLabel(book.type);
  const metaBits = [
    typeLabel,
    book.pageCount ? `${book.pageCount} pages` : null,
    book.itemCount ? `${book.itemCount} items` : null,
    formatPrice(book.pricing.price, book.pricing.currency),
  ].filter(Boolean);

  const previewHref = book.previews.length > 0 ? "#preview" : "#about";
  const checkoutUrl = getProductCheckoutUrl(book.pricing.checkoutUrlEnv);
  const isComingSoon = book.status === "coming_soon";

  return (
    <section className="relative overflow-hidden text-[var(--ink)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(165deg,var(--hero-sky-from)_0%,#b8cfe0_42%,var(--hero-sky-to)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 50% at 15% 25%, rgba(255,255,255,0.5), transparent)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1120px] gap-10 px-6 pb-10 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14 lg:px-8 lg:pb-14 lg:pt-24">
        <div className="mx-auto max-w-2xl animate-fade-up text-center lg:mx-0 lg:text-left">
          <p className="mb-2 text-sm font-semibold tracking-tight text-[var(--ink)]">
            Mind & Heart Hub
          </p>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.5px] text-[var(--slate)]">
            {metaBits.join(" · ")}
            {isComingSoon ? " · Coming soon" : null}
          </p>
          <h1 className="text-balance text-[36px] font-semibold leading-[1.05] tracking-[-1.5px] sm:text-[48px] lg:text-[52px]">
            {book.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
            {book.subtitle}
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-[var(--steel)] lg:mx-0">
            {book.shortDescription}
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            {isComingSoon ? (
              <Button asChild variant="primary" size="lg">
                <Link href="/contact">Get notified</Link>
              </Button>
            ) : (
              <CheckoutButton
                href={checkoutUrl || "#pricing"}
                variant="primary"
                size="lg"
              >
                Pay now
              </CheckoutButton>
            )}
            <Button asChild variant="secondary" size="lg">
              <Link href={previewHref}>
                {book.previews.length > 0 ? "Preview" : "Learn more"}
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[560px] animate-fade-up [animation-delay:120ms] lg:max-w-none">
          <div className="rounded-xl border border-black/5 bg-white/80 p-3 shadow-[0_24px_48px_-8px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:p-4">
            <div className="relative flex min-h-[200px] w-full items-center justify-center overflow-visible rounded-lg bg-[var(--surface)]">
              <Image
                src={book.coverImage}
                alt={`Cover of ${book.title}`}
                width={1200}
                height={900}
                priority
                className="h-auto max-h-[min(70vh,520px)] w-full object-contain"
                sizes="(max-width: 768px) 92vw, 520px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
