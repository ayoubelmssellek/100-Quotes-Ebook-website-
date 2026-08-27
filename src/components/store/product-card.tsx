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
    <article className="group flex flex-col overflow-hidden rounded-lg border border-[var(--hairline)] bg-[var(--surface)] shadow-[rgba(15,15,15,0.06)_0px_4px_12px_0px] transition-shadow hover:shadow-[rgba(15,15,15,0.10)_0px_8px_24px_0px]">
      <Link href={href} className="relative block aspect-[3/4] overflow-hidden bg-[var(--surface-soft)]">
        <Image
          src={product.coverImage}
          alt={`Cover of ${product.title}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 280px"
        />
        {isComingSoon ? (
          <span className="absolute left-3 top-3 rounded-md bg-[var(--ink)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
            Coming soon
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-[1px] text-[var(--steel)]">
          {getProductTypeLabel(product.type)}
          {product.pageCount ? ` · ${product.pageCount} pages` : null}
          {product.itemCount ? ` · ${product.itemCount} items` : null}
        </p>
        <h3 className="mt-2 text-[18px] font-semibold leading-snug text-[var(--ink)]">
          <Link href={href} className="hover:underline">
            {product.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-[var(--slate)]">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-lg font-semibold text-[var(--ink)]">
            {formatPrice(product.pricing.price, product.pricing.currency)}
          </p>
          <Link
            href={href}
            className="text-sm font-semibold text-[var(--primary)] hover:underline"
          >
            {isComingSoon ? "Preview" : "View"}
          </Link>
        </div>
      </div>
    </article>
  );
}
