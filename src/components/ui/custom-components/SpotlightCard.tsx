"use client";

import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/shadcn/avatar"
import { FaArrowRight, FaRegLightbulb } from "react-icons/fa6";
import { CiLock } from "react-icons/ci";
import { AiFillClockCircle } from "react-icons/ai";

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

    const rotateX = -(y - rect.height / 2) / 18;
    const rotateY = (x - rect.width / 2) / 18;

    card.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-6px)
    `;
  }

  function handleMouseLeave() {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = `
      rotateX(0deg)
      rotateY(0deg)
      translateY(0)
    `;
  }

  return (
    <div className="w-full flex justify-center perspective-[900px]">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={cn(
          "relative w-64 h-80 rounded-2xl overflow-hidden",
          "border border-white/20 bg-background/10 backdrop-blur-xl",
          "shadow-xl transition-transform duration-200 ease-out",
          "dark:bg-neutral-900/50 dark:border-neutral-700/40",
          "will-change-transform",
          className
        )}
        style={{
          background: `
            radial-gradient(
              circle at var(--x, 50%) var(--y, 50%),
              rgba(255,255,255,0.15),
              rgba(255,255,255,0) 60%
            )
          `,
        }}
        {...props}
      >
        <div className="relative h-full p-6 flex flex-col transform-gpu">
          {/* icon grid */}
          <div className="flex gap-2 translate-z-6 animate-pulse">
            {[<FaRegLightbulb />, <CiLock />, <AiFillClockCircle />].map((icon, i) => (
              <span
                key={i}
                className="w-8 h-8 flex items-center justify-center
                rounded-lg border border-white/20 text-sm
                bg-white/5"
              >
                {icon}
              </span>
            ))}
          </div>

          {/* title + description */}
          <div className="mt-6 translate-z-8">
            <h2 className="text-2xl font-semibold text-white">
              {title}
            </h2>
            <p className="mt-2 text-sm text-neutral-300 dark:text-neutral-400">
              {description}
            </p>
          </div>

          {/* progress bar */}
          <div className="mt-6 translate-z-4">
            <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
              <div className="h-full w-2/3 bg-white/40 rounded-full" />
            </div>
            <span className="mt-1 block text-xs text-white/50">
              Progress 67%
            </span>
          </div>

          {/* footer */}
          <div className="mt-auto flex items-center justify-between translate-z-6">
            {/* stacked avatars */}
            <div className="flex -space-x-2">
               <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
            </div>

            {/* CTA */}
            <button className="relative text-sm text-white/80 group cursor-pointer flex justify-center items-center gap-1">
              Explore<FaArrowRight />
              <span
                className="absolute left-0 -bottom-0.5 h-px w-0
                bg-white/60 transition-all duration-300
                group-hover:w-full"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
