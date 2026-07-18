import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { absoluteUrl } from "@/lib/utils";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(absoluteUrl()),
  title: {
    default:
      "100 Inspirational Quotes for Self-Improvement | Digital E-book",
    template: "%s | Mind & Heart Hub",
  },
  description:
    "A motivational e-book featuring 100 inspirational quotes and practical guidance to help you build confidence, improve daily habits, and develop a positive mindset.",
  keywords: [
    "inspirational quotes",
    "self-improvement e-book",
    "motivation",
    "confidence",
    "personal growth",
    "digital book",
  ],
  authors: [{ name: "Ayoub El Mssellek" }],
  creator: "Mind & Heart Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl(),
    siteName: "Mind & Heart Hub",
    title:
      "100 Inspirational Quotes for Self-Improvement | Digital E-book",
    description:
      "A motivational e-book featuring 100 inspirational quotes and practical guidance to help you build confidence, improve daily habits, and develop a positive mindset.",
    images: [
      {
        url: "/books/100-inspirational-quotes/cover.png",
        width: 900,
        height: 1200,
        alt: "100 Inspirational Quotes for Self-Improvement book cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "100 Inspirational Quotes for Self-Improvement | Digital E-book",
    description:
      "A motivational e-book featuring 100 inspirational quotes and practical guidance to help you build confidence, improve daily habits, and develop a positive mindset.",
    images: ["/books/100-inspirational-quotes/cover.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: absoluteUrl(),
  },
};

export const viewport: Viewport = {
  themeColor: "#0a1530",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--primary)] focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
