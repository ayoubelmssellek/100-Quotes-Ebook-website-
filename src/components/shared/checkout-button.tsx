"use client";

import type { ComponentProps } from "react";
import { Button } from "@/components/ui/button";

type CheckoutButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ComponentProps<typeof Button>["variant"];
  size?: ComponentProps<typeof Button>["size"];
  className?: string;
};

/**
 * Starts checkout without leaving the plans page in browser history.
 * location.replace prevents Back from returning to the previous section.
 */
export function CheckoutButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
}: CheckoutButtonProps) {
  const isCheckout =
    href.startsWith("/api/checkout") ||
    href.includes("buy.polar.sh") ||
    href.includes("polar.sh/checkout");

  if (!isCheckout) {
    return (
      <Button asChild variant={variant} size={size} className={className}>
        <a href={href}>{children}</a>
      </Button>
    );
  }

  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      className={className}
      onClick={() => {
        // Replace current history entry so Back skips plans/pricing.
        window.location.replace(href);
      }}
    >
      {children}
    </Button>
  );
}
