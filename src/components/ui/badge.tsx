import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex rounded-[7px] items-center px-[7px] w-fit break-word whitespace-normal",
  {
    variants: {
      variant: {
        default: "bg-primary text-black",
        white: "bg-white text-black",
      },
      size: {
        default: "h-11.5 lg:h-[51px]",
        sm: "h-[23px] lg:h-6.5",
        lg: "h-[33px] lg:h-9.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Badge({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant, size, className }))}
      {...props}
    />
  );
}
export { Badge, badgeVariants };
