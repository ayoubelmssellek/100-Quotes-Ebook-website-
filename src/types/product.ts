export type ProductType =
  | "ebook"
  | "kids_book"
  | "clipart"
  | "template_pack";

export type ProductStatus = "available" | "coming_soon";

export type ProductFormat = "pdf" | "epub" | "png" | "svg" | "zip";

export type ProductFeature = {
  title: string;
  description: string;
  icon: string;
  tint: "peach" | "rose" | "mint" | "lavender" | "sky" | "yellow" | "cream";
};

export type ProductBenefit = {
  title: string;
  description: string;
  icon: string;
};

export type ProductPreview = {
  src: string;
  alt: string;
  label: string;
};

export type ProductTestimonial = {
  name: string;
  role: string;
  quote: string;
  avatarInitials: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductPricing = {
  price: number;
  currency: string;
  compareAtPrice?: number;
  features: string[];
  checkoutUrlEnv?: string;
  stripePriceId?: string;
  paddlePriceId?: string;
};

export type DigitalProduct = {
  id: string;
  slug: string;
  type: ProductType;
  status: ProductStatus;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  author: string;
  authorHandle?: string;
  coverImage: string;
  formats: ProductFormat[];
  pageCount?: number;
  itemCount?: number;
  language: string;
  category: string;
  tags: string[];
  features: ProductFeature[];
  benefits: ProductBenefit[];
  previews: ProductPreview[];
  testimonials: ProductTestimonial[];
  faqs: ProductFaq[];
  pricing: ProductPricing;
  seo: {
    title: string;
    description: string;
  };
  publishedAt: string;
  featured?: boolean;
  /** API download key(s) under /api/download/[bookId] */
  downloadIds?: string[];
  /** For packs: related product slugs included */
  bundleSlugs?: string[];
};

/** @deprecated Use DigitalProduct — kept for older book landing imports */
export type BookProduct = DigitalProduct;
