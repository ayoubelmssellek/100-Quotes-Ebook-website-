import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { whyCards } from "@/data/content";

export const metadata: Metadata = {
  title: "Porquê PortugalIPTV — Melhor IPTV Portugal",
  description:
    "Porquê escolher o serviço IPTV PortugalIPTV em Portugal: estabilidade 4K, Smart TV IPTV, IPTV Smarters e suporte 24/7.",
};

export default function WhyUsPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Início", path: "/" },
          { name: "Porquê nós", path: "/why-us" },
        ]}
      />
      <p className="label">Porquê nós?</p>
      <h1 className="mt-4 max-w-3xl text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Why Choose Our IPTV
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] text-slate">
        Flexibilidade, variedade e valor — televisão de nova geração com a estabilidade que o IPTV Portugal exige.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {whyCards.map((card) => (
          <article key={card.title} className="border border-line bg-deep p-6">
            <h2 className="text-[20px] text-white">{card.title}</h2>
            <p className="mt-3 text-[14px] leading-[1.45] text-slate">{card.body}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Link href="/subscriptions" className="btn btn-solid" aria-label="Comprar IPTV Agora">
          Comprar Agora
        </Link>
        <Link href="/installation-guides" className="btn btn-ghost">
          Como instalar IPTV
        </Link>
      </div>
    </div>
  );
}
