import { ProductCard } from "@/components/store/product-card";
import type { DigitalProduct } from "@/types/product";

type ProductGridProps = {
  products: DigitalProduct[];
  title?: string;
  subtitle?: string;
};

export function ProductGrid({
  products,
  title = "Shop digital products",
  subtitle = "E-books, kids science stories, clipart, and templates — instant downloads.",
}: ProductGridProps) {
  return (
    <section id="shop" className="scroll-mt-24 bg-[var(--canvas)] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--steel)]">
            Catalog
          </p>
          <h2 className="text-balance text-[36px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[48px]">
            {title}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
