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
    <section className="relative overflow-hidden text-[var(--ink)]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(165deg,var(--hero-sky-from)_0%,#b8cfe0_42%,var(--hero-sky-to)_100%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 20% 20%, rgba(255,255,255,0.45), transparent), radial-gradient(ellipse 60% 40% at 80% 30%, rgba(255,255,255,0.35), transparent)",
        }}
      />

      <div className="relative mx-auto max-w-[1120px] px-6 pb-16 pt-20 text-center lg:px-8 lg:pb-20 lg:pt-[100px]">
        <p className="mb-3 text-sm font-semibold tracking-tight text-[var(--ink)]">
          Mind & Heart Hub
        </p>
        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.5px] text-[var(--slate)]">
          Digital products store
        </p>
        <h1 className="mx-auto max-w-3xl text-balance text-[40px] font-semibold leading-[1.05] tracking-[-1.5px] sm:text-[52px] lg:text-[64px]">
          E-books, stories & creative downloads
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[var(--slate)]">
          Motivation e-books, kids science stories, and creative packs —
          pay once, get instant access on Whop.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="accent" size="lg">
            <Link href="/#shop">Browse store</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact">Support</Link>
          </Button>
        </div>

        <ul className="mx-auto mt-10 flex max-w-2xl flex-wrap items-center justify-center gap-2">
          {categories.map((category) => (
            <li key={category.label}>
              <Link
                href={category.href}
                className="inline-flex rounded-full border border-black/10 bg-white/50 px-3.5 py-1.5 text-sm font-medium text-[var(--slate)] backdrop-blur-sm transition-colors hover:bg-white/80 hover:text-[var(--ink)]"
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
