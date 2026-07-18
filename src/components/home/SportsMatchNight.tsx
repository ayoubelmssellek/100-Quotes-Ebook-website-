import Image from "next/image";
import Link from "next/link";
import type { SeoImage } from "@/data/media";

type SportsMatchNightProps = {
  competitions: SeoImage[];
  featured: SeoImage;
};

type Fixture = {
  entity: string;
  kickoff: string;
  status: "live" | "today" | "soon";
  quality: "4K" | "HD";
};

const FIXTURES: Fixture[] = [
  { entity: "Liga Portugal Betclic", kickoff: "Jornada em curso", status: "live", quality: "4K" },
  { entity: "UEFA Champions League", kickoff: "Noites europeias", status: "live", quality: "4K" },
  { entity: "Premier League", kickoff: "Fim de semana", status: "today", quality: "4K" },
  { entity: "Formula 1", kickoff: "Grande Prémio", status: "today", quality: "4K" },
  { entity: "UFC", kickoff: "Fight Night", status: "soon", quality: "HD" },
];

const STATUS_LABEL: Record<Fixture["status"], string> = {
  live: "Em direto",
  today: "Hoje",
  soon: "Em breve",
};

export default function SportsMatchNight({ competitions, featured }: SportsMatchNightProps) {
  const byEntity = new Map(competitions.map((item) => [item.entity, item]));
  const rows = FIXTURES.map((fixture) => ({
    ...fixture,
    media: byEntity.get(fixture.entity),
  })).filter((row) => row.media);

  return (
    <section
      className="relative isolate overflow-hidden border-y border-line"
      aria-labelledby="sports-heading"
    >
      {/* Atmospheric plate — image is environment, not a side panel */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={featured.src}
          alt=""
          fill
          className="object-cover opacity-[0.18] saturate-50"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/92 to-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
      </div>

      <div className="section-shell relative py-16 md:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-10 xl:gap-16">
          {/* Typographic statement — the story */}
          <div className="flex flex-col justify-between gap-10">
            <div>
              <p className="label text-white/55">Desporto em direto</p>
              <h2
                id="sports-heading"
                className="mt-5 max-w-lg text-[40px] leading-[1.05] tracking-[-1.4px] text-white md:text-[52px]"
              >
                IPTV Premium para Portugal
              </h2>
              <p className="mt-6 max-w-md text-[16px] leading-[1.55] text-slate">
                Mais de 2.000 canais de desporto em clareza 4K — Liga Portugal, Champions e Sport TV no seu serviço
                IPTV.
              </p>
            </div>

            <div className="border-t border-white/10 pt-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-mid">Cobertura</p>
              <p className="mt-3 text-[72px] leading-none tracking-[-3px] text-white md:text-[96px]">
                2.000<span className="text-white/35">+</span>
              </p>
              <p className="mt-3 text-[15px] text-slate">canais de desporto · HD / FHD / 4K</p>
              <Link href="#plans" className="btn btn-solid mt-8 inline-flex" aria-label="Escolher Plano IPTV">
                Escolher Plano
              </Link>
            </div>
          </div>

          {/* LED scoreboard — competition as fixtures, not logo soup */}
          <div className="min-w-0">
            <div className="overflow-hidden rounded-lg border border-white/15 bg-black/55 shadow-[0_40px_120px_rgba(0,0,0,0.65)] backdrop-blur-md">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 md:px-5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-35" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                  </span>
                  <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white">Quadro de jogos</p>
                </div>
                <p className="font-mono text-[11px] text-muted">SPORT TV · 4K FEED</p>
              </div>

              <ul className="divide-y divide-white/10" aria-label="Competições desportivas em IPTV">
                {rows.map((row, index) => (
                  <li key={row.entity}>
                    <article className="group grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-4 transition-colors duration-200 hover:bg-white/[0.04] md:gap-5 md:px-5 md:py-5">
                      <span className="font-mono text-[12px] text-muted tabular-nums">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex min-w-0 items-center gap-3 md:gap-4">
                        <div className="relative h-9 w-14 shrink-0 md:h-10 md:w-16">
                          <Image
                            src={row.media!.src}
                            alt={row.media!.alt}
                            title={row.media!.title}
                            fill
                            className="object-contain"
                            sizes="64px"
                          />
                        </div>
                        <div className="min-w-0">
                          <h3 className="truncate text-[14px] font-medium tracking-[-0.2px] text-white md:text-[15px]">
                            {row.entity === "Liga Portugal Betclic" ? "Liga Portugal" : row.entity}
                          </h3>
                          <p className="mt-0.5 truncate text-[12px] text-mid">{row.kickoff}</p>
                        </div>
                      </div>

                      <div className="flex shrink-0 flex-col items-end gap-1.5 sm:flex-row sm:items-center sm:gap-2">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] ${
                            row.status === "live"
                              ? "bg-white text-black"
                              : "border border-white/15 text-slate"
                          }`}
                        >
                          {row.status === "live" ? (
                            <span className="h-1.5 w-1.5 rounded-full bg-black" aria-hidden="true" />
                          ) : null}
                          {STATUS_LABEL[row.status]}
                        </span>
                        <span className="font-mono text-[10px] tracking-wider text-muted">{row.quality}</span>
                      </div>
                    </article>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-white/[0.03] px-4 py-4 md:px-5">
                <p className="text-[12px] text-slate">
                  Liga Portugal · Champions · Sport TV — no mesmo IPTV Premium
                </p>
                <Link
                  href="#plans"
                  className="text-[13px] font-medium text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Ver planos →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
