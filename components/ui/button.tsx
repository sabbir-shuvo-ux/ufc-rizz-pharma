import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "text-[rgba(31,31,31,1)] capitalize rounded-[50px] cursor-pointer text-base shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] border-2 border-solid border-transparent linear_gradient hover:bg-gold-dark",

        outline:
          "border-white border border-solid rounded-[50px] text-white capitalize text-base shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)]",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        initial: "hover:scale-105 cursor-pointer",
        link: "text-[rgba(250,248,242,1)] text-base shadow-[0px_2px_10px_0px_rgba(0,0,0,0.25)] items-center",
      },
      size: {
        default: "h-9 px-4 py-3 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "w-fit h-fit [&_svg:not([class*='size-'])]:size-[24px]",
        link: "h-fit w-fit [&_svg:not([class*='size-'])]:size-[24px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
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
