import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Pricing from "@/components/Pricing";
import AnywhereExperience from "@/components/home/AnywhereExperience";
import BuyOnlineStatement from "@/components/home/BuyOnlineStatement";
import ChannelsShowcase from "@/components/home/ChannelsShowcase";
import SportsMatchNight from "@/components/home/SportsMatchNight";
import {
  faqs,
  featureBullets,
  plans,
  testimonials,
  whyCards,
} from "@/data/content";
import { posts } from "@/data/blog";
import {
  channelLogos,
  entertainmentBrands,
  featuredSportsImage,
  paymentMethods,
  posterImages,
  sportsBrands,
} from "@/data/media";
import { faqJsonLd, productOffersJsonLd, siteConfig } from "@/lib/seo";
import heroImage from "@/assets/images/hero.png";

export const metadata: Metadata = {
  title: {
    absolute: siteConfig.defaultTitle,
  },
  description: siteConfig.defaultDescription,
  openGraph: {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
  },
  alternates: { canonical: siteConfig.url },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={productOffersJsonLd(plans.one)} />

      {/* CINEMATIC HERO — full bleed */}
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <Image
          src={heroImage}
          alt="Melhor IPTV Portugal — streaming premium 4K"
          title="Melhor IPTV Portugal"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/30" />

        <div className="section-shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 md:pb-24">
          <p className="animate-rise label text-white/70">PortugalIPTV · IPTV Portugal</p>
          <h1 className="animate-rise-delay-1 mt-5 max-w-4xl text-[40px] tracking-[-1.2px] text-white md:text-[48px] lg:text-[56px]">
            Melhor IPTV Portugal
          </h1>
          <p className="animate-rise-delay-1 mt-3 max-w-xl text-[20px] leading-[1.2] tracking-[-0.26px] text-white/90 md:text-[24px]">
            Comprar IPTV online em 4K — veja mais, pague menos.
          </p>
          <p className="animate-rise-delay-2 mt-5 max-w-lg text-[16px] leading-[1.4] text-slate">
            Serviço IPTV em Portugal com canais IPTV PT, Sport TV e 140.000 filmes — IPTV 4K Portugal na Smart TV,
            app Android ou box IPTV.
          </p>
          <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
            <Link href="/subscriptions" className="btn btn-solid" aria-label="Comprar IPTV Agora">
              Comprar Agora
            </Link>
            <Link href="#plans" className="btn btn-ghost" aria-label="Ver Planos e IPTV preço">
              Ver Planos
            </Link>
          </div>
          <p className="mt-6 text-[13px] text-muted">
            Oferta limitada: 1 mês grátis no plano anual · teste IPTV sob consulta
          </p>
        </div>
      </section>

      {/* VOD GRID — magazine */}
      <section className="border-t border-line py-20 md:py-28">
        <div className="section-shell">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label">On demand</p>
              <h2 className="mt-4 text-[36px] tracking-[-0.9px] text-white md:text-[40px]">
                140K+ filmes e séries
              </h2>
            </div>
            <Link href="/channels" className="btn btn-ghost">
              Ver canais
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
            {posterImages.map((poster) => (
              <div key={poster.entity} className="img-frame relative aspect-[2/3]">
                <Image
                  src={poster.src}
                  alt={poster.alt}
                  title={poster.title}
                  fill
                  className="object-cover"
                  sizes="16vw"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
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
          <p className="mt-8 text-center text-[13px] text-muted">
            Ativação rápida — sem renovação automática neste demo
          </p>
        </div>
      </section>

      <AnywhereExperience posters={posterImages.slice(0, 3)} />
      <BuyOnlineStatement />
      <ChannelsShowcase channels={channelLogos} />
      <SportsMatchNight competitions={sportsBrands} featured={featuredSportsImage} />

      {/* LIGHT SECTION — why */}
      <section className="bg-cloud py-20 text-charcoal md:py-28">
        <div className="section-shell">
          <p className="label !text-[#767d88]">Porquê PortugalIPTV</p>
          <h2 className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-black md:text-[40px]">
            Feito para noites de jogo e binge
          </h2>
          <div className="mt-12 grid gap-px bg-line-light md:grid-cols-2 xl:grid-cols-3">
            {whyCards.map((card) => (
              <article key={card.title} className="bg-cloud p-6 md:p-8">
                <h3 className="text-[20px] tracking-normal text-black">{card.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.45] text-charcoal">{card.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section-shell py-20 md:py-28">
        <Pricing />
      </section>

      {/* DEVICES */}
      <section className="section-shell py-16 md:py-24">
        <p className="label">Compatibilidade</p>
        <h2 className="mt-4 max-w-2xl text-[36px] tracking-[-0.9px] text-white md:text-[40px]">
          IPTV para Smart TV
        </h2>
        <p className="mt-5 max-w-xl text-[16px] text-slate">
          A melhor app IPTV para Smart TV, IPTV Android, box IPTV Android ou Fire Stick — guias passo a passo para
          começar a ver depois de comprar.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-mid">
          {[
            "Smart TV IPTV",
            "IPTV app Android",
            "Box IPTV / Fire Stick",
            "Aparelho IPTV",
            "Windows / PC",
            "iOS / Apple TV",
          ].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/installation-guides" className="btn btn-ghost">
            Guias de instalação
          </Link>
          <Link href="/subscriptions" className="btn btn-solid" aria-label="Começar Agora — Comprar IPTV">
            Começar Agora
          </Link>
        </div>
      </section>

      {/* FEATURE BULLETS */}
      <section className="border-y border-line bg-surface py-20 md:py-28">
        <div className="section-shell">
          <p className="label">Incluído</p>
          <h2 className="mt-4 text-[36px] tracking-[-0.9px] text-white md:text-[40px]">
            Tudo num serviço IPTV
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureBullets.map((item) => (
              <li key={item} className="border-t border-line pt-4 text-[14px] text-slate">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PAYMENTS + TRUST */}
      <section className="section-shell py-16 md:py-24">
        <p className="label text-center">Pagamentos seguros</p>
        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4" aria-label="Métodos de pagamento">
          {paymentMethods.map((method) => (
            <li key={method.entity} className="relative h-9 w-[72px] sm:h-10 sm:w-20">
              <Image
                src={method.src}
                alt={method.alt}
                title={method.title}
                fill
                className="object-contain"
                sizes="80px"
              />
            </li>
          ))}
        </ul>
        <div className="mt-16 border border-line px-6 py-8 text-center">
          <p className="micro text-white">Trustpilot</p>
          <p className="mt-2 text-[24px] text-white">Excelente · ★★★★★</p>
          <p className="mt-2 text-[13px] text-slate">Com base em avaliações demo da PortugalIPTV</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-shell pb-20 md:pb-28">
        <p className="label">Opiniões</p>
        <h2 className="mt-4 text-[36px] tracking-[-0.9px] text-white md:text-[40px]">
          O que dizem os utilizadores
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="border border-line bg-deep p-6">
              <div className="text-[13px] text-muted">★★★★★</div>
              <blockquote className="mt-4 text-[14px] leading-[1.45] text-slate">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-[14px] text-white">
                {t.name}
                <span className="text-mid"> · {t.city}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* MONEY BACK */}
      <section className="section-shell pb-16">
        <div className="flex flex-col justify-between gap-6 border border-line bg-surface px-6 py-8 md:flex-row md:items-center md:px-10">
          <div>
            <h2 className="text-[24px] text-white md:text-[36px] md:tracking-[-0.9px]">
              Garantia de 7 dias
            </h2>
            <p className="mt-3 max-w-xl text-[14px] text-slate">
              Explore sem risco. Não ficou satisfeito? Mensagem de reembolso total — política apenas de
              demonstração.
            </p>
          </div>
          <Link href="/subscriptions" className="btn btn-solid shrink-0" aria-label="Start Streaming Today">
            Obter Acesso Instantâneo
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-shell py-16 md:py-24">
        <p className="label mb-4">Suporte</p>
        <h2 className="mb-10 text-[36px] tracking-[-0.9px] text-white md:text-[40px]">
          Perguntas frequentes sobre IPTV
        </h2>
        <FAQ />
        <p className="mt-8 text-[14px] text-slate">
          Precisa de ajuda a instalar? Veja os{" "}
          <Link href="/installation-guides" className="text-white hover:underline">
            guias de instalação
          </Link>{" "}
          ou leia o{" "}
          <Link href="/blog" className="text-white hover:underline">
            blog
          </Link>
          .
        </p>
      </section>

      {/* SEO */}
      <section className="border-t border-line bg-deep py-16 md:py-24">
        <div className="section-shell space-y-10">
          <div>
            <h2 className="text-[24px] text-white md:text-[36px] md:tracking-[-0.9px]">
              Planos IPTV Portugal — compre com confiança
            </h2>
            <p className="mt-4 max-w-3xl text-[14px] leading-[1.45] text-slate">
              Mais de 35.000 canais IPTV e VOD em HD e 4K. Compare o IPTV preço, escolha o plano e compre IPTV
              Portugal com ativação rápida. Ideal para buy IPTV Portugal na Smart TV ou box.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                t: "Canais e desporto",
                b: "Liga Portugal, Champions, notícias e entretenimento num IPTV Portugal estável.",
              },
              {
                t: "Streaming de alto desempenho",
                b: "Carregamento rápido, anti-freeze e reprodução suave em HD / 4K IPTV.",
              },
              {
                t: "VPN incluída",
                b: "Ajuda a proteger dados e a reduzir limitações do ISP.",
              },
              {
                t: "Apps e players",
                b: "IPTV Smarters, Smart IPTV, IPTV player online, Android e Windows.",
              },
            ].map((b) => (
              <div key={b.t}>
                <h3 className="text-[20px] text-white">{b.t}</h3>
                <p className="mt-2 text-[14px] text-slate">{b.b}</p>
              </div>
            ))}
          </div>
          <ol className="grid gap-4 md:grid-cols-4">
            {[
              "Escolher a subscrição IPTV",
              "Registar a conta",
              "Instalar o IPTV player",
              "Começar a ver",
            ].map((step, i) => (
              <li key={step} className="border-t border-line pt-4 text-[14px] text-slate">
                <span className="micro text-white">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 text-white">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* BLOG — research style */}
      <section className="section-shell py-20 md:py-28">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="label">Journal</p>
            <h2 className="mt-4 text-[36px] tracking-[-0.9px] text-white md:text-[40px]">
              Guias e artigos IPTV
            </h2>
          </div>
          <Link href="/blog" className="text-[14px] text-slate hover:text-white">
            Ver blog
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <div className="img-frame relative aspect-[16/10]">
                <Image
                  src={post.cover}
                  alt={post.title}
                  title={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  sizes="25vw"
                />
              </div>
              <h3 className="mt-4 text-[20px] leading-[1.15] text-white group-hover:text-slate">
                {post.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-[13px] text-mid">{post.excerpt}</p>
            </Link>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link href="/subscriptions" className="btn btn-solid" aria-label="Choose Your IPTV Plan">
            Ver Planos
          </Link>
        </div>
      </section>
    </>
  );
}
