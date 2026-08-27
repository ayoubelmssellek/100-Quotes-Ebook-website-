import { StoreHome } from "@/features/products/components/store-home";
import { getAllProducts } from "@/features/products/data/catalog";
import { absoluteUrl } from "@/lib/utils";

export default function HomePage() {
  const products = getAllProducts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl()}/#website`,
        url: absoluteUrl(),
        name: "Mind & Heart Hub",
        description:
          "Digital products store for e-books, kids stories, clipart, and vintage templates.",
        publisher: {
          "@type": "Organization",
          name: "Mind & Heart Hub",
        },
      },
      {
        "@type": "ItemList",
        name: "Digital products",
        itemListElement: products.map((product, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/books/${product.slug}`),
          name: product.title,
        })),
      },
      ...products
        .filter((product) => product.status === "available")
        .map((product) => ({
          "@type": "Product",
          name: product.title,
          description: product.shortDescription,
          image: absoluteUrl(product.coverImage),
          brand: {
            "@type": "Brand",
            name: "Mind & Heart Hub",
          },
          offers: {
            "@type": "Offer",
            priceCurrency: product.pricing.currency,
            price: product.pricing.price.toFixed(2),
            availability: "https://schema.org/InStock",
            url: absoluteUrl(`/books/${product.slug}`),
          },
        })),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <StoreHome products={products} />
    </>
  );
}
