import { site } from "@/data/content";

export const metadata = { title: "Refund Policy" };

export default function RefundPolicyPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <h1 className="text-[40px] tracking-[-1.2px] text-white">Refund Policy</h1>
      <p className="mt-6 max-w-3xl rounded-2xl border border-line bg-elevated/60 p-5 text-sm text-muted italic">
        &ldquo;We guarantee a prompt and full refund should you need it. There&apos;s no need to file a case; simply
        inform us via email, and we&apos;ll handle everything for you.&rdquo;
      </p>
      <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-muted">
        <h2 className="text-[20px] text-white">General refund policy</h2>
        <p>All returns must be requested within 7 days of the payment date — demo wording only.</p>
        <h2 className="text-[20px] text-white">How to initiate a refund</h2>
        <p>
          Contact {site.email}. On a live storefront, staff would confirm within minutes to an hour. StreamNova does
          not collect payment, so nothing is refunded here.
        </p>
      </div>
    </div>
  );
}
