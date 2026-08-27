import type { DigitalProduct } from "@/types/product";

export type KidsStoryMeta = {
  num: number;
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  longDescription: string;
  pageCount: number;
  cover: string;
  downloadId: string;
  topics: string[];
};

/** Educational kids science storybooks (PDF). Numbered 1-10. */
export const kidsStories: KidsStoryMeta[] = [
  {
    num: 1,
    slug: "renewable-energy",
    title: "Renewable Energy",
    subtitle: "Powering Our Planet with the Sun, Wind, and Water!",
    shortDescription:
      "A bright kids science story about renewable energy - how the sun, wind, and water can power our planet.",
    longDescription:
      "Hey, did you know there's a super cool energy called renewable energy? It comes from things that never run out, like the sun, wind, and water. This illustrated kids book explains solar panels, wind power, and water energy in simple, friendly language - perfect for curious young readers and classrooms.",
    pageCount: 13,
    cover: "/products/kids-stories/covers/01-renewable-energy.jpg",
    downloadId: "kids-01-renewable-energy",
    topics: ["science", "environment", "energy"],
  },
  {
    num: 2,
    slug: "shooting-stars-meteors-comets",
    title: "Shooting Stars and Cosmic Visitors",
    subtitle: "Exploring Meteors and Comets!",
    shortDescription:
      "Blast into space to learn what shooting stars, meteors, and comets really are.",
    longDescription:
      "Did you know cool things zip through space called meteors and comets? This kids astronomy story explains shooting stars as small bits of rock and metal that burn up in Earth's air - plus how comets are icy visitors from far away. Fun, clear, and great for stargazing nights.",
    pageCount: 14,
    cover: "/products/kids-stories/covers/02-shooting-stars-meteors-comets.jpg",
    downloadId: "kids-02-shooting-stars",
    topics: ["space", "astronomy", "science"],
  },
  {
    num: 3,
    slug: "understanding-floods",
    title: "Understanding Floods",
    subtitle: "Keeping Our Environment Safe",
    shortDescription:
      "Learn what floods are, why they happen, and how we can stay safer around water.",
    longDescription:
      "Sometimes when it rains a lot, water fills the land and causes floods. This kids environmental story explains how floods happen near rivers, lakes, and cities - and why caring for our environment helps keep people, animals, and homes safer.",
    pageCount: 12,
    cover: "/products/kids-stories/covers/03-understanding-floods.jpg",
    downloadId: "kids-03-understanding-floods",
    topics: ["environment", "weather", "safety"],
  },
  {
    num: 4,
    slug: "sink-or-float",
    title: "Sink or Float",
    subtitle: "Fun with Science!",
    shortDescription:
      "A playful science story about density - why some things sink and others float.",
    longDescription:
      "Ever wonder why a rubber duck floats but some fruits sink? This hands-on science story introduces density in kid-friendly language and turns bath-time curiosity into learning. Ideal for early STEM and simple experiments at home.",
    pageCount: 13,
    cover: "/products/kids-stories/covers/04-sink-or-float.jpg",
    downloadId: "kids-04-sink-or-float",
    topics: ["science", "experiments", "STEM"],
  },
  {
    num: 5,
    slug: "moon-magic-lunar-eclipse",
    title: "Moon Magic",
    subtitle: "Exploring the Lunar Eclipse!",
    shortDescription:
      "Discover the magic of a lunar eclipse - when Earth's shadow paints the Moon.",
    longDescription:
      "Sometimes when the Moon moves behind the Earth, it creates a magical lunar eclipse. Kids learn how Earth casts a shadow on the Moon and why the Moon can look darker - or even reddish - during this night-sky event.",
    pageCount: 11,
    cover: "/products/kids-stories/covers/05-moon-magic-lunar-eclipse.jpg",
    downloadId: "kids-05-moon-magic",
    topics: ["space", "moon", "astronomy"],
  },
  {
    num: 6,
    slug: "sun-secrets-solar-eclipse",
    title: "Sun Secrets",
    subtitle: "Exploring the Solar Eclipse!",
    shortDescription:
      "Learn what happens when the Moon covers the Sun during a solar eclipse.",
    longDescription:
      "Sometimes the Moon moves between the Sun and the Earth, creating a solar eclipse. This kids science story explains how the Moon's shadow makes the Sun look like it is disappearing - a safe, clear introduction to one of nature's coolest sky events.",
    pageCount: 12,
    cover: "/products/kids-stories/covers/06-sun-secrets-solar-eclipse.jpg",
    downloadId: "kids-06-sun-secrets",
    topics: ["space", "sun", "astronomy"],
  },
  {
    num: 7,
    slug: "lets-recycle",
    title: "Let's Recycle",
    subtitle: "Fun Facts About Recycling!",
    shortDescription:
      "Cool recycling facts that show kids how giving materials a second chance helps the planet.",
    longDescription:
      "Recycling is like giving things a second chance to be useful! This kids eco-story shares fun facts about recycling paper, plastic, and glass - and how it saves energy compared to making everything from scratch.",
    pageCount: 13,
    cover: "/products/kids-stories/covers/07-lets-recycle.jpg",
    downloadId: "kids-07-lets-recycle",
    topics: ["environment", "recycling", "eco"],
  },
  {
    num: 8,
    slug: "mystery-of-invisible-germs",
    title: "The Mystery of Invisible Germs",
    subtitle: "Tiny invaders we can't see!",
    shortDescription:
      "A kid-friendly look at germs - what they are, where they hide, and healthy habits.",
    longDescription:
      "There are tiny things called germs that we can't see with our eyes, but they're everywhere! This illustrated story introduces bacteria and viruses in a calm, age-appropriate way and encourages hand-washing and healthy habits without scare tactics.",
    pageCount: 11,
    cover: "/products/kids-stories/covers/08-mystery-of-invisible-germs.jpg",
    downloadId: "kids-08-invisible-germs",
    topics: ["health", "hygiene", "science"],
  },
  {
    num: 9,
    slug: "lets-move-exercise",
    title: "Let's Move",
    subtitle: "Why Exercise is Important!",
    shortDescription:
      "A cheerful story about why moving our bodies helps kids feel strong and happy.",
    longDescription:
      "Exercise is like giving our bodies a superpower boost! Kids learn how running, jumping, and playing make muscles stronger and help them climb, ride, and play with more energy - a positive intro to healthy habits.",
    pageCount: 13,
    cover: "/products/kids-stories/covers/09-lets-move-exercise.jpg",
    downloadId: "kids-09-lets-move",
    topics: ["health", "exercise", "habits"],
  },
  {
    num: 10,
    slug: "ocean-adventures-sea-creatures",
    title: "Ocean Adventures",
    subtitle: "Exploring the Amazing World of Sea Creatures!",
    shortDescription:
      "Dive under the waves to meet fish, whales, and amazing ocean life.",
    longDescription:
      "The ocean is a big, watery world full of creatures big and small. This kids ocean story explores colorful fish, coral reefs, sharks, and how sea animals swim and breathe - a vivid underwater adventure for young nature lovers.",
    pageCount: 16,
    cover: "/products/kids-stories/covers/10-ocean-adventures-sea-creatures.jpg",
    downloadId: "kids-10-ocean-adventures",
    topics: ["ocean", "animals", "nature"],
  },
];

