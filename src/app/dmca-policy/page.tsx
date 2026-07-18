import { site } from "@/data/content";

export const metadata = { title: "DMCA Policy" };

export default function DmcaPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <h1 className="text-[40px] tracking-[-1.2px] text-white">DMCA Policy</h1>
      <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-muted">
        <p>
          PortugalIPTV respects intellectual property. This demo does not host, upload, stream, or distribute copyrighted
          media on any server.
        </p>
        <h2 className="text-[20px] text-white">Reporting infringement</h2>
        <p>
          If you believe material on this practice site (text or images) infringes your rights, email a notice to{" "}
          {site.email} with identification of the work, the URL, your contact details, and a good-faith statement.
        </p>
        <h2 className="text-[20px] text-white">Review process</h2>
        <p>Complete notices are reviewed, investigated, and acted on promptly — typically within 24–48 hours.</p>
        <h2 className="text-[20px] text-white">False claims</h2>
        <p>Knowingly misrepresenting infringement may create liability under applicable law, including attorney fees.</p>
      </div>
    </div>
  );
}
