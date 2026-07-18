import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/features/contact/components/contact-form";
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mind & Heart Hub support at support@mindandhearthub.shop for questions about purchases, downloads, or upcoming digital products.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 md:py-24 lg:px-8">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--steel)]">
        Support & Contact
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
        Get in touch
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
        Need help with your purchase or download? Send your message to our
        support Gmail and we’ll reply as soon as possible.
      </p>

      <div className="mt-8 rounded-lg border border-[var(--hairline)] bg-[var(--surface)] p-6 md:p-8">
        <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--card-tint-lavender)] text-[var(--brand-purple-800)]">
          <Mail className="h-5 w-5" aria-hidden />
        </div>
        <p className="text-sm font-semibold text-[var(--ink)]">Support email</p>
        <p className="mt-2 text-base leading-relaxed text-[var(--slate)]">
          Please send your message to:
        </p>
        <a
          href={SUPPORT_MAILTO}
          className="mt-3 inline-block break-all text-xl font-semibold text-[var(--link-blue)] hover:underline"
        >
          {SUPPORT_EMAIL}
        </a>
        <Button asChild size="lg" className="mt-6 w-full sm:w-auto">
          <a href={SUPPORT_MAILTO}>Email Support</a>
        </Button>
      </div>

      <div className="mt-8 rounded-lg border border-[var(--hairline)] p-6 md:p-8">
        <p className="mb-6 text-sm leading-relaxed text-[var(--slate)]">
          Or use the form below. You can also email us anytime at{" "}
          <a
            href={SUPPORT_MAILTO}
            className="font-medium text-[var(--link-blue)] hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
