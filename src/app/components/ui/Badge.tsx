import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning";
}

export default function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-white",
    success: "bg-green-500/20 text-green-300",
    warning: "bg-yellow-500/20 text-yellow-300",
  };

  return (
    <span
      className={cn(
        "px-3 py-1 rounded-full text-sm font-medium",
        variants[variant],
        className
      )}
      {...props}
    />
  );
}
