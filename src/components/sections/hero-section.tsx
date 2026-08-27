import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
  const ctaLabel =
    book.status === "coming_soon" ? "Get notified" : "Buy Now";
  const ctaHref =
    book.status === "coming_soon" ? "/contact" : "#pricing";

  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] text-[var(--on-dark)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="absolute left-[8%] top-[18%] h-3 w-3 rounded-sm bg-[var(--brand-pink)] opacity-80" />
        <span className="absolute left-[18%] top-[62%] h-2.5 w-2.5 rounded-sm bg-[var(--brand-yellow)] opacity-80" />
        <span className="absolute right-[14%] top-[22%] h-3 w-3 rounded-sm bg-[var(--brand-teal)] opacity-80" />
        <span className="absolute right-[22%] top-[58%] h-2.5 w-2.5 rounded-sm bg-[var(--brand-orange)] opacity-80" />
        <span className="absolute left-[42%] top-[12%] h-2 w-2 rounded-sm bg-[var(--primary)] opacity-70" />
      </div>

      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 pb-8 pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8 lg:pb-0 lg:pt-[120px]">
        <div className="mx-auto max-w-2xl animate-fade-up text-center lg:mx-0 lg:text-left">
          <p className="mb-2 text-sm font-semibold tracking-tight text-white">
            Mind & Heart Hub
          </p>
          <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--on-dark-muted)]">
            {metaBits.join(" · ")}
            {book.status === "coming_soon" ? " · Coming soon" : null}
          </p>
          <h1 className="text-balance text-[36px] font-semibold leading-[1.05] tracking-[-1.5px] sm:text-[48px] lg:text-[56px] xl:text-[64px]">
            {book.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-[var(--on-dark-muted)] sm:text-xl">
            {book.subtitle}
          </p>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 lg:mx-0">
            {book.shortDescription}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
            <Button asChild size="lg">
              <Link href={ctaHref}>{ctaLabel}</Link>
            </Button>
            <Button asChild variant="secondary-on-dark" size="lg">
              <Link href={previewHref}>
                {book.previews.length > 0 ? "Preview" : "Learn more"}
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] animate-fade-up [animation-delay:120ms] lg:mr-0 lg:max-w-none">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(160deg,#eef1f6_0%,#f7f5f1_55%,#ebe7e0_100%)] p-5 shadow-[rgba(15,15,15,0.28)_0px_28px_56px_-12px] sm:p-6">
            <Image
              src={book.coverImage}
              alt={`Cover of ${book.title}`}
              width={900}
              height={1200}
              priority
              className="mx-auto h-auto max-h-[560px] w-full object-contain drop-shadow-[0_12px_28px_rgba(15,15,15,0.22)]"
              sizes="(max-width: 768px) 90vw, 440px"
            />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-10 lg:px-8">
        <div className="h-px w-full bg-white/10" />
      </div>
    </section>
  );
}
