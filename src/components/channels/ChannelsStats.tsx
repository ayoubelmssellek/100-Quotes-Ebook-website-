import { libraryStats } from "@/data/channels-page";
import Reveal from "@/components/channels/Reveal";

export default function ChannelsStats() {
  return (
    <section className="border-y border-line bg-deep py-20 md:py-28">
      <div className="section-shell">
        <Reveal>
          <p className="label text-center">IPTV Portugal em números</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-center text-[36px] tracking-[-0.9px] text-white md:text-[44px]">
            O melhor IPTV Portugal, com números claros
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {libraryStats.map((stat, index) => (
            <Reveal key={stat.label} delayMs={(index % 3) * 70}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center transition duration-300 hover:border-white/25 hover:bg-white/[0.07]">
                <p className="text-[40px] tracking-[-1.2px] text-white md:text-[48px]">{stat.value}</p>
                <p className="mt-2 text-[14px] text-slate">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
