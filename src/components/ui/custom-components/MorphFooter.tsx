"use client"

import { motion } from "motion/react"
import { useState } from "react"
import { Textfit } from "react-textfit"

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
        animate={mode === "in" ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
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
    <div
      className="w-full text-center select-none"
      onMouseEnter={() => setState("second")}
      onMouseLeave={() => setState("first")}
    >
      <div className="relative w-full leading-none h-[1em]">

        {/* FIRST WORD */}
        <Textfit
          mode="single"
          max={400}
          className="flex justify-center font-bold tracking-tight w-full"
        >
          {state === "first"
            ? split(firstWord, "in")
            : split(firstWord, "out")}
        </Textfit>

        {/* SECOND WORD */}
        <div className="absolute inset-0 flex items-center justify-center translate-y-[0.95em] text-[clamp(1rem,4vw,2.5rem)] font-medium tracking-wide">
          {state === "second"
            ? split(secondWord, "in")
            : split(secondWord, "out")}
        </div>

      </div>
    </div>
  )
}