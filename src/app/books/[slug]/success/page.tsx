import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBookBySlug } from "@/features/books/data/books";

type SuccessPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ demo?: string; session_id?: string }>;
};

export default async function CheckoutSuccessPage({
  params,
  searchParams,
}: SuccessPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const book = getBookBySlug(slug);

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
      <CheckCircle2
        className="mb-6 h-14 w-14 text-[var(--semantic-success)]"
        aria-hidden
      />
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
        {query.demo ? "Demo checkout complete" : "Thank you for your purchase"}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
        {query.demo
          ? "Payment providers are not configured yet. In production, customers are redirected here after a successful Polar, Stripe, or Paddle checkout."
          : `Your copy of ${book?.title ?? "the e-book"} is ready. Check your email for the secure download link.`}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <a
            href={`/api/download/100-inspirational-quotes-part-1?${query.demo ? "demo=1" : `session_id=${query.session_id ?? ""}`}`}
          >
            Download E-book
          </a>
        </Button>
        <Button asChild variant="secondary">
          <Link href={`/books/${slug}`}>Back to book</Link>
        </Button>
      </div>
    </section>
  );
}