const sharedKidsFaqs: DigitalProduct["faqs"] = [
  {
    question: "What age is this for?",
    answer:
      "These illustrated science stories are written for early readers and young listeners - roughly ages 5-10 - and work well for parents and teachers too.",
  },
  {
    question: "What format do I get?",
    answer:
      "You receive a high-quality PDF via Whop after checkout. Read it on phone, tablet, or computer, and print at home if you like.",
  },
  {
    question: "How do I get the files after paying?",
    answer:
      "Buy Now opens Whop checkout. After payment, Whop gives you instant access to download your files from your Whop account.",
  },
  {
    question: "Can I buy packs instead of one book?",
    answer:
      "Yes. Choose the first 5 books for $28, all 10 PDFs for $35, or the Canva editable links pack for $50.",
  },
];

function storyToProduct(story: KidsStoryMeta): DigitalProduct {
  return {
    id: `kids_${story.num.toString().padStart(2, "0")}_${story.slug.replace(/-/g, "_")}`,
    slug: `kids-${story.slug}`,
    type: "kids_book",
    status: "available",
    title: story.title,
    subtitle: story.subtitle,
    shortDescription: story.shortDescription,
    longDescription: story.longDescription,
    author: "Mind & Heart Hub",
    coverImage: story.cover,
    formats: ["pdf"],
    pageCount: story.pageCount,
    language: "English",
    category: "Kids Science Stories",
    tags: ["kids", "science", ...story.topics],
    features: [
      {
        title: "Illustrated kids PDF",
        description: `${story.pageCount} colorful pages designed for young readers.`,
        icon: "book-open",
        tint: "mint",
      },
      {
        title: "Real science, simple words",
        description: "Clear explanations kids can understand and enjoy.",
        icon: "sparkles",
        tint: "sky",
      },
      {
        title: "Print or read digitally",
        description: "Use on tablet, phone, or print for story time.",
        icon: "file",
        tint: "lavender",
      },
    ],
    benefits: [
      {
        title: "Spark curiosity",
        description: "Science topics that invite questions and conversation.",
        icon: "sparkles",
      },
      {
        title: "Screen or paper",
        description: "Flexible PDF for bedtime, class, or car rides.",
        icon: "book-open",
      },
    ],
    previews: [
      {
        src: story.cover,
        alt: `Cover of ${story.title}`,
        label: "Cover",
      },
    ],
    testimonials: [],
    faqs: sharedKidsFaqs,
    pricing: {
      price: 12,
      currency: "USD",
      features: [
        "1 illustrated kids science PDF",
        `${story.pageCount} pages`,
        "Instant access via Whop after payment",
        "Lifetime access",
      ],
      checkoutUrlEnv: `NEXT_PUBLIC_WHOP_CHECKOUT_KIDS_${String(story.num).padStart(2, "0")}`,
    },
    seo: {
      title: `${story.title} | Kids Science Story PDF $12`,
      description: story.shortDescription,
    },
    publishedAt: "2026-08-27",
    featured: story.num <= 2,
    downloadIds: [story.downloadId],
  };
}

