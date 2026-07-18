"use client";

import Link from "next/link";
import { useState } from "react";
import { planFeatures, plans } from "@/data/content";

type Plan = (typeof plans.one)[number] | (typeof plans.two)[number];

export default function Pricing() {
  const [connections, setConnections] = useState<1 | 2>(1);
  const list = connections === 1 ? plans.one : plans.two;

  return (
    <div id="plans">
      <div className="mb-12 max-w-2xl">
        <p className="label">IPTV preço — pagamento único</p>
        <h2 className="mt-4 text-[36px] tracking-[-0.9px] text-white md:text-[40px]">
          Escolha o Melhor IPTV Portugal
        </h2>
        <p className="mt-4 text-[16px] leading-[1.4] text-slate">
          Compare o IPTV preço e compre IPTV online com canais PT, Sport TV e streaming 4K. Cada plano inclui a
          biblioteca completa para o número de ligações — ideal para IPTV em Portugal.
        </p>
        <div className="mt-6 inline-flex border border-line">
          {([1, 2] as const).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setConnections(n)}
              className={`px-5 py-2.5 text-[14px] font-semibold tracking-[-0.16px] transition ${
                connections === n ? "bg-white text-black" : "bg-transparent text-slate hover:text-white"
              }`}
            >
              {n} Ligaç{n > 1 ? "ões" : "ão"}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {list.map((plan) => (
          <PlanCard key={plan.id} plan={plan} connections={connections} />
        ))}
      </div>

      <div className="mt-4 flex flex-col justify-between gap-6 border border-line bg-surface p-6 md:flex-row md:items-center md:p-8">
        <div>
          <h3 className="text-[24px] tracking-normal text-white">IPTV Premium para Portugal — 3 ligações</h3>
          <p className="mt-2 max-w-xl text-[14px] text-slate">
            Três streams em simultâneo para família ou amigos. O melhor valor anual para comprar IPTV com mais
            ligações.
          </p>
        </div>
        <Link
          href="/checkout?plan=3conn&connections=3"
          className="btn btn-solid shrink-0"
          aria-label="Escolher plano IPTV familiar de 3 ligações"
        >
          Escolher Plano Familiar
        </Link>
      </div>
    </div>
  );
}

function PlanCard({ plan, connections }: { plan: Plan; connections: number }) {
  const featured = Boolean(plan.highlight || plan.popular);
  const checkoutUrl = plan.checkoutUrl?.trim() ?? "";
  const hasCheckout = checkoutUrl.length > 0;
  const ctaLabel = hasCheckout ? "Comprar Agora" : "Em breve";

  return (
    <article
      className={`relative flex flex-col border p-6 ${
        featured ? "border-white/40 bg-surface" : "border-line bg-black"
      }`}
    >
      {plan.popular ? <p className="micro mb-3 text-white">Mais popular</p> : null}
      {"badge" in plan && plan.badge ? (
        <p className="micro mb-3 text-white">{plan.badge}</p>
      ) : !plan.popular ? (
        <p className="micro mb-3 opacity-0">Plan</p>
      ) : null}

      <h3 className="text-[24px] text-white">{plan.label}</h3>
      <p className="mt-1 text-[13px] text-mid">
        Para {connections} ligaç{connections > 1 ? "ões" : "ão"}
      </p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-[40px] tracking-[-1px] text-white">${plan.price}</span>
        <span className="text-[14px] text-muted line-through">${plan.compare}</span>
      </div>
      <p className="mt-1 text-[12px] text-muted">IPTV preço · pagamento único</p>
      <ul className="mt-6 flex-1 space-y-2.5">
        {planFeatures.map((f) => (
          <li key={f} className="text-[13px] leading-[1.35] text-slate">
            <span className="mr-2 text-white">—</span>
            {f}
          </li>
        ))}
      </ul>
      <button
        type="button"
        disabled={!hasCheckout}
        aria-label={
          hasCheckout
            ? `Comprar IPTV ${plan.label} — Get Instant IPTV Access`
            : `Plano ${plan.label} em breve`
        }
        onClick={() => {
          if (!hasCheckout) return;
          window.location.href = checkoutUrl;
        }}
        className={`btn mt-8 w-full ${featured ? "btn-solid" : "btn-ghost"}`}
      >
        {ctaLabel}
      </button>
    </article>
  );
}
