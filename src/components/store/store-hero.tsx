import Link from "next/link";
import { Button } from "@/components/ui/button";

const categories = [
  { href: "/#shop", label: "E-books" },
  { href: "/#shop", label: "Kids Stories" },
  { href: "/#shop", label: "Clipart" },
  { href: "/#shop", label: "Templates" },
];

export function StoreHero() {
  return (
    <section className="relative overflow-hidden bg-[var(--brand-navy)] text-[var(--on-dark)]">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <span className="absolute left-[8%] top-[18%] h-3 w-3 rounded-sm bg-[var(--brand-pink)] opacity-80" />
        <span className="absolute left-[18%] top-[62%] h-2.5 w-2.5 rounded-sm bg-[var(--brand-yellow)] opacity-80" />
        <span className="absolute right-[14%] top-[22%] h-3 w-3 rounded-sm bg-[var(--brand-teal)] opacity-80" />
        <span className="absolute right-[22%] top-[58%] h-2.5 w-2.5 rounded-sm bg-[var(--brand-orange)] opacity-80" />
      </div>

      <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-20 text-center lg:px-8 lg:pb-20 lg:pt-[120px]">
        <p className="mb-3 text-sm font-semibold tracking-tight text-white">
          Mind & Heart Hub
        </p>
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--on-dark-muted)]">
          Digital products store
        </p>
        <h1 className="mx-auto max-w-3xl text-balance text-[36px] font-semibold leading-[1.05] tracking-[-1.5px] sm:text-[48px] lg:text-[56px]">
          E-books, stories & creative downloads
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--on-dark-muted)]">
          Motivation e-books, kids story books, animal clipart, and vintage
          templates — ready for instant download.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/#shop">Browse store</Link>
          </Button>
          <Button asChild variant="secondary-on-dark" size="lg">
            <Link href="/contact">Support</Link>
          </Button>
        </div>

        <ul className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <li key={category.label}>
              <Link
                href={category.href}
                className="inline-flex rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
              >
                {category.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
