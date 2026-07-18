import type { Metadata } from "next";
import { ContactForm } from "@/features/contact/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mind & Heart Hub for questions about purchases, downloads, or upcoming digital products.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16 md:py-24 lg:px-8">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--steel)]">
        Contact
      </p>
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)] md:text-5xl">
        Get in touch
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
        Send a message and we’ll get back to you as soon as possible.
      </p>
      <div className="mt-10 rounded-lg border border-[var(--hairline)] p-6 md:p-8">
        <ContactForm />
      </div>
    </section>
  );
}
