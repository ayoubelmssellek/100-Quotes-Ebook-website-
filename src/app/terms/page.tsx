import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for purchasing and using digital products from Mind & Heart Hub.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
        Terms of Service
      </h1>
      <p className="mt-4 text-sm text-[var(--steel)]">
        Last updated: July 18, 2026
      </p>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-[var(--slate)]">
        <p>
          By accessing this website or purchasing a digital product from Mind &
          Heart Hub, you agree to these Terms of Service.
        </p>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">
          Digital products
        </h2>
        <p>
          Purchases grant you a personal, non-transferable license to download
          and use the digital product for your own personal use. Redistribution,
          resale, or public sharing of the files is not permitted.
        </p>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">
          Delivery
        </h2>
        <p>
          Digital products are delivered electronically after successful payment.
          You are responsible for providing a valid email address and ensuring
          you can receive download links.
        </p>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">
          Acceptable use
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Do not attempt to reverse engineer or abuse checkout systems.</li>
          <li>Do not use automated tools to overwhelm forms or APIs.</li>
          <li>Do not redistribute purchased files without written permission.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">
          Liability
        </h2>
        <p>
          Digital products are provided as-is. To the fullest extent permitted by
          law, we are not liable for indirect or consequential damages arising
          from use of the website or products.
        </p>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">Contact</h2>
        <p>
          For questions about these terms, email us at{" "}
          <a
            href="mailto:hello@mindandhearthub.com"
            className="text-[var(--link-blue)] hover:underline"
          >
            hello@mindandhearthub.com
          </a>
          .
        </p>
      </div>
    </article>
  );
}
