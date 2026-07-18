import {
  BookOpen,
  CalendarCheck,
  Dumbbell,
  Heart,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { BookProduct } from "@/types/product";

const iconMap: Record<string, LucideIcon> = {
  "calendar-check": CalendarCheck,
  zap: Zap,
  sparkles: Sparkles,
  dumbbell: Dumbbell,
  heart: Heart,
  "book-open": BookOpen,
};

type BenefitsSectionProps = {
  book: BookProduct;
};

export function BenefitsSection({ book }: BenefitsSectionProps) {
  return (
    <section id="benefits" className="scroll-mt-24 bg-[var(--surface)] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--steel)]">
            Why Read This Book
          </p>
          <h2 className="text-balance text-[36px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[48px]">
            Small daily words. Lasting change.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
            Designed for busy people who want calm motivation without noise.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {book.benefits.map((benefit) => {
            const Icon = iconMap[benefit.icon] ?? Sparkles;
            return (
              <article
                key={benefit.title}
                className="rounded-lg border border-[var(--hairline)] bg-[var(--canvas)] p-8"
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--card-tint-lavender)] text-[var(--brand-purple-800)]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-[22px] font-semibold text-[var(--ink)]">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--slate)]">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
