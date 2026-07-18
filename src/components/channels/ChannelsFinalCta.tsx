import Link from "next/link";
import Reveal from "@/components/channels/Reveal";

const trustBadges = ["Ativação instantânea", "Garantia 7 dias", "Suporte 24/7", "Checkout seguro"];

export default function ChannelsFinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, rgba(255,255,255,0.10), transparent 65%), linear-gradient(180deg, #030303 0%, #0a0a0a 100%)",
        }}
      />
      <div className="section-shell relative">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-3xl border border-white/15 bg-white/[0.04] px-6 py-12 text-center backdrop-blur-md md:px-12 md:py-16">
            <p className="label text-white/60">Comprar IPTV Portugal</p>
            <h2 className="mt-4 text-[36px] tracking-[-0.9px] text-white md:text-[48px]">
              Pronto para o melhor IPTV Portugal?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[16px] text-slate">
              Escolha um plano PortugalIPTV e comece a ver televisão portuguesa, Liga Portugal e entretenimento premium
              em minutos.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/subscriptions" className="btn btn-solid" aria-label="Comprar IPTV Portugal agora">
                Comprar IPTV Agora
              </Link>
              <Link href="/subscriptions" className="btn btn-ghost" aria-label="Ver planos IPTV PT">
                Ver Planos de Subscrição
              </Link>
            </div>
            <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {trustBadges.map((badge) => (
                <li key={badge} className="text-[12px] uppercase tracking-[0.35px] text-muted">
                  {badge}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
