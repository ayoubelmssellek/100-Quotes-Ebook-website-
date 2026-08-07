import type { BookProduct } from "@/types/product";

export const books: BookProduct[] = [
  {
    id: "book_100_quotes_part_1",
    slug: "100-inspirational-quotes-for-self-improvement",
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
    category: "Self-Improvement",
    tags: [
      "motivation",
      "confidence",
      "habits",
      "mindset",
      "personal-growth",
    ],
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
        title: "Motivation & Momentum",
        description:
          "Short, powerful reminders to keep you moving when energy dips.",
        icon: "flame",
        tint: "peach",
      },
      {
        title: "Confidence Building",
        description:
          "Words that help you trust yourself and show up with quiet strength.",
        icon: "shield",
        tint: "sky",
      },
      {
        title: "Success Mindset",
        description:
          "Perspectives that reframe challenges and reinforce disciplined ambition.",
        icon: "target",
        tint: "yellow",
      },
      {
        title: "Daily Inspiration",
        description:
          "A calm companion for morning rituals, journaling, or evening reflection.",
        icon: "sun",
        tint: "cream",
      },
      {
        title: "Self-Improvement Guidance",
        description:
          "Clear direction for building better habits and a more intentional life.",
        icon: "compass",
        tint: "rose",
      },
    ],
    benefits: [
      {
        title: "Build better habits",
        description:
          "Anchor your day with short reflections that reinforce consistency.",
        icon: "calendar-check",
      },
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
        title: "Develop discipline",
        description:
          "Train focus with daily inspiration that supports long-term commitment.",
        icon: "dumbbell",
      },
      {
        title: "Positive thinking",
        description:
          "Shift perspective with language that encourages clarity and optimism.",
        icon: "heart",
      },
      {
        title: "Daily inspiration",
        description:
          "Keep a trusted source of encouragement within reach anytime.",
        icon: "book-open",
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
      {
        src: "/books/100-inspirational-quotes/preview-04.png",
        alt: "Guidance page from the e-book",
        label: "Guidance",
      },
      {
        src: "/books/100-inspirational-quotes/preview-05.png",
        alt: "Another sample quote page",
        label: "Reflection",
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
      {
        name: "Elena Rossi",
        role: "Coach & Writer",
        quote:
          "A beautiful companion for journaling. Short enough to revisit daily, deep enough to spark real reflection.",
        avatarInitials: "ER",
      },
    ],
    faqs: [
      {
        question: "How do I receive the book?",
        answer:
          "After a successful purchase, you receive an instant download link by email and on the confirmation page. Access is available immediately.",
      },
      {
        question: "Is this a PDF?",
        answer:
          "Yes. The e-book is delivered as a high-quality PDF optimized for reading on desktop, tablet, and mobile devices.",
      },
      {
        question: "Can I read it on mobile?",
        answer:
          "Absolutely. The layout is designed for comfortable reading on phones, tablets, and e-readers that support PDF.",
      },
      {
        question: "Will I receive updates?",
        answer:
          "Yes. If we release improvements or corrections to Part 1, existing customers receive free access to the updated file.",
      },
      {
        question: "Can I download it multiple times?",
        answer:
          "Yes. You can re-download your purchase anytime using the secure link in your confirmation email.",
      },
    ],
    pricing: {
      price: 40,
      currency: "EUR",
      features: [
        "100 inspirational quotes",
        "Instant PDF download",
        "Mobile-friendly layout",
        "Lifetime access to Part 1",
        "Free updates included",
      ],
    },
    seo: {
      title:
        "100 Inspirational Quotes for Self-Improvement | Digital E-book",
      description:
        "A motivational e-book featuring 100 inspirational quotes and practical guidance to help you build confidence, improve daily habits, and develop a positive mindset.",
    },
    publishedAt: "2026-07-01",
    featured: true,
  },
];

export function getAllBooks(): BookProduct[] {
  return books;
}

export function getBookBySlug(slug: string): BookProduct | undefined {
  return books.find((book) => book.slug === slug);
}

export function getFeaturedBook(): BookProduct {
  return books.find((book) => book.featured) ?? books[0];
}

export function getAllBookSlugs(): string[] {
  return books.map((book) => book.slug);
}
