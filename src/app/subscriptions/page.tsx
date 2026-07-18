import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Pricing from "@/components/Pricing";
import { faqs, plans } from "@/data/content";
import { faqJsonLd, productOffersJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Comprar IPTV Portugal — Planos e IPTV Preço",
  description:
    "Comprar IPTV Portugal com StreamNova. Veja o IPTV preço, escolha o melhor IPTV Portugal e obtenha IPTV 4K Portugal com canais IPTV PT e Sport TV. Ativação rápida.",
  openGraph: {
    title: "Comprar IPTV Portugal — Planos e IPTV Preço | StreamNova",
    description:
      "Compare planos, veja o IPTV preço e compre IPTV online. Serviço IPTV para Portugal com streaming 4K.",
  },
};

export default function SubscriptionsPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={productOffersJsonLd([...plans.one, ...plans.two])} />
      <Breadcrumbs
        items={[
          { name: "Início", path: "/" },
          { name: "Comprar IPTV", path: "/subscriptions" },
        ]}
      />
      <p className="label">Subscrições</p>
      <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Comprar IPTV Portugal
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] text-slate">
        Pagamento único com 1 ou 2 ligações, mais pack familiar de 3. Compare o IPTV preço e escolha o serviço IPTV
        certo para Smart TV, IPTV app ou box — checkout de demonstração.
      </p>
      <div className="mt-14">
        <Pricing />
      </div>
      <div className="mt-16 border border-line bg-surface p-8">
        <h2 className="text-[24px] text-white">O que está incluído ao comprar IPTV</h2>
        <ul className="mt-4 grid gap-2 text-[14px] text-slate sm:grid-cols-2">
          {[
            "Canais IPTV em direto (incluindo Sport TV)",
            "Filmes e séries on demand (VOD)",
            "Guia TV (EPG)",
            "IPTV 4K Portugal",
            "IPTV app, Smart TV e box IPTV",
            "Suporte 24/7",
          ].map((item) => (
            <li key={item}>
              <span className="mr-2 text-white">—</span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-4 text-[14px]">
          <Link href="/renew" className="text-slate hover:text-white">
            Renovar IPTV →
          </Link>
          <Link href="/installation-guides" className="text-slate hover:text-white">
            Guias de instalação →
          </Link>
          <Link href="/#faq" className="text-slate hover:text-white">
            FAQ — IPTV preço e compra →
          </Link>
          <Link href="/blog" className="text-slate hover:text-white">
            Blog →
          </Link>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="mb-8 text-[24px] text-white">FAQ — Comprar IPTV e IPTV preço</h2>
        <FAQ />
      </div>
    </div>
  );
}
