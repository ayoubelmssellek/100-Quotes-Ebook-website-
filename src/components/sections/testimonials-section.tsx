import type { BookProduct } from "@/types/product";

type TestimonialsSectionProps = {
  book: BookProduct;
};

export function TestimonialsSection({ book }: TestimonialsSectionProps) {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-[var(--card-tint-yellow-bold)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--brand-orange-deep)]">
            Testimonials
          </p>
          <h2 className="text-balance text-[36px] font-semibold leading-tight tracking-[-0.5px] text-[var(--charcoal)] md:text-[48px]">
            Loved by readers seeking quiet motivation
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {book.testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.name}
              className="rounded-lg border border-[var(--hairline)] bg-[var(--canvas)] p-8"
            >
              <p className="text-base leading-relaxed text-[var(--charcoal)]">
                “{testimonial.quote}”
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span
                  aria-hidden
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--card-tint-lavender)] text-sm font-semibold text-[var(--brand-purple-800)]"
                >
                  {testimonial.avatarInitials}
                </span>
                <div>
                  <cite className="not-italic text-sm font-semibold text-[var(--ink)]">
                    {testimonial.name}
                  </cite>
                  <p className="text-sm text-[var(--steel)]">{testimonial.role}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
