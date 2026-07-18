import Link from "next/link";

export default function CheckoutHeader({ step }: { step: 1 | 2 }) {
  return (
    <header className="border-b border-line bg-black">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-5 sm:px-6">
        <Link href="/" className="text-[16px] font-semibold text-white">
          PortugalIPTV
          <span className="mt-0.5 block text-[11px] font-normal uppercase tracking-[0.35px] text-slate">
            Premium provider
          </span>
        </Link>

        <div className="flex items-center gap-3 text-[14px]">
          <div className={`flex items-center gap-2 ${step === 1 ? "text-white" : "text-slate"}`}>
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${
                step === 1 ? "border-white bg-white text-black" : "border-line"
              }`}
            >
              1
            </span>
            <span className="hidden sm:inline">Checkout</span>
          </div>
          <span className="h-px w-10 bg-line" />
          <div className={`flex items-center gap-2 ${step === 2 ? "text-white" : "text-slate"}`}>
            <span
              className={`flex h-6 w-6 items-center justify-center rounded-full border text-[11px] ${
                step === 2 ? "border-white bg-white text-black" : "border-line"
              }`}
            >
              2
            </span>
            <span className="hidden sm:inline">Payment</span>
          </div>
        </div>
      </div>
    </header>
  );
}
