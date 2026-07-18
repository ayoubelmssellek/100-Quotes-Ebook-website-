"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useId, useMemo, useState, type KeyboardEvent } from "react";
import type { SeoImage } from "@/data/media";

type ChannelsShowcaseProps = {
  channels: SeoImage[];
};

type GuideMeta = {
  number: string;
  category: string;
  blurb: string;
};

const GUIDE_META: Record<string, GuideMeta> = {
  RTP1: {
    number: "01",
    category: "Generalista",
    blurb: "O canal público de referência — notícias, séries e entretenimento no seu IPTV português.",
  },
  RTP2: {
    number: "02",
    category: "Cultura",
    blurb: "Documentários, cinema e cultura portuguesa em streaming IPTV estável.",
  },
  SIC: {
    number: "03",
    category: "Generalista",
    blurb: "SIC no catálogo Canais IPTV — novelas, informação e o que as famílias em Portugal veem.",
  },
  TVI: {
    number: "04",
    category: "Generalista",
    blurb: "TVI em direto no IPTV português: entretenimento, reality e informação nacional.",
  },
  "CM TV": {
    number: "05",
    category: "Notícias",
    blurb: "Informação 24h portuguesa — acompanhe o país no seu serviço IPTV.",
  },
  "CNN Portugal": {
    number: "06",
    category: "Notícias",
    blurb: "CNN Portugal para análise e breaking news no mesmo IPTV PT.",
  },
  "Sport TV": {
    number: "07",
    category: "Desporto",
    blurb: "Sport TV IPTV para Liga Portugal, Champions e o desporto que importa em Portugal.",
  },
  "Benfica TV": {
    number: "08",
    category: "Desporto",
    blurb: "O canal oficial dos encarnados — disponível no seu catálogo IPTV português.",
  },
};

const GUIDE_ORDER = ["RTP1", "SIC", "TVI", "Sport TV", "CM TV", "CNN Portugal", "Benfica TV", "RTP2"];

