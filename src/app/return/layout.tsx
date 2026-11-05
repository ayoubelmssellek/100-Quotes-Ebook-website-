import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment",
  referrer: "no-referrer",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function ReturnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Extra belt: hide this shell URL from Stripe as Referer */}
      <meta name="referrer" content="no-referrer" />
      {children}
    </>
  );
}
