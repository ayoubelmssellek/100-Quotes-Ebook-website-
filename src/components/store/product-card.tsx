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
    <article className="group flex flex-col overflow-hidden rounded-lg border border-[var(--hairline)] bg-[var(--canvas)] transition-colors hover:border-[var(--stone)]">
      <Link
        href={href}
        className="relative block overflow-hidden bg-[var(--surface)]"
      >
        <div className="relative mx-auto h-[140px] w-full p-2 sm:h-[150px]">
          <div className="relative h-full w-full">
            <Image
              src={product.coverImage}
              alt={`Cover of ${product.title}`}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 45vw, (max-width: 1280px) 18vw, 180px"
            />
          </div>
        </div>
        {isComingSoon ? (
          <span className="absolute left-2 top-2 rounded-full bg-[var(--primary)] px-2 py-0.5 text-[10px] font-semibold text-white">
            Soon
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col border-t border-[var(--hairline-soft)] px-3 py-2.5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.5px] text-[var(--steel)]">
          {getProductTypeLabel(product.type)}
        </p>
        <h3 className="mt-0.5 line-clamp-2 text-[13px] font-semibold leading-snug text-[var(--ink)]">
          <Link href={href} className="hover:text-[var(--brand-green-deep)]">
            {product.title}
          </Link>
        </h3>
        <div className="mt-2 flex items-center justify-between gap-2">
          <p className="text-[14px] font-semibold text-[var(--ink)]">
            {formatPrice(product.pricing.price, product.pricing.currency)}
          </p>
          <Link
            href={href}
            className="text-[12px] font-medium text-[var(--steel)] hover:text-[var(--ink)]"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
