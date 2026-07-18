import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import { channelLogos, entertainmentBrands, sportsBrands } from "@/data/media";

export const metadata: Metadata = {
  title: "Lista de Canais IPTV Portugal",
  description:
    "Catálogo ilustrativo IPTV Portugal: Sport TV Portugal, RTP, SIC, TVI, desporto e entretenimento no serviço IPTV StreamNova.",
};

const categories = [
  { name: "Entretenimento PT / Internacional", count: "2,400+", samples: ["Drama", "Reality", "Talk"] },
  { name: "Desporto e eventos", count: "2,000+", samples: ["Futebol", "Basket", "Combat"] },
  { name: "Notícias e meteorologia", count: "850+", samples: ["Nacional", "Local", "Negócios"] },
  { name: "Infantil e família", count: "600+", samples: ["Cartoons", "Educação", "Família"] },
  { name: "Canais de cinema", count: "1,200+", samples: ["Ação", "Comédia", "Terror"] },
  { name: "UK / CA / EU", count: "4,500+", samples: ["BBC-style", "Francês", "Alemão"] },
  { name: "América Latina", count: "1,800+", samples: ["México", "Brasil", "Argentina"] },
  { name: "Médio Oriente e África", count: "1,100+", samples: ["Árabe", "Norte de África"] },
  { name: "Ásia-Pacífico", count: "2,200+", samples: ["Hindi", "Coreano", "Chinês"] },
  { name: "Lifestyle e documentários", count: "700+", samples: ["Cozinha", "Casa", "Docs"] },
];

export default function ChannelsPage() {
  return (
    <div className="section-shell py-16 md:py-24">
      <Breadcrumbs
        items={[
          { name: "Início", path: "/" },
          { name: "Canais IPTV", path: "/channels" },
        ]}
      />
      <p className="label">Lista completa de canais</p>
      <h1 className="mt-4 text-[40px] tracking-[-1.2px] text-white md:text-[48px]">
        Canais IPTV Portugal e mundiais
      </h1>
      <p className="mt-4 max-w-2xl text-[16px] text-slate">
        Mapa de categorias ilustrativo do catálogo StreamNova — IPTV PT com desporto, notícias e entretenimento.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
        {channelLogos.map((logo) => (
          <div key={logo.entity} className="relative h-10 w-20">
            <Image
              src={logo.src}
              alt={logo.alt}
              title={logo.title}
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        {entertainmentBrands.map((brand) => (
          <div key={brand.entity} className="relative h-10 w-20">
            <Image
              src={brand.src}
              alt={brand.alt}
              title={brand.title}
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        {sportsBrands.map((brand) => (
          <div key={brand.entity} className="relative h-10 w-20">
            <Image
              src={brand.src}
              alt={brand.alt}
              title={brand.title}
              fill
              className="object-contain"
              sizes="80px"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        {categories.map((cat) => (
          <article key={cat.name} className="border border-line bg-deep p-6">
            <div className="flex items-baseline justify-between gap-3">
              <h2 className="text-[20px] text-white">{cat.name}</h2>
              <span className="text-[14px] text-slate">{cat.count}</span>
            </div>
            <p className="mt-3 text-[14px] text-mid">{cat.samples.join(" · ")}</p>
          </article>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <Link href="/subscriptions" className="btn btn-solid" aria-label="Comprar IPTV Agora">
          Comprar Agora
        </Link>
        <Link href="/installation-guides" className="btn btn-ghost">
          Instalar IPTV
        </Link>
      </div>
    </div>
  );
}
