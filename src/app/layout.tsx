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
    default: "Mind & Heart Hub | E-books & Digital Products Store",
    template: "%s | Mind & Heart Hub",
  },
  description:
    "Shop e-books, kids story books, animal clipart, and vintage digital templates. Instant downloads from Mind & Heart Hub.",
  keywords: [
    "digital products",
    "ebook store",
    "kids story books",
    "animal clipart",
    "vintage templates",
    "motivational ebooks",
    "instant download",
  ],
  authors: [{ name: "Ayoub El Mssellek" }],
  creator: "Mind & Heart Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: absoluteUrl(),
    siteName: "Mind & Heart Hub",
    title: "Mind & Heart Hub | E-books & Digital Products Store",
    description:
      "Shop e-books, kids story books, animal clipart, and vintage digital templates. Instant downloads from Mind & Heart Hub.",
    images: [
      {
        url: "/books/everyday-motivation/cover.jpg",
        width: 900,
        height: 1200,
        alt: "Everyday Motivation ebook cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mind & Heart Hub | E-books & Digital Products Store",
    description:
      "Shop e-books, kids story books, animal clipart, and vintage digital templates. Instant downloads from Mind & Heart Hub.",
    images: ["/books/everyday-motivation/cover.jpg"],
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
