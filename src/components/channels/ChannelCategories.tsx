import { channelCategories } from "@/data/channels-page";
import Reveal from "@/components/channels/Reveal";

export default function ChannelCategories() {
  return (
    <section className="section-shell py-20 md:py-28">
      <Reveal>
        <p className="label">Categorias IPTV PT</p>
        <h2 className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[44px]">
          Tudo o que os espectadores em Portugal precisam
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] text-slate">
          Canais IPTV Portugal organizados para o dia a dia — TV portuguesa, desporto, cinema e lazer familiar.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
        {channelCategories.map((category, index) => {
          const Icon = category.icon;
          return (
            <Reveal key={category.title} delayMs={(index % 5) * 45}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white transition group-hover:border-white/30">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-3">
                  <h3 className="text-[18px] tracking-normal text-white">{category.title}</h3>
                  <span className="shrink-0 text-[13px] text-muted">{category.count}</span>
                </div>
                <p className="mt-3 text-[14px] leading-[1.45] text-slate">{category.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
