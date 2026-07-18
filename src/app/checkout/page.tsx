"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, Suspense, useMemo, useState } from "react";
import { Check, CreditCard, Crosshair, Lock, ShieldCheck } from "lucide-react";
import CheckoutHeader from "@/components/CheckoutHeader";
import { checkoutBenefits, formatMoney, resolvePlan } from "@/data/plans";

function CheckoutForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [couponOpen, setCouponOpen] = useState(false);
  const plan = useMemo(
    () => resolvePlan(params.get("plan"), params.get("connections")),
    [params],
  );

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const orderId = String(4000 + Math.floor(Math.random() * 5000));
    const q = new URLSearchParams({
      order: orderId,
      plan: plan.id,
      connections: String(plan.connections),
      email: String(form.get("email") || ""),
      name: String(form.get("firstName") || ""),
    });
    router.push(`/thank-you?${q.toString()}`);
  }

  const field =
    "mt-2 w-full rounded-[4px] border border-line bg-transparent px-4 py-3 text-[16px] text-white outline-none focus:border-white/50";

  return (
    <div className="min-h-screen bg-black">
      <CheckoutHeader step={1} />

      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-14">
        <form onSubmit={onSubmit} className="space-y-10">
          <section>
            <h2 className="text-[24px] text-white">Customer information</h2>
            <label className="mt-5 block text-[14px] text-slate">
              Email Address <span className="text-white">*</span>
              <input required type="email" name="email" className={field} placeholder="you@email.com" />
            </label>
          </section>

          <section>
            <h2 className="text-[24px] text-white">Billing details</h2>
            <div className="mt-5 space-y-4">
              <label className="block text-[14px] text-slate">
                First name <span className="text-white">*</span>
                <input required name="firstName" className={field} />
              </label>
              <label className="block text-[14px] text-slate">
                Country / Region <span className="text-white">*</span>
                <select
                  required
                  name="country"
                  defaultValue="United States"
                  className={`${field} bg-black`}
                >
                  {["United States", "Canada", "United Kingdom", "Morocco", "France", "Germany", "Other"].map(
                    (c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ),
                  )}
                </select>
              </label>
              <label className="block text-[14px] text-slate">
                WhatsApp Number for Fast Support <span className="text-mid">(optional)</span>
                <input name="whatsapp" className={field} placeholder="0673897450" />
              </label>
            </div>
          </section>

          <section>
            <h2 className="text-[24px] text-white">Your order</h2>
            <div className="mt-5 overflow-hidden rounded-[8px] bg-white text-[#111]">
              <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-black/10 px-5 py-4 text-[14px] font-semibold">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-black/10 px-5 py-4 text-[14px]">
                <span>
                  {plan.productName} x 1
                  <span className="mt-1 block text-[12px] text-black/50">
                    {plan.connections} connection{plan.connections > 1 ? "s" : ""}
                  </span>
                </span>
                <span>{formatMoney(plan.price)}</span>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-black/10 px-5 py-3 text-[14px]">
                <span>Subtotal</span>
                <span>{formatMoney(plan.price)}</span>
              </div>
              <div className="grid grid-cols-[1fr_auto] gap-4 px-5 py-4 text-[16px] font-semibold">
                <span>Total</span>
                <span>{formatMoney(plan.price)}</span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setCouponOpen((v) => !v)}
              className="mt-3 text-[14px] text-slate underline hover:text-white"
            >
              Have a coupon?
            </button>
            {couponOpen && (
              <div className="mt-3 flex gap-2">
                <input name="coupon" placeholder="Coupon code" className={`${field} mt-0 flex-1`} />
                <button type="button" className="btn btn-ghost">
                  Apply
                </button>
              </div>
            )}
          </section>

          <section>
            <h2 className="text-[24px] text-white">Payment</h2>
            <div className="mt-5 rounded-[8px] border border-line p-4">
              <label className="flex cursor-pointer items-center justify-between gap-3">
                <span className="flex items-center gap-3 text-[14px] font-semibold text-white">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-white bg-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-black" />
                  </span>
                  Credit/Debit Cards
                </span>
                <span className="flex flex-wrap gap-1.5 text-[10px] font-semibold uppercase tracking-[0.35px] text-muted">
                  {["Visa", "MC", "Amex", "Disc"].map((c) => (
                    <span key={c} className="rounded-[4px] bg-white px-1.5 py-0.5 text-[#111]">
                      {c}
                    </span>
                  ))}
                </span>
              </label>
              <p className="mt-4 text-[14px] leading-[1.45] text-slate">
                Pay securely with any major credit or debit card, Apple Pay, or Google Pay, and get your account
                details delivered instantly via WhatsApp/Email.
              </p>
            </div>
          </section>

          <button type="submit" className="btn btn-solid w-full py-4">
            <Lock size={14} />
            Place Order {formatMoney(plan.price)}
          </button>
          <p className="text-center text-[13px] text-muted">
            Demo checkout only — no real payment.{" "}
            <Link href="/" className="underline hover:text-white">
              Back to home
            </Link>
          </p>
        </form>

        <aside className="space-y-10 lg:pt-1">
          <div>
            <h2 className="text-[24px] text-white">What you&apos;ll get</h2>
            <p className="mt-3 text-[14px] leading-[1.45] text-slate">
              High-quality streaming with live channels, sports & PPV, plus a massive VOD library.
            </p>
            <ul className="mt-5 space-y-2.5">
              {checkoutBenefits.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[14px] text-slate">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-[24px] text-white">Purchase with confidence</h2>
            <div className="mt-4 border border-line bg-surface p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[8px] border border-line text-center text-[10px] font-semibold uppercase leading-tight text-white">
                  7 Days
                  <br />
                  Money
                  <br />
                  Back
                </div>
                <div>
                  <p className="font-semibold text-white">7-days money back guarantee!</p>
                  <p className="mt-2 text-[14px] leading-[1.45] text-slate">
                    If you&apos;re not satisfied within 7 days, request a refund — demo policy copy.
                  </p>
                </div>
              </div>
            </div>
            <ul className="mt-5 space-y-3 text-[14px] text-slate">
              <li className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-white" /> SSL secured checkout
              </li>
              <li className="flex items-center gap-3">
                <Crosshair size={16} className="text-white" /> 24/7 support available
              </li>
              <li className="flex items-center gap-3">
                <CreditCard size={16} className="text-white" /> Multiple Payment options
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center bg-black text-slate">Loading checkout…</div>}>
      <CheckoutForm />
    </Suspense>
  );
}
