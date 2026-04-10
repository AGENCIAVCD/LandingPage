import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-brand-primary text-white shadow-[0_18px_45px_rgba(255,119,0,0.25)] hover:-translate-y-0.5 hover:bg-[#f26e00]",
        secondary:
          "border-border-soft bg-white text-foreground hover:-translate-y-0.5 hover:border-brand-primary/30 hover:bg-surface",
        ghost:
          "border-transparent bg-transparent text-foreground hover:bg-brand-primary/[0.08]",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-11 px-5",
        lg: "h-[3.25rem] px-6 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  },
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