export default function ChannelsShowcase({ channels }: ChannelsShowcaseProps) {
  const listId = useId();
  const panelId = useId();

  const guideChannels = useMemo(() => {
    const byEntity = new Map(channels.map((channel) => [channel.entity, channel]));
    return GUIDE_ORDER.map((name) => byEntity.get(name)).filter((channel): channel is SeoImage => Boolean(channel));
  }, [channels]);

  const defaultIndex = Math.max(
    0,
    guideChannels.findIndex((channel) => channel.entity === "Sport TV"),
  );

  const [activeIndex, setActiveIndex] = useState(defaultIndex);
  const active = guideChannels[activeIndex] ?? guideChannels[0];
  const meta = active ? GUIDE_META[active.entity] : undefined;

  const selectChannel = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const onListKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (!guideChannels.length) return;

      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((current) => (current + 1) % guideChannels.length);
      }
      if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((current) => (current - 1 + guideChannels.length) % guideChannels.length);
      }
      if (event.key === "Home") {
        event.preventDefault();
        setActiveIndex(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        setActiveIndex(guideChannels.length - 1);
      }
    },
    [guideChannels.length],
  );

  if (!active) return null;

  return (
    <section className="border-y border-line bg-[#070707] py-16 md:py-24" aria-labelledby="channels-showcase-heading">
      <div className="section-shell">
        {/* App chrome header — product UI, not marketing hero */}
        <div className="flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-2 w-2 rounded-full bg-white" aria-hidden="true" />
              <p className="label !normal-case tracking-[0.02em] text-mid">Catálogo · Guia em direto</p>
            </div>
            <h2
              id="channels-showcase-heading"
              className="mt-4 text-[36px] tracking-[-1px] text-white md:text-[44px]"
            >
              Canais IPTV e Sport TV
            </h2>
            <p className="mt-4 text-[15px] leading-[1.55] text-slate md:text-[16px]">
              Canais portugueses e internacionais. Explore Sport TV IPTV, RTP, SIC e TVI no seu IPTV português.
            </p>
          </div>

          <div className="flex shrink-0 flex-wrap gap-3">
            <Link href="/subscriptions" className="btn btn-solid" aria-label="Comprar IPTV Online">
              Comprar Agora
            </Link>
            <Link href="/channels" className="btn btn-ghost" aria-label="Ver lista de canais IPTV Portugal">
              Lista de canais
            </Link>
          </div>
        </div>

        {/* Interactive EPG surface */}
        <div className="mt-0 grid lg:grid-cols-[minmax(240px,320px)_minmax(0,1fr)]">
          <div
            role="listbox"
            id={listId}
            aria-label="Selecionar canal IPTV Portugal"
            aria-activedescendant={`${listId}-option-${activeIndex}`}
            tabIndex={0}
            onKeyDown={onListKeyDown}
            className="border-line outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070707] lg:border-r"
          >
            {guideChannels.map((channel, index) => {
              const isActive = index === activeIndex;
              const channelMeta = GUIDE_META[channel.entity];
              return (
                <button
                  key={channel.entity}
                  type="button"
                  role="option"
                  id={`${listId}-option-${index}`}
                  aria-selected={isActive}
                  onClick={() => selectChannel(index)}
                  className={`group flex w-full items-center gap-4 border-b border-line px-4 py-4 text-left transition-colors duration-200 md:px-5 ${
                    isActive
                      ? "bg-white text-black"
                      : "bg-transparent text-slate hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span
                    className={`font-mono text-[12px] tracking-wider ${isActive ? "text-black/50" : "text-muted"}`}
                  >
                    {channelMeta?.number ?? String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="relative h-7 w-12 shrink-0">
                    <Image
                      src={channel.src}
                      alt=""
                      title={channel.title}
                      fill
                      className="object-contain"
                      sizes="48px"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className={`block truncate text-[14px] font-medium ${isActive ? "text-black" : "text-inherit"}`}>
                      {channel.entity}
                    </span>
                    <span className={`block text-[11px] ${isActive ? "text-black/55" : "text-muted"}`}>
                      {channelMeta?.category ?? "Canal"}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id={panelId}
            role="region"
            aria-live="polite"
            aria-labelledby={`${listId}-option-${activeIndex}`}
            className="relative flex min-h-[320px] flex-col justify-between overflow-hidden bg-[#0c0c0c] p-8 md:min-h-[420px] md:p-12"
          >
            {/* Soft stage light — product, not purple glow */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(255,255,255,0.06), transparent 60%)",
              }}
            />

            <div className="relative flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-mid">A sintonizar</p>
                <p className="mt-2 font-mono text-[13px] text-muted">
                  CH {meta?.number ?? "—"} · {meta?.category ?? "Canal"}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 rounded border border-line bg-surface px-3 py-1.5 text-[11px] uppercase tracking-[0.08em] text-slate">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                Ao ar
              </span>
            </div>

            <div className="relative my-10 flex flex-1 flex-col items-start justify-center gap-8 md:flex-row md:items-center md:gap-14">
              <div className="relative h-28 w-44 shrink-0 md:h-36 md:w-56">
                <Image
                  key={active.entity}
                  src={active.src}
                  alt={active.alt}
                  title={active.title}
                  fill
                  className="object-contain transition-opacity duration-300"
                  sizes="224px"
                  priority={active.entity === "Sport TV"}
                />
              </div>
              <div className="max-w-md">
                <h3 className="text-[32px] tracking-[-0.8px] text-white md:text-[40px]">{active.entity}</h3>
                <p className="mt-4 text-[15px] leading-[1.5] text-slate">{meta?.blurb}</p>
              </div>
            </div>

            <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
              <p className="text-[12px] text-muted">
                Use ↑ ↓ para mudar de canal · {activeIndex + 1} / {guideChannels.length}
              </p>
              <Link
                href="/channels"
                className="text-[13px] text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Abrir catálogo completo →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
