"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useMemo, useState } from "react";
import CheckoutHeader from "@/components/CheckoutHeader";
import { formatMoney, resolvePlan } from "@/data/plans";
import { parseLocale, readPayContext } from "@/lib/payment-handoff";
import {
  buildReceiptWhatsAppMessage,
  getSuccessCopy,
} from "@/lib/success-copy";

function SuccessContent() {
  const params = useSearchParams();
  const [ready, setReady] = useState(false);

  // After Stripe: query may only have paid=1. Site/lang/order live in sessionStorage
  // (saved on /return before Stripe opened — same tab, payment-shell origin).
  const stored = useMemo(() => {
    if (typeof window === "undefined") return null;
    return readPayContext();
  }, []);

  const order = params.get("order") || stored?.order || "";
  const name = params.get("name") || stored?.name || "";
  const email = params.get("email") || stored?.email || "";
  const paid = params.get("paid") === "1" || Boolean(stored?.payUrl);
  const planId = params.get("plan") || stored?.plan || null;
  const connections = params.get("connections") || stored?.connections || null;
  // Real post-pay/success only — bare /success with no Stripe return or stored order → /return.
  const hasRealOrder = Boolean(
    order || planId || email || stored?.payUrl || params.get("paid") === "1",
  );

  useEffect(() => {
    if (!hasRealOrder) {
      window.location.replace("/return");
      return;
    }
    setReady(true);
  }, [hasRealOrder]);

  const plan = useMemo(() => resolvePlan(planId, connections), [planId, connections]);

  const lang = useMemo(() => {
    if (params.get("lang")) return parseLocale(params.get("lang"));
    return stored?.lang || parseLocale(null);
  }, [params, stored]);

  const copy = getSuccessCopy(lang);
  const priceLabel = formatMoney(plan.price);

  const waHref = useMemo(() => {
    const text = buildReceiptWhatsAppMessage(lang, {
      order: order || "—",
      planName: plan.productName,
      priceLabel,
      connections: plan.connections,
      name,
      email,
      paid,
    });
    return `https://wa.me/212637573773?text=${encodeURIComponent(text)}`;
  }, [lang, order, plan.productName, plan.connections, priceLabel, name, email, paid]);

  if (!ready) {
    return (
      <main
        style={{ minHeight: "100vh", margin: 0, background: "#000" }}
        aria-busy
        aria-label={copy.loading}
      />
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <CheckoutHeader step={2} brand={copy.headerBrand} stepLabel={copy.headerStep} />

      <div className="mx-auto w-full max-w-lg px-4 py-8 sm:px-6">
        <h1 className="text-[28px] tracking-[-0.6px] text-white md:text-[32px]">
          {paid ? copy.titlePaid : copy.titleOrder}
        </h1>
        <p className="mt-3 text-[14px] leading-[1.5] text-slate">
          {paid ? copy.bodyPaid : copy.bodyOrder}
        </p>

        <div className="mt-6 rounded-[8px] border border-line bg-surface px-4 py-4">
          <p className="text-[13px] text-muted">
            {copy.orderLabel} #{order || "—"}
          </p>
          <p className="mt-1 text-[16px] font-medium text-white">{plan.productName}</p>
          <p className="mt-1 text-[18px] font-semibold text-white">{priceLabel}</p>
          {name ? (
            <p className="mt-2 text-[12px] text-muted">
              {copy.nameLabel}: <span className="text-slate">{name}</span>
            </p>
          ) : null}
          {email ? (
            <p className="mt-1 truncate text-[12px] text-muted">
              {copy.emailLabel}: <span className="text-slate">{email}</span>
            </p>
          ) : null}
        </div>

        <div className="mt-8 rounded-[8px] border border-line px-4 py-4 text-[14px] text-slate">
          <p className="font-medium text-white">{copy.receiptTitle}</p>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex w-full items-center justify-center rounded-[4px] bg-[#25D366] py-3 text-[15px] font-semibold text-white transition hover:bg-[#20BD5A]"
          >
            {copy.sendReceipt}
          </a>
        </div>

        <p className="mt-10 text-[12px] text-muted">{copy.footer}</p>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-black text-slate">
          …
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
