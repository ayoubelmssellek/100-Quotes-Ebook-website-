import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from "@/lib/site";

type SuccessPageProps = {
  searchParams: Promise<{
    checkout_id?: string;
    checkoutId?: string;
    plan?: string;
  }>;
};

export default async function ConsultationSuccessPage({
  searchParams,
}: SuccessPageProps) {
  const query = await searchParams;
  const checkoutId = query.checkout_id || query.checkoutId;

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
      <CheckCircle2
        className="mb-6 h-14 w-14 text-[var(--semantic-success)]"
        aria-hidden
      />
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
        Consultation subscription confirmed
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
        Thank you for subscribing. We’ll email you shortly with next steps to
        schedule your sessions.
      </p>
      {checkoutId ? (
        <p className="mt-3 text-sm text-[var(--steel)]">
          Reference: {checkoutId}
        </p>
      ) : null}
      <p className="mt-4 text-sm text-[var(--slate)]">
        Questions? Write to{" "}
        <a
          href={SUPPORT_MAILTO}
          className="font-medium text-[var(--link-blue)] hover:underline"
        >
          {SUPPORT_EMAIL}
        </a>
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <Link href="/#consultation">Back to plans</Link>
        </Button>
        <Button asChild variant="secondary">
          <a href={SUPPORT_MAILTO}>Email Support</a>
        </Button>
      </div>
    </section>
  );
}
