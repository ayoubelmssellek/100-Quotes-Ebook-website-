"use client";

import { useEffect, useState } from "react";
import CheckoutHeader from "@/components/CheckoutHeader";
import {
  isSafeHttpsUrl,
  isSafeReturnUrl,
  parseLocale,
  PAY_CONTEXT_KEY,
  PAY_EXITED_KEY,
  PENDING_PAY_URL_KEY,
  readPayContext,
  writePayContext,
  type PayContext,
  type PayLocale,
} from "@/lib/payment-handoff";
import { getReturnCopy } from "@/lib/return-copy";

const HOP_LOCK_KEY = "mh_hop_lock";

type Phase = "boot" | "cancel";

/**
 * Stable page under Stripe in history.
 *
 * IPTV never touches Stripe directly — only this shell does.
 * Query params `lang` + `prices` are stored in sessionStorage, then stripped
 * from the URL before assign(Stripe), so Stripe never sees the IPTV link.
 */
export default function PaymentReturnPage() {
  const [phase, setPhase] = useState<Phase>("boot");
  const [ctx, setCtx] = useState<PayContext | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("to") || "";
    const fromStore = sessionStorage.getItem(PENDING_PAY_URL_KEY) || "";
    const pending = fromQuery || fromStore;

    const lang = parseLocale(params.get("lang"));
    const pricesRaw = params.get("prices") || "";
    const pricesUrl = isSafeReturnUrl(pricesRaw) ? pricesRaw : "";

    // Fresh pay URL → save site context HERE (shell origin), strip query, open Stripe.
    // After Stripe, /return or /success still know lang/site via sessionStorage.
    if (pending && isSafeHttpsUrl(pending)) {
      sessionStorage.removeItem(PENDING_PAY_URL_KEY);
      sessionStorage.setItem(HOP_LOCK_KEY, "1");
      sessionStorage.setItem(PAY_EXITED_KEY, "1");

      const prev = readPayContext();
      writePayContext({
        lang: params.get("lang") ? lang : prev?.lang || lang,
        pricesUrl: pricesUrl || prev?.pricesUrl || "",
        payUrl: pending,
        order: params.get("order") || prev?.order,
        plan: params.get("plan") || prev?.plan,
        connections: params.get("connections") || prev?.connections,
        email: params.get("email") || prev?.email,
        name: params.get("name") || prev?.name,
      });

      // Clean URL before Stripe — no IPTV prices/lang in the address bar / Referer.
      window.history.replaceState({ mh: "return" }, "", "/return");
      window.location.assign(pending);
      return;
    }

    // Back from Stripe / refresh → cancel UI with stored locale + CTAs
    sessionStorage.removeItem(HOP_LOCK_KEY);
    const stored = readPayContext();
    setCtx(stored);
    setPhase("cancel");
    lockHistoryOnReturn();
  }, []);

  if (phase === "boot") {
    return (
      <main
        style={{ minHeight: "100vh", margin: 0, background: "#000" }}
        aria-busy
        aria-label="Redirecting to payment"
      />
    );
  }

  const lang: PayLocale = ctx?.lang || "en";
  const copy = getReturnCopy(lang);
  const canRetry = Boolean(ctx?.payUrl && isSafeHttpsUrl(ctx.payUrl));
  const canPrices = Boolean(ctx?.pricesUrl && isSafeReturnUrl(ctx.pricesUrl));

  function completePayment() {
    if (!ctx?.payUrl || !isSafeHttpsUrl(ctx.payUrl)) return;
    // Re-enter hop without putting IPTV URL in the address bar
    sessionStorage.setItem(PAY_EXITED_KEY, "1");
    sessionStorage.setItem(HOP_LOCK_KEY, "1");
    writePayContext(ctx);
    window.history.replaceState({ mh: "return" }, "", "/return");
    window.location.assign(ctx.payUrl);
  }

  function goToPrices() {
    if (!ctx?.pricesUrl || !isSafeReturnUrl(ctx.pricesUrl)) return;
    sessionStorage.removeItem(PAY_EXITED_KEY);
    sessionStorage.removeItem(HOP_LOCK_KEY);
    sessionStorage.removeItem(PAY_CONTEXT_KEY);
    window.location.assign(ctx.pricesUrl);
  }

  return (
    <div className="min-h-screen bg-black">
      <CheckoutHeader step={2} brand={copy.headerBrand} stepLabel={copy.headerStep} />

      <div className="mx-auto w-full max-w-lg px-4 py-12 sm:px-6">
        <h1 className="text-[28px] tracking-[-0.6px] text-white md:text-[32px]">{copy.title}</h1>
        <p className="mt-4 text-[15px] leading-[1.55] text-slate">{copy.body}</p>

        <div className="mt-8 flex flex-col gap-3">
          {canRetry ? (
            <button
              type="button"
              onClick={completePayment}
              className="btn btn-solid w-full justify-center py-3.5 text-[15px]"
            >
              {copy.completePayment}
            </button>
          ) : null}
          {canPrices ? (
            <button
              type="button"
              onClick={goToPrices}
              className="btn btn-ghost w-full justify-center py-3.5 text-[15px]"
            >
              {copy.backToPrices}
            </button>
          ) : null}
        </div>

        <div className="mt-8 rounded-[8px] border border-line bg-surface px-4 py-4 text-[14px] text-slate">
          <p className="font-medium text-white">{copy.needHelp}</p>
          <a
            href={`https://wa.me/212637573773?text=${encodeURIComponent(copy.whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center rounded-[4px] bg-[#25D366] py-3 text-[15px] font-semibold !text-white transition hover:bg-[#20BD5A] hover:!text-white"
          >
            {copy.whatsapp}
          </a>
        </div>

        <p className="mt-10 text-[12px] leading-[1.45] text-muted">{copy.footer}</p>
      </div>
    </div>
  );
}

function lockHistoryOnReturn() {
  window.history.pushState({ mh: "lock" }, "", "/return");
  const onPop = () => {
    window.history.pushState({ mh: "lock" }, "", "/return");
  };
  window.addEventListener("popstate", onPop);
}
