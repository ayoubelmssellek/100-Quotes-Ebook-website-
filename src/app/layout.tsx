import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import AppChrome from "@/components/AppChrome";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Secure payment",
    template: "%s | Secure payment",
  },
  description: "Secure payment handoff.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full`}>
      <body className={`${dmSans.className} flex min-h-full flex-col antialiased`}>
        <AppChrome>{children}</AppChrome>
      </body>
    </html>
  );
}
