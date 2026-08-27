import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-green)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-[var(--hairline)] disabled:text-[var(--muted)] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--primary)] text-[var(--on-primary)] hover:bg-[var(--primary-pressed)]",
        accent:
          "bg-[var(--brand-green)] text-[var(--primary)] hover:bg-[var(--brand-green-deep)]",
        dark: "bg-[var(--ink-deep)] text-[var(--on-dark)] hover:bg-black",
        secondary:
          "border border-[var(--hairline)] bg-transparent text-[var(--ink)] hover:bg-[var(--surface)]",
        "on-dark":
          "bg-[var(--on-dark)] text-[var(--primary)] hover:bg-white/90",
        "secondary-on-dark":
          "border border-white/25 bg-transparent text-[var(--on-dark)] hover:bg-white/10",
        ghost: "rounded-md bg-transparent text-[var(--ink)] hover:bg-[var(--surface)]",
        link: "h-auto rounded-none p-0 text-[var(--ink)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2.5 text-[14px]",
        sm: "h-9 px-4 text-[13px]",
        lg: "h-11 px-6 text-[14px]",
        icon: "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
