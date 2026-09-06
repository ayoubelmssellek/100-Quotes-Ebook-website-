"use client";

import { useState } from "react";
import { CheckoutButton } from "@/components/shared/checkout-button";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import type { ProductPriceOption } from "@/types/product";

type CurrencyCheckoutProps = {
  options: ProductPriceOption[];
  label?: string;
  className?: string;
};

export function CurrencyCheckout({
  options,
  label = "Pay now",
  className,
}: CurrencyCheckoutProps) {
  const [selectedCurrency, setSelectedCurrency] = useState(options[0]?.currency);
  const selected = options.find(
    (option) => option.currency === selectedCurrency,
  );

  if (!selected) return null;

  const hasMultipleCurrencies = options.length > 1;
  const checkoutAvailable = Boolean(selected.checkoutUrl);

  return (
    <div className={className}>
      {hasMultipleCurrencies ? (
        <fieldset className="mb-4">
          <legend className="mb-2 text-sm font-semibold text-[var(--ink)]">
            Choose your currency
          </legend>
          <div className="grid grid-cols-2 gap-2">
            {options.map((option) => (
              <Button
                key={option.currency}
                type="button"
                variant={
                  option.currency === selectedCurrency ? "primary" : "secondary"
                }
                size="sm"
                aria-pressed={option.currency === selectedCurrency}
                onClick={() => setSelectedCurrency(option.currency)}
              >
                {formatPrice(option.price, option.currency)}
              </Button>
            ))}
          </div>
        </fieldset>
      ) : null}

      {checkoutAvailable ? (
        <CheckoutButton href={selected.checkoutUrl!} className="w-full">
          {label} · {formatPrice(selected.price, selected.currency)}
        </CheckoutButton>
      ) : (
        <Button type="button" disabled className="w-full">
          {selected.currency} checkout unavailable
        </Button>
      )}
      {!checkoutAvailable ? (
        <p className="mt-3 text-center text-xs leading-relaxed text-[var(--steel)]">
          Payment in this currency is not available at the moment.
        </p>
      ) : null}
    </div>
  );
}