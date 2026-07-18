import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#benefits", label: "Benefits" },
  { href: "/#preview", label: "Preview" },
  { href: "/#pricing", label: "Book" },
  { href: "/#consultation", label: "Consultation" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Support" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--hairline)] bg-[var(--canvas)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight text-[var(--ink)]"
        >
          Mind & Heart Hub
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--steel)] transition-colors hover:text-[var(--ink)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/#pricing">Buy Now</Link>
          </Button>
          <details className="relative md:hidden">
            <summary className="flex h-10 w-10 list-none items-center justify-center rounded-md border border-[var(--hairline)] text-[var(--ink)] [&::-webkit-details-marker]:hidden">
              <Menu className="h-5 w-5" aria-hidden />
              <span className="sr-only">Open menu</span>
            </summary>
            <div className="absolute right-0 mt-2 w-56 rounded-lg border border-[var(--hairline)] bg-[var(--canvas)] p-3 shadow-[rgba(15,15,15,0.08)_0px_4px_12px_0px]">
              <nav className="flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium text-[var(--charcoal)] hover:bg-[var(--surface)]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button asChild className="mt-2 w-full">
                  <Link href="/#pricing">Buy Now</Link>
                </Button>
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
