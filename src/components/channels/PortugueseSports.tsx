import Image from "next/image";
import type { SeoImage } from "@/data/media";
import { portugueseSports } from "@/data/channels-page";
import Reveal from "@/components/channels/Reveal";

type PortugueseSportsProps = {
  sportsLogos: SeoImage[];
  channelLogos: SeoImage[];
};

export default function PortugueseSports({ sportsLogos, channelLogos }: PortugueseSportsProps) {
  const featuredSports = sportsLogos.filter((item) =>
    ["Liga Portugal Betclic", "UEFA Champions League", "Premier League", "Formula 1", "UFC"].includes(item.entity),
  );
  const sportChannels = channelLogos.filter((item) => ["Sport TV", "Benfica TV"].includes(item.entity));
  const showcase = [...sportChannels, ...featuredSports].slice(0, 7);

  return (
    <section className="section-shell py-20 md:py-28">
      <Reveal>
        <p className="label">Desporto Português</p>
        <h2 className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[44px]">
          Siga a Liga Portugal e o desporto que importa
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] text-slate">
          IPTV Liga Portugal, IPTV Sport TV e as competições que as casas em Portugal acompanham — em qualidade
          premium.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showcase.map((item, index) => (
          <Reveal key={item.entity} delayMs={(index % 4) * 55}>
            <article className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
              <div className="relative mx-auto h-14 w-full max-w-[120px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  title={item.title}
                  fill
                  className="object-contain transition duration-500 group-hover:scale-105"
                  sizes="120px"
                />
              </div>
              <h3 className="mt-4 text-center text-[15px] text-white">{item.entity}</h3>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {portugueseSports.map((sport, index) => (
          <Reveal key={sport.title} delayMs={(index % 3) * 50}>
            <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20">
              <h3 className="text-[18px] text-white">{sport.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.45] text-slate">{sport.description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
