import Image from "next/image";
import type { SeoImage } from "@/data/media";
import { platformDescriptions } from "@/data/channels-page";
import Reveal from "@/components/channels/Reveal";

type StreamingPlatformsProps = {
  platforms: SeoImage[];
};

const preferredOrder = ["HBO Max", "Disney Plus", "Prime Video", "Apple TV+", "SkyShowtime", "DAZN", "RTP Play"];

export default function StreamingPlatforms({ platforms }: StreamingPlatformsProps) {
  const ordered = [...platforms].sort(
    (a, b) => preferredOrder.indexOf(a.entity) - preferredOrder.indexOf(b.entity),
  );

  return (
    <section className="border-y border-line bg-deep py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="label">Filmes & Entretenimento</p>
          <h2 className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[44px]">
            Entretenimento premium para famílias em Portugal
          </h2>
          <p className="mt-4 max-w-2xl text-[16px] text-slate">
            HBO Max, Disney+, Prime Video e mais — cinema e séries num só serviço IPTV Portugal.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ordered.map((platform, index) => (
            <Reveal key={platform.entity} delayMs={(index % 3) * 70}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25">
                <div className="relative h-14 w-28">
                  <Image
                    src={platform.src}
                    alt={platform.alt}
                    title={platform.title}
                    fill
                    className="object-contain object-left transition duration-500 group-hover:scale-105"
                    sizes="112px"
                  />
                </div>
                <h3 className="mt-6 text-[20px] text-white">{platform.entity}</h3>
                <p className="mt-2 flex-1 text-[14px] leading-[1.45] text-slate">
                  {platformDescriptions[platform.entity] ??
                    "Entretenimento premium disponível no seu IPTV Português."}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
