import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-border bg-elevated text-muted-foreground",
        primary: "border-primary/30 bg-primary/10 text-primary",
        cyan: "border-accent-cyan/30 bg-accent-cyan/10 text-accent-cyan",
        violet: "border-accent-violet/30 bg-accent-violet/10 text-accent-violet",
        success: "border-success/30 bg-success/10 text-success",
        outline: "border-border bg-transparent text-muted-foreground",
      },
      size: {
        sm: "px-2.5 py-0.5",
        md: "px-3 py-1",
      },
    },
    defaultVariants: { variant: "default", size: "sm" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, size, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props} />
  );
}
