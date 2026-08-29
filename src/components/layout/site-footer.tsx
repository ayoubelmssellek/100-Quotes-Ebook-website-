import Link from "next/link";
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/lib/site";

const footerColumns = [
  {
    title: "Store",
    links: [
      { href: "/#shop", label: "All Products" },
      { href: "/books/kids-stories-premium-pack", label: "Kids Stories" },
      { href: "/books/everyday-motivation", label: "Everyday Motivation" },
      {
        href: "/books/100-inspirational-quotes-for-self-improvement",
        label: "100 Quotes",
      },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/refund", label: "Refund Policy" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
      { href: "/refund", label: "Refunds" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--hairline)] bg-[var(--canvas)]">
      <div className="mx-auto grid max-w-[1120px] gap-10 px-6 py-14 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-3">
          <p className="text-[15px] font-semibold text-[var(--ink)]">
            Mind & Heart Hub
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--steel)]">
            Premium digital products — e-books, kids stories, and creative
            downloads with instant Whop delivery.
          </p>
          <p className="text-sm text-[var(--stone)]">@mind_and_heart_hub</p>
          <p className="text-sm text-[var(--steel)]">
            Support:{" "}
            <a
              href={SUPPORT_MAILTO}
              className="font-medium text-[var(--ink)] underline-offset-2 hover:underline"
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.5px] text-[var(--steel)]">
              {column.title}
            </p>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--steel)] transition-colors hover:text-[var(--ink)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-[var(--hairline)]">
        <div className="mx-auto flex max-w-[1120px] flex-col gap-2 px-6 py-5 text-sm text-[var(--steel)] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Mind & Heart Hub. All rights reserved.</p>
          <p>Secure Whop checkout · Instant access</p>
        </div>
      </div>
    </footer>
  );
}
