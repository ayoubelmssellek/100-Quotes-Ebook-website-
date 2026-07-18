import { site } from "@/data/content";

export const metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <h1 className="text-[40px] tracking-[-1.2px] text-white">Legal Disclaimer & User Responsibility</h1>
      <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-muted">
        <p>{site.demoNotice}</p>
        <p>
          We do not host, stream, broadcast, or store television channels, movies, or media content. Pages illustrate
          marketing structures only.
        </p>
        <p>
          Users are responsible for complying with laws in their jurisdiction. Nothing on this site is legal advice.
        </p>
        <p>Contact: {site.email} · {site.phone}</p>
      </div>
    </div>
  );
}
