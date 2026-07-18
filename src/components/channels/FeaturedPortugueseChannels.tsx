import Image from "next/image";
import type { SeoImage } from "@/data/media";
import Reveal from "@/components/channels/Reveal";

type FeaturedPortugueseChannelsProps = {
  channels: SeoImage[];
};

export default function FeaturedPortugueseChannels({ channels }: FeaturedPortugueseChannelsProps) {
  return (
    <section className="border-y border-line bg-deep py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="label">Televisão Portuguesa</p>
          <h2 className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[44px]">
            Veja os seus canais portugueses favoritos
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] text-slate">
            RTP1, SIC, TVI, Sport TV e mais — o núcleo do IPTV Português num serviço pensado para Portugal.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {channels.map((channel, index) => (
            <Reveal key={channel.entity} delayMs={(index % 4) * 60}>
              <article className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1.5 hover:border-white/30 hover:bg-white/[0.08] hover:shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <div className="relative mx-auto h-16 w-full max-w-[140px]">
                  <Image
                    src={channel.src}
                    alt={channel.alt}
                    title={channel.title}
                    fill
                    className="object-contain transition duration-500 group-hover:scale-105"
                    sizes="140px"
                  />
                </div>
                <h3 className="mt-5 text-center text-[16px] text-white">{channel.entity}</h3>
                <p className="mt-1 text-center text-[12px] text-muted">Canal IPTV Portugal</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
