import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium transition-colors font-mono",
  {
    variants: {
      variant: {
        default: "border-border bg-surface-2 text-muted-foreground",
        blue: "border-accent-blue/30 bg-accent-blue/10 text-accent-blue-2",
        purple: "border-accent-purple/30 bg-accent-purple/10 text-accent-purple",
        cyan: "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan",
        success: "border-success/30 bg-success/10 text-success",
        outline: "border-border-strong bg-transparent text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
