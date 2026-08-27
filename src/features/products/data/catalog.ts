import type { DigitalProduct } from "@/types/product";
import { getAllKidsProducts } from "@/features/products/data/kids-stories";

/**
 * Store catalog — ebooks + digital products.
 * Kids science stories (singles + packs) come from kids-stories.ts.
 */
const coreProducts: DigitalProduct[] = [
  {
    id: "book_100_quotes_part_1",
    slug: "100-inspirational-quotes-for-self-improvement",
    type: "ebook",
    status: "available",
    title: "100 Inspirational Quotes for Self-Improvement – Part 1",
    subtitle: "Empower your mind, one quote at a time",
    shortDescription:
      "A carefully curated collection of 100 inspirational quotes with practical guidance to help you build confidence, strengthen daily habits, and develop a lasting positive mindset.",
    longDescription:
      "Welcome to a journey of self-discovery. This e-book gathers simple, powerful reminders designed to uplift, motivate, and inspire. Use it as a companion, a spark, and a source of quiet wisdom whenever you need clarity, courage, or a fresh perspective.",
    author: "Ayoub El Mssellek",
    authorHandle: "@mind_and_heart_hub",
    coverImage: "/books/100-inspirational-quotes/cover.png",
    formats: ["pdf"],
    pageCount: 55,
    language: "English",
    category: "Motivation",
    tags: ["quotes", "motivation", "mindset", "habits"],
    features: [
      {
        title: "100 Inspirational Quotes",
        description:
          "Handpicked quotes that speak to growth, resilience, and purposeful living.",
        icon: "quote",
        tint: "lavender",
      },
      {
        title: "Personal Growth Lessons",
        description:
          "Practical takeaways that turn inspiration into meaningful daily action.",
        icon: "sprout",
        tint: "mint",
      },
      {
        title: "Daily Inspiration",
        description:
          "A calm companion for morning rituals, journaling, or evening reflection.",
        icon: "sun",
        tint: "cream",
      },
    ],
    benefits: [
      {
        title: "Stay motivated",
        description:
          "Return to words that reignite purpose when motivation fades.",
        icon: "zap",
      },
      {
        title: "Improve confidence",
        description:
          "Strengthen self-belief with reminders rooted in growth and courage.",
        icon: "sparkles",
      },
      {
        title: "Build better habits",
        description:
          "Anchor your day with short reflections that reinforce consistency.",
        icon: "calendar-check",
      },
    ],
    previews: [
      {
        src: "/books/100-inspirational-quotes/preview-01.png",
        alt: "Dedication page from the e-book",
        label: "Dedication",
      },
      {
        src: "/books/100-inspirational-quotes/preview-02.png",
        alt: "Welcome letter page from the e-book",
        label: "Dear Reader",
      },
      {
        src: "/books/100-inspirational-quotes/preview-03.png",
        alt: "Sample inspirational quote page",
        label: "Sample Quote",
      },
    ],
    testimonials: [
      {
        name: "Sarah Mitchell",
        role: "Entrepreneur",
        quote:
          "I keep this on my phone and read one quote every morning. It has become a quiet ritual that sets the tone for my entire day.",
        avatarInitials: "SM",
      },
      {
        name: "James Okonkwo",
        role: "Product Designer",
        quote:
          "Premium, calm, and genuinely useful. The quotes feel intentional — not generic motivation filler.",
        avatarInitials: "JO",
      },
    ],
    faqs: [
      {
        question: "How do I receive the book?",
        answer:
          "After a successful purchase, you receive an instant download link by email and on the confirmation page.",
      },
      {
        question: "Is this a PDF?",
        answer:
          "Yes. The e-book is delivered as a high-quality PDF for desktop, tablet, and mobile.",
      },
      {
        question: "Can I download it multiple times?",
        answer:
          "Yes. You can re-download anytime using the secure link in your confirmation email.",
      },
    ],
    pricing: {
      price: 12,
      currency: "USD",
      features: [
        "100 inspirational quotes",
        "Instant PDF download",
        "Mobile-friendly layout",
        "Lifetime access",
        "Free updates included",
      ],
      checkoutUrlEnv: "NEXT_PUBLIC_WHOP_CHECKOUT_QUOTES",
    },
    seo: {
      title: "100 Inspirational Quotes for Self-Improvement | E-book $12",
      description:
        "A motivational e-book with 100 inspirational quotes and practical guidance for confidence, habits, and a positive mindset.",
    },
    publishedAt: "2026-07-01",
    featured: true,
    downloadIds: ["100-inspirational-quotes-part-1"],
  },
  {
    id: "book_everyday_motivation",
    slug: "everyday-motivation",
    type: "ebook",
    status: "available",
    title: "Everyday Motivation",
    subtitle: "Small thoughts. Big impact. Better life.",
    shortDescription:
      "54 inspiring pages on life, growth, and perspective — short motivational pieces about family, friends, time, growth, and purpose to inspire your everyday.",
    longDescription:
      "Everyday Motivation is a warm collection of short motivational pieces for real life. Built around five themes — Family, Friends, Time, Growth, and Purpose — it offers calm, practical reflections you can read in minutes. Real life. Real thoughts. Real you.",
    author: "Ayoub El Mssellek",
    authorHandle: "@mind_and_heart_hub",
    coverImage: "/books/everyday-motivation/cover.jpg",
    formats: ["pdf"],
    pageCount: 54,
    language: "English",
    category: "Motivation",
    tags: [
      "everyday-motivation",
      "family",
      "friends",
      "growth",
      "purpose",
      "perspective",
    ],
    features: [
      {
        title: "54 Inspiring Pages",
        description:
          "Short pieces on life, growth, and perspective you can revisit any day.",
        icon: "book-open",
        tint: "sky",
      },
      {
        title: "Five Life Themes",
        description:
          "Family, Friends, Time, Growth, and Purpose — organized for easy reading.",
        icon: "compass",
        tint: "peach",
      },
      {
        title: "Real & Relatable",
        description:
          "Honest reflections for everyday moments — not empty hype.",
        icon: "heart",
        tint: "rose",
      },
      {
        title: "Quick Daily Reads",
        description:
          "Designed for coffee breaks, mornings, or quiet evenings.",
        icon: "sun",
        tint: "yellow",
      },
    ],
    benefits: [
      {
        title: "Reset your mindset",
        description:
          "Short pieces that help you shift perspective when the day feels heavy.",
        icon: "sparkles",
      },
      {
        title: "Strengthen what matters",
        description:
          "Reminders about family, friendship, and purposeful living.",
        icon: "heart",
      },
      {
        title: "Grow with intention",
        description:
          "Gentle prompts that support personal growth without overwhelm.",
        icon: "sprout",
      },
    ],
    previews: [],
    testimonials: [
      {
        name: "Elena Rossi",
        role: "Writer",
        quote:
          "Feels like a calm conversation. Short enough for busy mornings, deep enough to stay with you.",
        avatarInitials: "ER",
      },
    ],
    faqs: [
      {
        question: "What is Everyday Motivation about?",
        answer:
          "It is a 54-page collection of short motivational pieces on life, growth, and perspective — covering family, friends, time, growth, and purpose.",
      },
      {
        question: "How do I receive it?",
        answer:
          "After purchase you get an instant PDF download link by email and on the success page.",
      },
      {
        question: "Is it only for self-improvement readers?",
        answer:
          "No. It is written for anyone who wants everyday inspiration in a clear, human voice.",
      },
    ],
    pricing: {
      price: 12,
      currency: "USD",
      features: [
        "54 inspiring pages",
        "5 themes: family, friends, time, growth, purpose",
        "Instant PDF download",
        "Lifetime access",
        "Free updates included",
      ],
      checkoutUrlEnv: "NEXT_PUBLIC_WHOP_CHECKOUT_EVERYDAY",
    },
    seo: {
      title: "Everyday Motivation | 54-Page Motivational E-book $12",
      description:
        "54 inspiring pages on life, growth, and perspective. Short motivational pieces about family, friends, time, growth, and purpose.",
    },
    publishedAt: "2026-08-27",
    featured: true,
    downloadIds: ["everyday-motivation"],
  },
  {
    id: "animal_clipart_bw",
    slug: "black-and-white-animal-clipart",
    type: "clipart",
    status: "coming_soon",
    title: "Black & White Animal Clipart Pack",
    subtitle: "Clean line-art animals for crafts and classrooms",
    shortDescription:
      "A versatile black-and-white animal clipart pack for worksheets, crafts, planners, and creative projects.",
    longDescription:
      "High-quality black and white animal illustrations designed for easy printing and digital use. Ideal for teachers, parents, designers, and crafters who need simple, elegant animal graphics.",
    author: "Mind & Heart Hub",
    coverImage: "/products/animal-clipart/cover-placeholder.svg",
    formats: ["png", "zip"],
    itemCount: 50,
    language: "English",
    category: "Clipart",
    tags: ["clipart", "animals", "black-and-white", "printables"],
    features: [
      {
        title: "Black & White Line Art",
        description: "Clean animal illustrations that print beautifully.",
        icon: "pen",
        tint: "cream",
      },
      {
        title: "Ready for Projects",
        description: "Use in worksheets, stickers, planners, and crafts.",
        icon: "sparkles",
        tint: "lavender",
      },
      {
        title: "Commercial-Friendly Pack",
        description: "Clear usage terms provided with your download.",
        icon: "shield",
        tint: "mint",
      },
    ],
    benefits: [],
    previews: [],
    testimonials: [],
    faqs: [
      {
        question: "What file types will I get?",
        answer:
          "PNG (and ZIP pack). Exact asset list will be confirmed at launch.",
      },
    ],
    pricing: {
      price: 15,
      currency: "USD",
      features: [
        "Black & white animal clipart",
        "PNG files in a ZIP pack",
        "Instant download on release",
        "Lifetime access",
      ],
      checkoutUrlEnv: "NEXT_PUBLIC_WHOP_CHECKOUT_CLIPART",
    },
    seo: {
      title: "Black & White Animal Clipart Pack | Digital Download",
      description:
        "Clean black-and-white animal clipart for crafts, classrooms, and creative projects. Coming soon.",
    },
    publishedAt: "2026-09-15",
  },
  {
    id: "vintage_templates_50",
    slug: "50-vintage-digital-templates",
    type: "template_pack",
    status: "coming_soon",
    title: "50 Vintage Digital Templates",
    subtitle: "Timeless templates for journals, planners & creatives",
    shortDescription:
      "A curated pack of 50 vintage-inspired digital templates for journaling, planning, social posts, and printable projects.",
    longDescription:
      "Fifty ready-to-use vintage digital templates with classic textures and elegant layouts. Designed for creators who want a nostalgic look without designing from scratch.",
    author: "Mind & Heart Hub",
    coverImage: "/products/vintage-templates/cover-placeholder.svg",
    formats: ["pdf", "png", "zip"],
    itemCount: 50,
    language: "English",
    category: "Templates",
    tags: ["templates", "vintage", "printables", "journal"],
    features: [
      {
        title: "50 Ready Templates",
        description: "A full pack of vintage-inspired layouts you can use immediately.",
        icon: "layers",
        tint: "peach",
      },
      {
        title: "Print & Digital Use",
        description: "Works for printable journals and on-screen creative work.",
        icon: "file",
        tint: "yellow",
      },
      {
        title: "Timeless Aesthetic",
        description: "Classic vintage styling that feels premium and versatile.",
        icon: "sparkles",
        tint: "cream",
      },
    ],
    benefits: [],
    previews: [],
    testimonials: [],
    faqs: [
      {
        question: "What is included?",
        answer:
          "50 vintage digital templates delivered as a downloadable pack. Final formats will be listed at launch.",
      },
    ],
    pricing: {
      price: 27,
      currency: "USD",
      features: [
        "50 vintage digital templates",
        "Instant download on release",
        "Printable + digital use",
        "Lifetime access",
      ],
      checkoutUrlEnv: "NEXT_PUBLIC_WHOP_CHECKOUT_VINTAGE",
    },
    seo: {
      title: "50 Vintage Digital Templates | Printable Template Pack",
      description:
        "A pack of 50 vintage-inspired digital templates for journals, planners, and creative projects. Coming soon.",
    },
    publishedAt: "2026-10-01",
  },
];

/** Packs first, then singles, then other coming-soon creatives */
export const products: DigitalProduct[] = [
  ...coreProducts.filter((p) => p.type === "ebook"),
  ...getAllKidsProducts(),
  ...coreProducts.filter((p) => p.type !== "ebook"),
];

export function getAllProducts(): DigitalProduct[] {
  return products;
}

export function getProductBySlug(slug: string): DigitalProduct | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAvailableProducts(): DigitalProduct[] {
  return products.filter((product) => product.status === "available");
}

export function getFeaturedProducts(): DigitalProduct[] {
  return products.filter((product) => product.featured);
}

export function getProductsByType(type: DigitalProduct["type"]): DigitalProduct[] {
  return products.filter((product) => product.type === type);
}

export function getAllProductSlugs(): string[] {
  return products.map((product) => product.slug);
}

export function getProductTypeLabel(type: DigitalProduct["type"]): string {
  switch (type) {
    case "ebook":
      return "E-book";
    case "kids_book":
      return "Kids Books";
    case "clipart":
      return "Clipart";
    case "template_pack":
      return "Templates";
  }
}
