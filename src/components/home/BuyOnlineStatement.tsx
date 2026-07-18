import Link from "next/link";
import { Clapperboard, Trophy, Zap } from "lucide-react";
import Reveal from "@/components/channels/Reveal";

const pillars = [
  {
    icon: Trophy,
    title: "Desporto em direto",
    description: "Liga Portugal, Sport TV e as noites europeias num stream estável.",
  },
  {
    icon: Clapperboard,
    title: "Entretenimento & filmes",
    description: "Os últimos lançamentos e séries premium no mesmo serviço IPTV.",
  },
  {
    icon: Zap,
    title: "Acesso instantâneo",
    description: "Compare o IPTV preço, escolha o plano e comece a ver em minutos.",
  },
];

const trustPoints = ["Ativação rápida", "Garantia 7 dias", "Suporte 24/7", "Checkout seguro"];

export default function BuyOnlineStatement() {
  return (
    <section
      className="relative overflow-hidden border-y border-line py-20 md:py-28"
      aria-labelledby="buy-online-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,255,255,0.08), transparent 55%), linear-gradient(180deg, #050505 0%, #0a0a0a 45%, #050505 100%)",
        }}
      />

      <div className="section-shell relative">
        <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <p className="label">A escolha certa</p>
            <h2
              id="buy-online-heading"
              className="mt-5 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[48px]"
            >
              Comprar IPTV Online
            </h2>
            <p className="mt-6 max-w-xl text-[16px] leading-[1.5] text-slate md:text-[17px]">
              Desporto em direto, entretenimento e os últimos filmes num só serviço IPTV — compare o IPTV preço e
              obtenha acesso instantâneo ao melhor IPTV Portugal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/subscriptions" className="btn btn-solid" aria-label="Comprar IPTV Portugal agora">
                Comprar Agora
              </Link>
              <Link href="/why-us" className="btn btn-ghost" aria-label="Saber mais sobre PortugalIPTV">
                Saber mais
              </Link>
            </div>
          </Reveal>

          <Reveal delayMs={100}>
            <aside className="rounded-3xl border border-white/12 bg-white/[0.04] p-6 backdrop-blur-md md:p-8">
              <p className="text-[12px] uppercase tracking-[0.35px] text-white/50">Porquê comprar agora</p>
              <ul className="mt-5 space-y-5">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-[14px] text-slate">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-[28px] tracking-[-0.8px] text-white">IPTV PT</p>
                <p className="mt-1 text-[13px] text-muted">Feito para quem vive em Portugal</p>
              </div>
            </aside>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delayMs={index * 70}>
                <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition duration-300 group-hover:border-white/25">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-[18px] tracking-[-0.2px] text-white">{pillar.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.45] text-slate">{pillar.description}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
