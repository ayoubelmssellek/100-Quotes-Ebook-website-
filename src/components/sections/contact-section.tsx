import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/lib/site";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[var(--canvas)] py-16 md:py-24">
      <div className="mx-auto max-w-[800px] px-6 text-center lg:px-8">
        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--steel)]">
          Support & Contact
        </p>
        <h2 className="text-balance text-[36px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[48px]">
          We’re here to help
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-[var(--slate)]">
          Questions about your purchase, downloads, or upcoming titles? Send us
          a message and we’ll respond as soon as possible.
        </p>

        <div className="mt-10 rounded-lg border border-[var(--hairline)] bg-[var(--surface)] p-8 text-left md:p-10">
          <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-[var(--card-tint-lavender)] text-[var(--brand-purple-800)]">
            <Mail className="h-5 w-5" aria-hidden />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.5px] text-[var(--steel)]">
            Support email
          </p>
          <p className="mt-3 text-base leading-relaxed text-[var(--charcoal)]">
            Please send your message to our support email and we’ll get back to
            you as soon as we can:
          </p>
          <a
            href={SUPPORT_MAILTO}
            className="mt-4 inline-block break-all text-xl font-semibold text-[var(--link-blue)] hover:underline"
          >
            {SUPPORT_EMAIL}
          </a>
          <p className="mt-4 text-sm leading-relaxed text-[var(--slate)]">
            Include your order email and a short description of your question so
            we can help you faster.
          </p>
          <Button asChild size="lg" className="mt-6">
            <a href={SUPPORT_MAILTO}>Email Support</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
