import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/features/contact/components/contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[var(--canvas)] py-16 md:py-24">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--steel)]">
            Contact
          </p>
          <h2 className="text-balance text-[36px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[48px]">
            We’re here to help
          </h2>
          <p className="mt-4 max-w-md text-lg leading-relaxed text-[var(--slate)]">
            Questions about your purchase, downloads, or upcoming titles? Send a
            message and we’ll respond as soon as possible.
          </p>
          <div className="mt-8 rounded-lg bg-[var(--surface)] p-6">
            <p className="text-sm font-semibold text-[var(--ink)]">Prefer email?</p>
            <p className="mt-2 text-sm text-[var(--slate)]">
              Reach us at{" "}
              <a
                href="mailto:hello@mindandhearthub.com"
                className="font-medium text-[var(--link-blue)] hover:underline"
              >
                hello@mindandhearthub.com
              </a>
            </p>
            <Button asChild variant="secondary" className="mt-5">
              <Link href="/contact">Open contact page</Link>
            </Button>
          </div>
        </div>
        <div className="rounded-lg border border-[var(--hairline)] bg-[var(--canvas)] p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
