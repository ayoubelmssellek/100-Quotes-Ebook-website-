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
 * Starts checkout without keeping pricing in browser history.
 * location.replace prevents Back from returning to the previous section.
 */
export function CheckoutButton({
  href,
  children,
  variant = "primary",
  size = "lg",
  className,
}: CheckoutButtonProps) {
  const isExternalCheckout =
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("/api/checkout");

  if (!isExternalCheckout || href.startsWith("mailto:")) {
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
        window.location.replace(href);
      }}
    >
      {children}
    </Button>
  );
}
