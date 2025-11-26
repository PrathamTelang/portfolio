import * as React from "react";
import { cn } from "@/lib/utils"; // if you don’t have this, I can give it to you.

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-neutral-200 bg-white shadow-sm transition-all",
        "dark:bg-neutral-900 dark:border-neutral-800",
        className
      )}
      {...props}
    />
  );
}

/* ---------- Header ---------- */
export function CardHeader({ className, ...props }: CardProps) {
  return (
    <div
      className={cn("p-6 pb-3 flex flex-col space-y-1", className)}
      {...props}
    />
  );
}

/* ---------- Title ---------- */
export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl font-semibold leading-tight tracking-tight",
        className
      )}
      {...props}
    />
  );
}

/* ---------- Description ---------- */
export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)}
      {...props}
    />
  );
}

/* ---------- Content ---------- */
export function CardContent({ className, ...props }: CardProps) {
  return (
    <div className={cn("p-6 pt-0", className)} {...props} />
  );
}

/* ---------- Footer ---------- */
export function CardFooter({ className, ...props }: CardProps) {
  return (
    <div className={cn("flex items-center p-6 pt-0", className)} {...props} />
  );
}

export default Card;
