import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getGuide, guides } from "@/data/guides";

export function generateStaticParams() {
  return guides.map((g) => ({ device: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ device: string }> }) {
  const { device } = await params;
  const guide = getGuide(device);
  if (!guide) return { title: "Guia de instalação" };
  return {
    title: `${guide.title} — Como instalar IPTV`,
    description: guide.short,
  };
}

export default async function DeviceGuidePage({ params }: { params: Promise<{ device: string }> }) {
  const { device } = await params;
  const guide = getGuide(device);
  if (!guide) notFound();

  return (
    <article className="section-shell py-16 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Início", path: "/" },
          { name: "Instalação IPTV", path: "/installation-guides" },
          { name: guide.title, path: `/installation-guides/${guide.slug}` },
        ]}
      />
      <Link href="/installation-guides" className="text-[14px] text-slate hover:text-white">
        ← Todos os guias de instalação
      </Link>
      <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">{guide.title}</h1>
      <p className="mt-4 max-w-3xl text-[16px] text-slate">{guide.intro}</p>

      <section className="mt-10 border border-line bg-deep p-6 md:p-8">
        <h2 className="text-[20px] text-white">O que precisa</h2>
        <ul className="mt-4 space-y-2 text-[14px] text-slate">
          {guide.needs.map((n) => (
            <li key={n}>— {n}</li>
          ))}
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-[20px] text-white">Passos para instalar IPTV</h2>
        {guide.steps.map((step, i) => (
          <div key={step.title} className="border border-line bg-black p-5">
            <h3 className="text-[16px] font-medium text-white">
              <span className="text-slate">{i + 1}.</span> {step.title}
            </h3>
            <p className="mt-2 text-[14px] text-slate">{step.body}</p>
          </div>
        ))}
      </section>

      <section className="mt-8 border border-line bg-surface p-6">
        <h2 className="text-[20px] text-white">Dicas</h2>
        <ul className="mt-3 space-y-2 text-[14px] text-slate">
          {guide.tips.map((t) => (
            <li key={t}>— {t}</li>
          ))}
        </ul>
      </section>

      <div className="mt-10 flex flex-wrap gap-3">
        <Link href="/subscriptions" className="btn btn-solid" aria-label="Comprar IPTV Agora">
          Comprar Agora
        </Link>
        <Link href="/#faq" className="btn btn-ghost">
          FAQ IPTV
        </Link>
      </div>
    </article>
  );
}
