import { site } from "@/data/content";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <h1 className="text-[40px] tracking-[-1.2px] text-white">Terms & Conditions</h1>
      <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-muted">
        <p>
          By browsing StreamNova you agree this project is a non-commercial demo for learning Next.js layouts. No real
          products, licenses, or media rights are offered for sale.
        </p>
        <p>
          You may not misrepresent this site as an active paid IPTV reseller. Demo prices, channel counts, and
          guarantees are mock content for UI practice.
        </p>
        <p>Contact: {site.email}</p>
      </div>
    </div>
  );
}
