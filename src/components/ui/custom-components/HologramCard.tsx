"use client";

import React, { useRef } from "react";

export default function HologramCard({
  children = "Hologram Card",
}: {
  children?: React.ReactNode;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMove(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

    cardRef.current!.style.transform = `rotateX(${-y}deg) rotateY(${x}deg)`;
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={() => (cardRef.current!.style.transform = "rotateX(0deg) rotateY(0deg)")}
      className="
      relative w-80 h-44 rounded-3xl p-6
      bg-gradient-to-br from-[#4D00FF] via-[#00E8FF] to-[#00FF88]
      text-white font-semibold tracking-wide
      shadow-[0_0_40px_#00e1ff80] transition-transform
      "
    >
      {children}
      <div className="absolute inset-0 bg-[url('/scan-lines.png')] mix-blend-overlay opacity-40" />
    </div>
  );
}
