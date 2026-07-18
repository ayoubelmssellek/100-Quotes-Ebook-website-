import { site } from "@/data/content";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <h1 className="text-[40px] tracking-[-1.2px] text-white">Privacy Policy</h1>
      <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-muted">
        <p>
          StreamNova is a fictional practice website. We do not operate a real streaming backend or sell subscriptions.
          If contact forms are submitted, treat them as local demo interactions only.
        </p>
        <p>
          A production site would describe cookies, analytics, payment processors, and how account emails are stored.
          This page exists so the footer information architecture matches a full commercial marketing site.
        </p>
        <p>Questions: {site.email}</p>
      </div>
    </div>
  );
}
