"use client";

import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export default function Buttonnn({
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  const base = "rounded-md font-medium transition-all active:scale-[0.98]";

  const variants = {
    default: "bg-white text-black hover:bg-neutral-200",
    outline: "border border-white/20 text-white hover:bg-white/10",
    ghost: "text-white hover:bg-white/10",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
