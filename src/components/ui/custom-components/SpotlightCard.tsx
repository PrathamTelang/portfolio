"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
}

export default function SpotlightCard({
  title,
  description,
  className,
  ...props
}: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent) {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/20 bg-background/10 p-8 shadow-xl backdrop-blur-xl transition-transform duration-300",
        "hover:scale-[1.02] hover:rotate-[1deg] hover:-translate-y-1",
        "dark:bg-neutral-900/50 dark:border-neutral-700/40",
        className
      )}
      style={{
        background: `
          radial-gradient(circle at var(--x, 50%) var(--y, 50%), 
          rgba(255,255,255,0.15), 
          rgba(255,255,255,0) 60%)
        `,
      }}
      {...props}
    >
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-2 text-neutral-300 dark:text-neutral-400">{description}</p>
    </div>
  );
}
