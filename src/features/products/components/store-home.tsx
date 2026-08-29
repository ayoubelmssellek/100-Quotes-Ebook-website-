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
      <section className="border-t border-[var(--hairline)] bg-[var(--surface)] py-14 md:py-20">
        <div className="mx-auto max-w-[640px] px-6 text-center lg:px-8">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.5px] text-[var(--steel)]">
            About the store
          </p>
          <h2 className="text-balance text-[28px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[36px]">
            Digital products for learning, inspiration & creativity
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--slate)] md:text-lg">
            Mind & Heart Hub offers e-books and digital downloads — from
            motivational reading to kids science stories.
            Checkout is secured on Whop with instant access after payment.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
