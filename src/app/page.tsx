import { BookLanding } from "@/features/books/components/book-landing";
import { getFeaturedBook } from "@/features/books/data/books";
import { absoluteUrl } from "@/lib/utils";

export default function HomePage() {
  const book = getFeaturedBook();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl()}/#website`,
        url: absoluteUrl(),
        name: "Mind & Heart Hub",
        description: book.seo.description,
        publisher: {
          "@type": "Organization",
          name: "Mind & Heart Hub",
        },
      },
      {
        "@type": "Book",
        "@id": `${absoluteUrl(`/books/${book.slug}`)}/#book`,
        name: book.title,
        description: book.seo.description,
        image: absoluteUrl(book.coverImage),
        author: {
          "@type": "Person",
          name: book.author,
        },
        inLanguage: book.language,
        numberOfPages: book.pageCount,
        bookFormat: "https://schema.org/EBook",
        offers: {
          "@type": "Offer",
          url: absoluteUrl(`/#pricing`),
          priceCurrency: book.pricing.currency,
          price: book.pricing.price.toFixed(2),
          availability: "https://schema.org/InStock",
          category: "Digital Product",
        },
      },
      {
        "@type": "Product",
        name: book.title,
        description: book.shortDescription,
        image: absoluteUrl(book.coverImage),
        brand: {
          "@type": "Brand",
          name: "Mind & Heart Hub",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: book.pricing.currency,
          price: book.pricing.price.toFixed(2),
          availability: "https://schema.org/InStock",
          url: absoluteUrl("/#pricing"),
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: book.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
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
