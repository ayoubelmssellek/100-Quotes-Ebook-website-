import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/#shop", label: "Shop" },
  { href: "/books/kids-stories-premium-pack", label: "Kids Stories" },
  { href: "/books/everyday-motivation", label: "E-books" },
  { href: "/contact", label: "Support" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-[var(--canvas)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight text-[var(--ink)]"
        >
          Mind & Heart Hub
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className="text-sm font-medium text-[var(--steel)] transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" variant="primary" className="hidden sm:inline-flex">
            <Link href="/#shop">Shop</Link>
          </Button>
          <details className="relative md:hidden">
            <summary className="flex h-9 w-9 list-none items-center justify-center rounded-full border border-[var(--hairline)] text-[var(--ink)] [&::-webkit-details-marker]:hidden">
              <Menu className="h-4 w-4" aria-hidden />
              <span className="sr-only">Open menu</span>
            </summary>
            <div className="absolute right-0 mt-2 w-52 rounded-xl border border-[var(--hairline)] bg-[var(--canvas)] p-2 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <nav className="flex flex-col gap-0.5" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={`${link.href}-${link.label}`}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-[var(--charcoal)] hover:bg-[var(--surface)]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-2 w-full" size="sm">
                  <Link href="/#shop">Shop</Link>
                </Button>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
