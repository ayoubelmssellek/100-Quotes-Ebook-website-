export type ProductFormat = "pdf" | "epub" | "mobi";

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
  stripePriceId?: string;
  paddlePriceId?: string;
};

export type BookProduct = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  author: string;
  authorHandle?: string;
  coverImage: string;
  formats: ProductFormat[];
  pageCount: number;
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
};
