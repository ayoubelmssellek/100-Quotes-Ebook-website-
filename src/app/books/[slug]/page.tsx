import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookLanding } from "@/features/books/components/book-landing";
import {
  getAllBookSlugs,
  getBookBySlug,
} from "@/features/books/data/books";
import { absoluteUrl } from "@/lib/utils";

type BookPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBookSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    return { title: "Book not found" };
  }

  return {
    title: book.seo.title,
    description: book.seo.description,
    alternates: {
      canonical: absoluteUrl(`/books/${book.slug}`),
    },
    openGraph: {
      title: book.seo.title,
      description: book.seo.description,
      url: absoluteUrl(`/books/${book.slug}`),
      images: [
        {
          url: book.coverImage,
          width: 900,
          height: 1200,
          alt: `Cover of ${book.title}`,
        },
      ],
    },
  };
}

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": book.type === "ebook" ? "Book" : "Product",
    name: book.title,
    description: book.seo.description,
    image: absoluteUrl(book.coverImage),
    author: {
      "@type": "Person",
      name: book.author,
    },
    ...(book.type === "ebook" && book.pageCount
      ? { numberOfPages: book.pageCount, bookFormat: "https://schema.org/EBook" }
      : {}),
    offers: {
      "@type": "Offer",
      price: book.pricing.price.toFixed(2),
      priceCurrency: book.pricing.currency,
      availability:
        book.status === "available"
          ? "https://schema.org/InStock"
          : "https://schema.org/PreOrder",
      url: absoluteUrl(`/books/${book.slug}#pricing`),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BookLanding book={book} />
    </>
  );
}
