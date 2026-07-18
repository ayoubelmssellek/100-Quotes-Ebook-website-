import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { guides } from "@/data/guides";

export const metadata: Metadata = {
  title: "Instalar IPTV — Smart TV, App e Box IPTV",
  description:
    "Como instalar IPTV em Portugal: melhor app IPTV para Smart TV, IPTV Android, box IPTV Android e Fire Stick. Depois de comprar IPTV, siga o guia.",
  openGraph: {
    title: "Instalar IPTV — Smart TV, App e Box | StreamNova",
    description:
      "Guias para IPTV app, Smart TV e box para IPTV. Ativação rápida após comprar o seu serviço IPTV.",
  },
};

export default function InstallationGuidesPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Início", path: "/" },
          { name: "Instalação IPTV", path: "/installation-guides" },
        ]}
      />
      <p className="label">Guias de instalação</p>
      <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Como instalar IPTV em qualquer dispositivo
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] text-slate">
        Encontre o guia para Smart TV IPTV, IPTV app Android, IPTV player Windows ou Apple TV. Precisa de ajuda?
        Contacte o suporte e acompanhamos a instalação do IPTV smart player.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/subscriptions" className="btn btn-solid" aria-label="Comprar IPTV Agora">
          Comprar Agora
        </Link>
        <Link href="/#faq" className="btn btn-ghost">
          FAQ — IPTV como funciona
        </Link>
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {guides.map((guide) => (
          <article key={guide.slug} className="flex flex-col border border-line bg-deep p-6">
            <h2 className="text-[20px] text-white">{guide.title}</h2>
            <p className="mt-3 flex-1 text-[14px] text-slate">{guide.short}</p>
            <Link
              href={`/installation-guides/${guide.slug}`}
              className="mt-5 text-[14px] text-slate hover:text-white"
            >
              Ver tutorial →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
