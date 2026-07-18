import type { Metadata } from "next";

export const siteConfig = {
  name: "PortugalIPTV",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://portugaliptvpro.shop",
  locale: "pt_PT",
  language: "pt-PT",
  country: "Portugal",
  defaultTitle: "Melhor IPTV Portugal | Comprar IPTV 4K — PortugalIPTV",
  defaultDescription:
    "Comprar IPTV Portugal com PortugalIPTV: o melhor IPTV em Portugal com canais PT, Sport TV, filmes e IPTV 4K Portugal. Veja o IPTV preço e escolha o seu serviço IPTV com ativação rápida.",
};

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description = siteConfig.defaultDescription,
  path = "/",
  noIndex = false,
}: BuildMetadataInput = {}): Metadata {
  const pageTitle = title
    ? title.includes("PortugalIPTV")
      ? title
      : `${title} | PortugalIPTV`
    : siteConfig.defaultTitle;
  const url = new URL(path, siteConfig.url).toString();

  return {
    title: title ? { absolute: pageTitle } : undefined,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: pageTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.defaultDescription,
    areaServed: {
      "@type": "Country",
      name: "Portugal",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "support@portugaliptvpro.shop",
      contactType: "customer support",
      availableLanguage: ["Portuguese", "English"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: siteConfig.language,
    description: siteConfig.defaultDescription,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}

type OfferPlan = {
  id: string;
  label: string;
  price: number;
  checkoutUrl?: string;
};

/** Product + Offer schema for commercial IPTV plans (Portugal). */
export function productOffersJsonLd(plans: OfferPlan[]) {
  return plans.map((plan) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${plan.label} — PortugalIPTV`,
    description: `Serviço IPTV Portugal (${plan.label}). Canais IPTV, desporto e streaming 4K. Ideal para comprar IPTV online.`,
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
    },
    category: "IPTV Subscription",
    offers: {
      "@type": "Offer",
      url: plan.checkoutUrl?.trim()
        ? plan.checkoutUrl.trim()
        : `${siteConfig.url}/subscriptions`,
      priceCurrency: "EUR",
      price: plan.price.toFixed(2),
      availability: plan.checkoutUrl?.trim()
        ? "https://schema.org/InStock"
        : "https://schema.org/PreOrder",
      areaServed: {
        "@type": "Country",
        name: "Portugal",
      },
    },
  }));
}
