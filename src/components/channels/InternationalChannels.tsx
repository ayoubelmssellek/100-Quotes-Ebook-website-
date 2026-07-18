import { Globe2, Languages, Users } from "lucide-react";
import Reveal from "@/components/channels/Reveal";

const points = [
  {
    icon: Languages,
    title: "Lares multilingues",
    description:
      "Canais da Europa e América como complemento — ideal para famílias em Portugal que também veem conteúdo internacional.",
  },
  {
    icon: Globe2,
    title: "Benefício extra",
    description:
      "O foco é o IPTV Português. Os packs internacionais existem para alargar opções, não para substituir a TV portuguesa.",
  },
  {
    icon: Users,
    title: "Feito para quem vive em Portugal",
    description:
      "Tudo o que precisa num IPTV PT: canais locais primeiro, com internacional disponível quando quiser.",
  },
];

export default function InternationalChannels() {
  return (
    <section className="section-shell py-20 md:py-28">
      <Reveal>
        <p className="label">Extra</p>
        <h2 className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[44px]">
          Também inclui canais internacionais
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] text-slate">
          Além dos Canais IPTV Portugal, a subscrição inclui opções internacionais para residentes em Portugal —
          um benefício adicional, não o produto principal.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {points.map((point, index) => {
          const Icon = point.icon;
          return (
            <Reveal key={point.title} delayMs={index * 70}>
              <article className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:border-white/20">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-white">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-[18px] text-white">{point.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.45] text-slate">{point.description}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
