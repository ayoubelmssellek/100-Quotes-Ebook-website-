import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Refund Policy for digital e-book purchases from Mind & Heart Hub.",
};

export default function RefundPage() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 md:py-24 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
        Refund Policy
      </h1>
      <p className="mt-4 text-sm text-[var(--steel)]">
        Last updated: July 18, 2026
      </p>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-[var(--slate)]">
        <p>
          Because our products are digital and delivered instantly, all sales are
          generally final once the download has been made available.
        </p>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">
          When refunds may be considered
        </h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>You were charged twice for the same purchase.</li>
          <li>
            Technical issues prevented delivery and we were unable to resolve
            access within a reasonable time.
          </li>
          <li>
            A purchase was made in clear error and the file was not downloaded.
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">
          How to request support
        </h2>
        <p>
          Contact us within 7 days of purchase with your order email and
          transaction ID via the{" "}
          <Link href="/contact" className="text-[var(--link-blue)] hover:underline">
            contact form
          </Link>
          . We review each request carefully and respond as quickly as possible.
        </p>
        <h2 className="text-2xl font-semibold text-[var(--ink)]">
          Chargebacks
        </h2>
        <p>
          Please contact us before initiating a chargeback so we can help resolve
          delivery or billing issues directly.
        </p>
      </div>
    </article>
  );
}
