import Link from "next/link";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "#about", label: "About the Book" },
      { href: "#preview", label: "Preview" },
      { href: "#pricing", label: "Pricing" },
      { href: "/books/100-inspirational-quotes-for-self-improvement", label: "Book Page" },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "#faq", label: "FAQ" },
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
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="space-y-4">
          <p className="text-[15px] font-semibold text-[var(--ink)]">
            Mind & Heart Hub
          </p>
          <p className="max-w-xs text-sm leading-relaxed text-[var(--steel)]">
            Premium digital guides for self-improvement, confidence, and daily
            inspiration.
          </p>
          <p className="text-sm text-[var(--stone)]">@mind_and_heart_hub</p>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="mb-4 text-sm font-semibold text-[var(--charcoal)]">
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
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-6 text-sm text-[var(--steel)] sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Mind & Heart Hub. All rights reserved.</p>
          <p>Secure checkout · Instant download · Lifetime access</p>
        </div>
      </div>
    </footer>
  );
}
