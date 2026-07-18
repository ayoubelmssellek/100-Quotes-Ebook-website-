import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBookBySlug } from "@/features/books/data/books";

type SuccessPageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{
    demo?: string;
    session_id?: string;
    checkout_id?: string;
    checkoutId?: string;
  }>;
};

export default async function CheckoutSuccessPage({
  params,
  searchParams,
}: SuccessPageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const book = getBookBySlug(slug);
  const checkoutId =
    query.checkout_id || query.checkoutId || query.session_id;
  const isDemo = query.demo === "1" && !checkoutId;

  const downloadHref = isDemo
    ? `/api/download/100-inspirational-quotes-part-1?demo=1`
    : `/api/download/100-inspirational-quotes-part-1?checkout_id=${encodeURIComponent(checkoutId ?? "")}`;

  return (
    <section className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 py-24 text-center">
      <CheckCircle2
        className="mb-6 h-14 w-14 text-[var(--semantic-success)]"
        aria-hidden
      />
      <h1 className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
        {isDemo ? "Demo checkout complete" : "Thank you for your purchase"}
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
        {isDemo
          ? "Polar is not fully configured yet. After you add your API key and product ID, real checkouts will land here."
          : `Your copy of ${book?.title ?? "the e-book"} is ready. Download it below — a confirmation was also sent to your email.`}
      </p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button asChild>
          <a href={downloadHref}>Download E-book</a>
        </Button>
        <Button asChild variant="secondary">
          <Link href={`/books/${slug}`}>Back to book</Link>
        </Button>
      </div>
    </section>
  );
}
