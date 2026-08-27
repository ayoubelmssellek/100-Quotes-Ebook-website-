import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Mind & Heart Hub digital product purchases and website usage.",
};

export default function PrivacyPage() {
  return (
    <article className="prose-legal mx-auto max-w-3xl px-6 py-16 md:py-24 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
        Privacy Policy
      </h1>
      <p className="mt-4 text-sm text-[var(--steel)]">
        Last updated: July 18, 2026
      </p>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-[var(--slate)]">
        <p>
          Mind & Heart Hub (“we”, “us”, or “our”) respects your privacy. This
          policy explains what information we collect when you visit our website
          or purchase a digital product, and how we use it.
        </p>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">
          Information we collect
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Contact details you submit via forms (name, email, message).</li>
          <li>
            Purchase-related details processed by our payment provider, such as
            email and transaction identifiers.
          </li>
          <li>
            Basic technical data such as IP address, browser type, and pages
            visited for security and performance.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">
          How we use information
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>To deliver purchased digital products and customer support.</li>
          <li>To respond to support emails sent to support@mindandhearthub.shop.</li>
          <li>To protect the site against abuse, fraud, and security threats.</li>
          <li>To improve website reliability and user experience.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">
          Payment processing
        </h2>
        <p>
          Payments are processed by trusted third-party providers. We do not
          store full payment card numbers on our servers. Provider privacy
          policies apply to payment data they process on our behalf.
        </p>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">Cookies</h2>
        <p>
          We may use essential cookies required for secure checkout sessions and
          site functionality. These cookies are configured with secure,
          HTTP-only, and SameSite attributes where applicable.
        </p>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">Your rights</h2>
        <p>
          Depending on your location, you may have rights to access, correct, or
          delete personal data we hold. Contact us to make a request.
        </p>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">Contact</h2>
        <p>
          Questions about this policy? Email us at{" "}
          <a
            href="mailto:support@mindandhearthub.shop"
            className="text-[var(--link-blue)] hover:underline"
          >
            support@mindandhearthub.shop
          </a>{" "}
          or visit our{" "}
          <Link href="/contact" className="text-[var(--link-blue)] hover:underline">
            contact page
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
