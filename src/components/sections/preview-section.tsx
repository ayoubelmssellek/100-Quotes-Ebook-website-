import Image from "next/image";
import type { BookProduct } from "@/types/product";

type PreviewSectionProps = {
  book: BookProduct;
};

export function PreviewSection({ book }: PreviewSectionProps) {
  return (
    <section id="preview" className="scroll-mt-24 bg-[var(--canvas)] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--steel)]">
            Preview
          </p>
          <h2 className="text-balance text-[36px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[48px]">
            Look inside the e-book
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
            A calm, editorial reading experience designed for clarity and focus.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {book.previews.map((preview, index) => (
            <figure
              key={preview.src}
              className="group overflow-hidden rounded-lg border border-[var(--hairline)] bg-[var(--surface-soft)] shadow-[rgba(15,15,15,0.08)_0px_4px_12px_0px]"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={preview.src}
                  alt={preview.alt}
                  fill
                  loading={index < 2 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 90vw, (max-width: 1280px) 30vw, 220px"
                />
              </div>
              <figcaption className="border-t border-[var(--hairline)] px-4 py-3 text-sm font-medium text-[var(--charcoal)]">
                {preview.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
