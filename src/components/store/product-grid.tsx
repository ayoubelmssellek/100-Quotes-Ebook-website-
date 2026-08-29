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
  subtitle = "E-books and kids science stories — pay once, access instantly.",
}: ProductGridProps) {
  return (
    <section id="shop" className="scroll-mt-24 bg-[var(--canvas)] py-14 md:py-20">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.5px] text-[var(--steel)]">
            Catalog
          </p>
          <h2 className="text-balance text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[40px]">
            {title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--slate)] md:text-lg">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
