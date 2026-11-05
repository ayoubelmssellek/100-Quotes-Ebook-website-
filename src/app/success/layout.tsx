import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order success",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function SuccessLayout({ children }: { children: React.ReactNode }) {
  return children;
}
