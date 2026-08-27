import Image from "next/image";
import type { DigitalProduct } from "@/types/product";

type PreviewSectionProps = {
  book: DigitalProduct;
};

export function PreviewSection({ book }: PreviewSectionProps) {
  return (
    <section id="preview" className="scroll-mt-24 bg-[var(--canvas)] py-16 md:py-24">
      <div className="mx-auto max-w-[1120px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.5px] text-[var(--steel)]">
            Preview
          </p>
          <h2 className="text-balance text-[36px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[48px]">
            Look inside
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
            Full pages shown without cropping.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {book.previews.map((preview, index) => (
            <figure
              key={preview.src}
              className="group overflow-hidden rounded-xl border border-[var(--hairline)] bg-[var(--surface)]"
            >
              <div className="relative flex min-h-[160px] items-center justify-center p-3">
                <Image
                  src={preview.src}
                  alt={preview.alt}
                  width={900}
                  height={1200}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="h-auto max-h-[280px] w-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                  sizes="(max-width: 640px) 90vw, (max-width: 1280px) 30vw, 280px"
                />
              </div>
              <figcaption className="border-t border-[var(--hairline-soft)] px-4 py-2.5 text-sm font-medium text-[var(--charcoal)]">
                {preview.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
