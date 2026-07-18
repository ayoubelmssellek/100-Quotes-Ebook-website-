import Image from "next/image";
import Link from "next/link";
import {
  Clapperboard,
  Gauge,
  Headphones,
  Lock,
  MonitorPlay,
  Shield,
  Smartphone,
  Tv,
  type LucideIcon,
} from "lucide-react";
import type { SeoImage } from "@/data/media";
import { checklistFeatures } from "@/data/content";
import Reveal from "@/components/channels/Reveal";

const featureIcons: LucideIcon[] = [
  Tv,
  Clapperboard,
  MonitorPlay,
  Smartphone,
  Headphones,
  Gauge,
  Shield,
  Lock,
];

type AnywhereExperienceProps = {
  posters: SeoImage[];
};

export default function AnywhereExperience({ posters }: AnywhereExperienceProps) {
  const [primary, secondary, tertiary] = posters;

  return (
    <section className="relative overflow-hidden py-20 md:py-28" aria-labelledby="anywhere-heading">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 55% 50% at 12% 35%, rgba(255,255,255,0.07), transparent 58%), radial-gradient(ellipse 45% 40% at 88% 75%, rgba(255,255,255,0.04), transparent 55%)",
        }}
      />

      <div className="section-shell relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 xl:gap-20">
          {/* Media stage */}
          <Reveal className="relative">
            <div className="absolute -inset-6 rounded-[2rem] bg-white/[0.03] blur-2xl md:-inset-10" aria-hidden="true" />

            <div className="relative grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-[1.35fr_0.85fr]">
              <div className="group relative col-span-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_40px_100px_rgba(0,0,0,0.55)] lg:col-span-1 lg:row-span-2">
                <div className="relative aspect-[16/11] lg:aspect-auto lg:h-full lg:min-h-[420px]">
                  <Image
                    src={primary.src}
                    alt={primary.alt}
                    title={primary.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width:1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-wrap items-end justify-between gap-3 p-5 md:p-6">
                    <div>
                      <p className="text-[12px] uppercase tracking-[0.35px] text-white/60">Streaming</p>
                      <p className="mt-1 text-[18px] tracking-[-0.3px] text-white md:text-[20px]">
                        IPTV 4K Portugal
                      </p>
                    </div>
                    <ul className="flex flex-wrap gap-2" aria-label="Qualidades de streaming">
                      {["4K", "FHD", "HD"].map((quality) => (
                        <li
                          key={quality}
                          className="rounded-md border border-white/20 bg-black/45 px-2.5 py-1 text-[11px] font-medium tracking-[0.04em] text-white backdrop-blur-md"
                        >
                          {quality}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={secondary.src}
                    alt={secondary.alt}
                    title={secondary.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width:1024px) 45vw, 18vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
              </article>

              <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_24px_60px_rgba(0,0,0,0.4)]">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={tertiary.src}
                    alt={tertiary.alt}
                    title={tertiary.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width:1024px) 45vw, 18vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                </div>
              </article>
            </div>
          </Reveal>

          {/* Copy + features */}
          <div>
            <Reveal>
              <p className="label">Em qualquer lugar</p>
              <h2
                id="anywhere-heading"
                className="mt-4 max-w-xl text-[36px] tracking-[-0.9px] text-white md:text-[44px]"
              >
                IPTV 4K Portugal
              </h2>
              <p className="mt-5 max-w-lg text-[16px] leading-[1.5] text-slate md:text-[17px]">
                Desporto, notícias e entretenimento — Portugal IPTV pensado para casas portuguesas, com canais IPTV
                estáveis e catálogo VOD.
              </p>
            </Reveal>

            <ul className="mt-10 grid gap-3 sm:grid-cols-2" aria-label="Vantagens do serviço IPTV">
              {checklistFeatures.map((item, index) => {
                const Icon = featureIcons[index] ?? Tv;
                return (
                  <Reveal key={item} delayMs={(index % 4) * 55}>
                    <li className="group flex h-full items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition duration-300 group-hover:border-white/25">
                        <Icon size={16} aria-hidden="true" />
                      </span>
                      <span className="pt-1.5 text-[14px] leading-[1.35] text-slate group-hover:text-white">
                        {item}
                      </span>
                    </li>
                  </Reveal>
                );
              })}
            </ul>

            <Reveal delayMs={120}>
              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link href="/subscriptions" className="btn btn-solid" aria-label="Escolher Plano IPTV">
                  Escolher Plano
                </Link>
                <Link href="/channels" className="btn btn-ghost" aria-label="Explorar canais IPTV Portugal">
                  Explorar Canais
                </Link>
              </div>
              <p className="mt-5 text-[13px] text-muted">
                Ativação rápida · Smart TV, app e box · suporte 24/7
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
