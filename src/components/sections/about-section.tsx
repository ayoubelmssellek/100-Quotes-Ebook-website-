import {
  BookOpen,
  Compass,
  Flame,
  Quote,
  Shield,
  Sprout,
  Sun,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { BookProduct } from "@/types/product";

const iconMap: Record<string, LucideIcon> = {
  quote: Quote,
  sprout: Sprout,
  flame: Flame,
  shield: Shield,
  target: Target,
  sun: Sun,
  compass: Compass,
  "book-open": BookOpen,
};

const tintClasses: Record<string, string> = {
  peach: "bg-[var(--card-tint-peach)]",
  rose: "bg-[var(--card-tint-rose)]",
  mint: "bg-[var(--card-tint-mint)]",
  lavender: "bg-[var(--card-tint-lavender)]",
  sky: "bg-[var(--card-tint-sky)]",
  yellow: "bg-[var(--card-tint-yellow)]",
  cream: "bg-[var(--card-tint-cream)]",
};

type AboutSectionProps = {
  book: BookProduct;
};

export function AboutSection({ book }: AboutSectionProps) {
  return (
    <section id="about" className="scroll-mt-24 bg-[var(--canvas)] py-16 md:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--steel)]">
            About the Book
          </p>
          <h2 className="text-balance text-[36px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[48px]">
            Practical guidance for a better you
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
            {book.longDescription}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {book.features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? BookOpen;
            return (
              <article
                key={feature.title}
                className={`rounded-lg p-8 ${tintClasses[feature.tint]}`}
              >
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/70 text-[var(--charcoal)]">
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="text-[22px] font-semibold leading-snug text-[var(--charcoal)]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--charcoal)]/80">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
