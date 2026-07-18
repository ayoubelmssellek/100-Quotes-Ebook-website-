import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import AppChrome from "@/components/AppChrome";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd, siteConfig, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.defaultTitle,
    template: "%s | PortugalIPTV",
  },
  description: siteConfig.defaultDescription,
  keywords: [
    "iptv portugal",
    "melhor iptv portugal",
    "comprar iptv",
    "iptv preço",
    "serviço iptv",
    "iptv pt",
    "iptv 4k portugal",
    "iptv em portugal",
    "buy iptv portugal",
    "canais iptv",
  ],
  authors: [{ name: "PortugalIPTV" }],
  creator: "PortugalIPTV",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "pt-PT": siteConfig.url,
    },
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className={`${dmSans.variable} h-full`}>
      <body className={`${dmSans.className} flex min-h-full flex-col antialiased`}>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
