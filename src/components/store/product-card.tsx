import Image from "next/image";
import Link from "next/link";
import { getProductTypeLabel } from "@/features/products/data/catalog";
import { formatPrice } from "@/lib/utils";
import type { DigitalProduct } from "@/types/product";

type ProductCardProps = {
  product: DigitalProduct;
};

export function ProductCard({ product }: ProductCardProps) {
  const isComingSoon = product.status === "coming_soon";
  const href = `/books/${product.slug}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] shadow-[0_1px_2px_rgba(15,15,15,0.04),0_8px_24px_rgba(15,15,15,0.06)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--hairline-strong)] hover:shadow-[0_12px_40px_rgba(15,15,15,0.10)]">
      <Link
        href={href}
        className="relative block overflow-hidden bg-[linear-gradient(160deg,#eef1f6_0%,#f7f5f1_55%,#ebe7e0_100%)]"
      >
        <div className="relative mx-auto aspect-[3/4] w-full p-4 sm:p-5">
          <div className="relative h-full w-full">
            <Image
              src={product.coverImage}
              alt={`Cover of ${product.title}`}
              fill
              className="object-contain drop-shadow-[0_10px_24px_rgba(15,15,15,0.18)] transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 300px"
            />
          </div>
        </div>
        {isComingSoon ? (
          <span className="absolute left-3 top-3 rounded-md bg-[var(--ink)]/90 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            Coming soon
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col border-t border-[var(--hairline)] px-5 pb-5 pt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[1.2px] text-[var(--steel)]">
          {getProductTypeLabel(product.type)}
          {product.pageCount ? ` · ${product.pageCount} pages` : null}
          {product.itemCount ? ` · ${product.itemCount} items` : null}
        </p>
        <h3 className="mt-2 text-[17px] font-semibold leading-snug tracking-[-0.2px] text-[var(--ink)]">
          <Link href={href} className="transition-colors hover:text-[var(--primary)]">
            {product.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--slate)]">
          {product.shortDescription}
        </p>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="text-[20px] font-semibold tracking-tight text-[var(--ink)]">
            {formatPrice(product.pricing.price, product.pricing.currency)}
          </p>
          <Link
            href={href}
            className="text-sm font-semibold text-[var(--primary)] transition-colors hover:text-[var(--primary-pressed)]"
          >
            {isComingSoon ? "Preview" : "View details"}
          </Link>
        </div>
      </div>
    </article>
  );
}
