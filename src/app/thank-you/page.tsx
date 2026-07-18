"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useMemo } from "react";
import CheckoutHeader from "@/components/CheckoutHeader";
import { site } from "@/data/content";
import { formatMoney, resolvePlan } from "@/data/plans";

function ThankYouContent() {
  const params = useSearchParams();
  const order = params.get("order") || "4453";
  const plan = useMemo(
    () => resolvePlan(params.get("plan"), params.get("connections")),
    [params],
  );
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen bg-black">
      <CheckoutHeader step={2} />

      <div className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6">
        <h1 className="text-center text-[36px] tracking-[-0.9px] text-white md:text-[48px]">
          Thank you for Your Order !
        </h1>

        <div className="mt-10 rounded-[8px] bg-white p-6 text-[#111] sm:p-8">
          <h2 className="text-[18px] font-semibold text-black sm:text-[20px]">
            To complete the payment please follow these steps:
          </h2>
          <p className="mt-3 font-semibold">Order: #{order}</p>
          <ol className="mt-4 list-decimal space-y-3 pl-5 text-[14px] leading-[1.45] text-[#404040] sm:text-[16px]">
            <li>
              Press the <strong>WhatsApp button below</strong> to message us (we&apos;re available 24/7).
            </li>
            <li>
              We&apos;ll reply with a <strong>secure payment link</strong>.
            </li>
            <li>Complete the payment.</li>
            <li>
              <strong>Activation:</strong> Our agent will get back to you instantly to deliver the account details and
              guide you through the installation process!
            </li>
          </ol>
          <Link
            href={`https://wa.me/${site.whatsappIntl}?text=${encodeURIComponent(
              `Hi StreamNova, I placed order #${order} for ${plan.productName} (${formatMoney(plan.price)}).`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex w-full items-center justify-center rounded-[4px] bg-black py-3.5 text-[14px] font-semibold text-white transition hover:opacity-90"
          >
            Start Chat on WhatsApp
          </Link>
        </div>

        <div className="mt-4 rounded-[8px] bg-white p-6 text-[#111] sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-0">
            <div className="sm:pr-6">
              <p className="font-semibold">Order Date:</p>
              <p className="mt-1 text-[14px] text-black/55">{today}</p>
            </div>
            <div className="border-t border-dashed border-black/15 pt-6 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <p className="font-semibold">Payment method:</p>
              <p className="mt-1 text-[14px] text-black/55">Credit/Debit Cards</p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden rounded-[8px] border border-black/15">
            <div className="border-b border-black/10 px-4 py-3 font-semibold">Order #{order}</div>
            <div className="flex items-center justify-between gap-4 border-b border-black/10 px-4 py-3 text-[14px]">
              <span>{plan.productName} x 1</span>
              <span>{formatMoney(plan.price)}</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-b border-black/10 px-4 py-3 text-[14px]">
              <span>Subtotal:</span>
              <span>{formatMoney(plan.price)}</span>
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-3 text-[14px] font-semibold">
              <span>Total:</span>
              <span>{formatMoney(plan.price)}</span>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-[13px] text-muted">
          Demo page — no real payment.{" "}
          <Link href="/" className="underline hover:text-white">
            Return home
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-black text-slate">Loading…</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
