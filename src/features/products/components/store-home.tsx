import { ContactSection } from "@/components/sections/contact-section";
import { ProductGrid } from "@/components/store/product-grid";
import { StoreHero } from "@/components/store/store-hero";
import type { DigitalProduct } from "@/types/product";

type StoreHomeProps = {
  products: DigitalProduct[];
};

export function StoreHome({ products }: StoreHomeProps) {
  return (
    <>
      <StoreHero />
      <ProductGrid products={products} />
      <section className="border-t border-[var(--hairline)] bg-[var(--canvas)] py-16 md:py-24">
        <div className="mx-auto max-w-[720px] px-6 text-center lg:px-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1.4px] text-[var(--steel)]">
            About the store
          </p>
          <h2 className="text-balance text-[32px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[40px]">
            Digital products for learning, inspiration & creativity
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
            Mind & Heart Hub offers premium e-books and digital downloads —
            from motivational reading to kids science stories and creative
            packs. Checkout is handled securely on Whop with instant access.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