export const kidsStoryProducts: DigitalProduct[] = kidsStories.map(storyToProduct);

const firstFive = kidsStories.filter((s) => s.num <= 5);
const allTen = kidsStories;

export const kidsPackProducts: DigitalProduct[] = [
  {
    id: "kids_pack_5",
    slug: "kids-stories-pack-5",
    type: "kids_book",
    status: "available",
    title: "Kids Science Stories - First 5 Pack",
    subtitle: "5 illustrated PDFs | Save vs buying one by one",
    shortDescription:
      "Get the first five kids science storybooks as instant PDF downloads: Renewable Energy, Shooting Stars, Floods, Sink or Float, and Moon Magic.",
    longDescription:
      "A curated starter pack of five colorful educational storybooks. Topics cover renewable energy, meteors and comets, floods, sink-or-float science, and lunar eclipses - perfect for parents and teachers building a mini STEM library.",
    author: "Mind & Heart Hub",
    coverImage: "/products/kids-stories/pack-5-cover.jpg",
    formats: ["pdf", "zip"],
    itemCount: 5,
    language: "English",
    category: "Kids Science Stories",
    tags: ["kids", "pack", "science", "STEM"],
    features: [
      {
        title: "5 complete story PDFs",
        description: "Books 1-5 from the Kids Science Stories series.",
        icon: "layers",
        tint: "mint",
      },
      {
        title: "Better value",
        description: "$28 for five books - less than buying each at $12.",
        icon: "sparkles",
        tint: "yellow",
      },
      {
        title: "Instant downloads",
        description: "Access every PDF right after purchase.",
        icon: "file",
        tint: "sky",
      },
    ],
    benefits: [],
    previews: firstFive.map((s) => ({
      src: s.cover,
      alt: s.title,
      label: s.title,
    })),
    testimonials: [],
    faqs: sharedKidsFaqs,
    pricing: {
      price: 28,
      currency: "USD",
      compareAtPrice: 60,
      features: [
        "5 kids science story PDFs",
        "Books 1-5 included",
        "Instant downloads",
        "Lifetime access",
      ],
      checkoutUrlEnv: "NEXT_PUBLIC_WHOP_CHECKOUT_KIDS_PACK5",
    },
    seo: {
      title: "Kids Science Stories Pack (5 Books) | $28",
      description:
        "First 5 kids science storybook PDFs: energy, space, floods, sink-or-float, and lunar eclipse. Instant download.",
    },
    publishedAt: "2026-08-27",
    featured: true,
    downloadIds: firstFive.map((s) => s.downloadId),
    bundleSlugs: firstFive.map((s) => `kids-${s.slug}`),
  },
  {
    id: "kids_pack_10",
    slug: "kids-stories-pack-10",
    type: "kids_book",
    status: "available",
    title: "Kids Science Stories - Complete 10 Pack",
    subtitle: "All 10 illustrated PDFs | Best PDF value",
    shortDescription:
      "All 10 kids science storybooks in one purchase - space, ocean, recycling, germs, exercise, and more.",
    longDescription:
      "The full Kids Science Stories library: renewable energy, shooting stars, floods, sink or float, lunar & solar eclipses, recycling, germs, exercise, and ocean adventures. Ten colorful PDFs for a complete young-reader STEM shelf.",
    author: "Mind & Heart Hub",
    coverImage: "/products/kids-stories/pack-10-cover.jpg",
    formats: ["pdf", "zip"],
    itemCount: 10,
    language: "English",
    category: "Kids Science Stories",
    tags: ["kids", "pack", "science", "complete"],
    features: [
      {
        title: "All 10 story PDFs",
        description: "The complete series in one checkout.",
        icon: "layers",
        tint: "peach",
      },
      {
        title: "Biggest PDF savings",
        description: "$35 for ten books vs $120 if bought separately.",
        icon: "sparkles",
        tint: "yellow",
      },
      {
        title: "Classroom-ready",
        description: "Great for teachers, homeschool, and family libraries.",
        icon: "book-open",
        tint: "mint",
      },
    ],
    benefits: [],
    previews: allTen.map((s) => ({
      src: s.cover,
      alt: s.title,
      label: `#${s.num} ${s.title}`,
    })),
    testimonials: [],
    faqs: sharedKidsFaqs,
    pricing: {
      price: 35,
      currency: "USD",
      compareAtPrice: 120,
      features: [
        "All 10 kids science story PDFs",
        "Instant downloads",
        "Lifetime access",
        "Best PDF pack value",
      ],
      checkoutUrlEnv: "NEXT_PUBLIC_WHOP_CHECKOUT_KIDS_PACK10",
    },
    seo: {
      title: "Kids Science Stories Complete Pack (10 Books) | $35",
      description:
        "All 10 illustrated kids science story PDFs. Space, ocean, recycling, health, and more - instant download.",
    },
    publishedAt: "2026-08-27",
    featured: true,
    downloadIds: allTen.map((s) => s.downloadId),
    bundleSlugs: allTen.map((s) => `kids-${s.slug}`),
  },
  {
    id: "kids_canva_pack",
    slug: "kids-stories-canva-pack",
    type: "kids_book",
    status: "available",
    title: "Kids Science Stories - Canva Editable Pack",
    subtitle: "10 Canva design links you can customize",
    shortDescription:
      "Get Canva links for the kids science stories so you can edit text, colors, and layouts for your own use.",
    longDescription:
      "This pack delivers a PDF with Canva links to the kids science story designs. Open each link in Canva to customize for classrooms, printables, or personal projects (requires a Canva account). Ideal if you want editable versions - not just fixed PDFs.",
    author: "Mind & Heart Hub",
    coverImage: "/products/kids-stories/canva-pack-cover.jpg",
    formats: ["pdf"],
    itemCount: 10,
    language: "English",
    category: "Kids Science Stories",
    tags: ["kids", "canva", "editable", "templates"],
    features: [
      {
        title: "Canva edit links",
        description: "Open designs in Canva and customize them yourself.",
        icon: "pen",
        tint: "lavender",
      },
      {
        title: "10 story designs",
        description: "Full set of kids science story Canva links.",
        icon: "layers",
        tint: "mint",
      },
      {
        title: "For creators & teachers",
        description: "Adapt layouts for lessons, printables, and branding.",
        icon: "sparkles",
        tint: "sky",
      },
    ],
    benefits: [],
    previews: [],
    testimonials: [],
    faqs: [
      {
        question: "Do I need Canva?",
        answer:
          "Yes. You need a free or paid Canva account to open and edit the design links.",
      },
      {
        question: "Is this the same as the PDF pack?",
        answer:
          "No. The $35 pack gives finished PDF storybooks. This $50 pack gives Canva links so you can modify the designs.",
      },
      ...sharedKidsFaqs,
    ],
    pricing: {
      price: 50,
      currency: "USD",
      features: [
        "PDF with 10 Canva design links",
        "Editable in Canva",
        "Instant download",
        "Lifetime access to your links file",
      ],
      checkoutUrlEnv: "NEXT_PUBLIC_WHOP_CHECKOUT_KIDS_CANVA",
    },
    seo: {
      title: "Kids Science Stories Canva Editable Pack | $50",
      description:
        "10 Canva links for kids science stories you can edit and customize. Instant download.",
    },
    publishedAt: "2026-08-27",
    featured: true,
    downloadIds: ["kids-canva-links"],
  },
];

export function getAllKidsProducts(): DigitalProduct[] {
  return [...kidsPackProducts, ...kidsStoryProducts];
}
