"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"

type AnimatedFooterProps = {
  firstWord: string
  secondWord: string
}

export default function AnimatedFooter({
  firstWord,
  secondWord,
}: AnimatedFooterProps) {
  const [state, setState] = useState<"first" | "second">("first")

  const split = (text: string, mode: "in" | "out") =>
    text.split("").map((char, i) => (
      <motion.span
        key={char + i}
        initial={false}
        animate={
          mode === "in"
            ? { y: 0, opacity: 1 }
            : { y: -20, opacity: 0 }
        }
        transition={{
          delay: i * 0.04,
          duration: 0.4,
          ease: "easeOut",
        }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))

  return (
    <div>
      <div
  className="w-full text-center select-none"
  onMouseEnter={() => setState("second")}
  onMouseLeave={() => setState("first")}
>
        <div className="relative w-full leading-none">

          {/* FIRST WORD */}
          <div className="flex justify-center text-8xl md:text-[10vw] font-bold tracking-tight">
            {state === "first"
              ? split(firstWord, "in")
              : split(firstWord, "out")}
          </div>

          {/* SECOND WORD */}
          <div className="absolute inset-0 flex items-center justify-center text-4xl md:text-[3vw] font-medium tracking-wide">
            {state === "second"
              ? split(secondWord, "in")
              : split(secondWord, "out")}
          </div>

        </div>
      </div>
    </div>
  )
}