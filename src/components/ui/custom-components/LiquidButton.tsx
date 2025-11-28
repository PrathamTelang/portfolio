"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function LiquidButton({
  children = "Liquid Button",
}: {
  children?: React.ReactNode;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const transformX = useTransform(x, [-100, 100], [-10, 10]);
  const transformY = useTransform(y, [-100, 100], [-10, 10]);

  function handleMove(e: React.MouseEvent) {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMove}
      style={{ x: transformX, y: transformY }}
      className="
        relative px-10 py-4 text-lg font-semibold text-white
        rounded-2xl overflow-hidden
        bg-gradient-to-br from-purple-500 to-cyan-400
        shadow-[0_0_25px_rgba(0,200,255,0.5)]
      "
    >
      <motion.div
        className="absolute inset-0 rounded-2xl bg-white/20 blur-2xl"
        style={{ x, y }}
      />
      {children}
    </motion.button>
  );
}
