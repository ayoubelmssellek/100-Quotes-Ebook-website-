import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CheckoutButton } from "@/components/shared/checkout-button";
import { getConsultationPlans } from "@/features/consultations/data/plans";
import { formatPrice } from "@/lib/utils";
import { SUPPORT_MAILTO } from "@/lib/site";

export function ConsultationSection() {
  const plans = getConsultationPlans();

  if (plans.length === 0) return null;

  return (
    <section
      id="consultation"
      className="scroll-mt-24 bg-[var(--canvas)] py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[1px] text-[var(--steel)]">
            Consultation
          </p>
          <h2 className="text-balance text-[36px] font-semibold leading-tight tracking-[-0.5px] text-[var(--ink)] md:text-[48px]">
            Personal guidance subscriptions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--slate)]">
            Choose a consultation package that fits your timeline — from 1 month
            to a full year.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => {
            const checkoutHref = plan.polarProductId
              ? `/api/checkout?products=${encodeURIComponent(plan.polarProductId)}&type=consultation&plan=${encodeURIComponent(plan.id)}`
              : SUPPORT_MAILTO;

            return (
              <article
                key={plan.id}
                className={`flex flex-col rounded-lg p-6 ${
                  plan.featured
                    ? "border-2 border-[var(--primary)] bg-[var(--surface)]"
                    : "border border-[var(--hairline)] bg-[var(--canvas)]"
                }`}
              >
                {plan.featured ? (
                  <span className="mb-4 inline-flex w-fit rounded-full bg-[var(--primary)] px-2.5 py-1 text-[13px] font-semibold text-white">
                    Most Popular
                  </span>
                ) : (
                  <span className="mb-4 inline-flex h-[26px]" aria-hidden />
                )}

                <h3 className="text-[22px] font-semibold text-[var(--ink)]">
                  {plan.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--slate)]">
                  {plan.description}
                </p>

                <div className="mt-5 flex items-end gap-1">
                  <p className="text-4xl font-semibold tracking-tight text-[var(--ink)]">
                    {formatPrice(plan.price, plan.currency)}
                  </p>
                  <p className="mb-1 text-sm text-[var(--steel)]">
                    /{plan.intervalLabel}
                  </p>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[var(--charcoal)]"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--semantic-success)]"
                        aria-hidden
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <CheckoutButton
                  href={checkoutHref}
                  size="lg"
                  className="mt-8 w-full"
                  variant={plan.featured ? "primary" : "secondary"}
                >
                  {plan.ctaLabel}
                </CheckoutButton>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-[var(--steel)]">
          Need a custom plan? Email{" "}
          <a
            href={SUPPORT_MAILTO}
            className="font-medium text-[var(--link-blue)] hover:underline"
          >
            support@mindandhearthub.shop
          </a>
        </p>
      </div>
    </section>
  );
}
