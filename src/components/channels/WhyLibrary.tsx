import { libraryFeatures } from "@/data/channels-page";
import Reveal from "@/components/channels/Reveal";

export default function WhyLibrary() {
  return (
    <section className="section-shell py-20 md:py-28">
      <Reveal>
        <p className="label">Porquê PortugalIPTV</p>
        <h2 className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[44px]">
          A experiência IPTV construída para Portugal
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] text-slate">
          Qualidade, estabilidade e conteúdo português — tudo o que precisa num serviço IPTV PT.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {libraryFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Reveal key={feature.title} delayMs={(index % 3) * 60}>
              <article className="group h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-[20px] text-white">{feature.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.45] text-slate">{feature.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
