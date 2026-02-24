"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"

export default function SplitHoverFooter() {
  const [state, setState] = useState<"first" | "second">("first")

  const firstWord = "CREATE"
  const secondWord = "WORK"

  const split = (text: string, mode: "in" | "out") =>
    text.split("").map((char, i) => (
      <motion.span
        key={char + i}
        initial={false}
        animate={
          mode === "in"
            ? { y: 0, opacity: 1 }
            : { y: -80, opacity: 0 }
        }
        transition={{
          delay: i * 0.04,
          duration: 0.45,
          ease: "easeInOut",
        }}
        className="inline-block"
      >
        {char}
      </motion.span>
    ))

  useEffect(() => {
    if (state === "second") {
      const timer = setTimeout(() => {
        setState("first")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [state])

  return (
    <footer className="bg-black text-white py-40 overflow-hidden">
      <div
        className="w-full text-center cursor-pointer select-none"
        onMouseEnter={() => setState("second")}
      >
        <div className="relative h-[1.2em]">

          {/* FIRST WORD (FULL WIDTH BIG) */}
          <div
            className={`absolute inset-0 flex justify-center text-8xl md:text-[10vw] font-bold tracking-tight`}
          >
            {state === "first"
              ? split(firstWord, "in")
              : split(firstWord, "out")}
          </div>

          {/* SECOND WORD (SMALLER WIDTH) */}
          <div
            className={`absolute inset-0 flex justify-center text-4xl md:text-[3vw] font-medium tracking-wide`}
          >
            {state === "second"
              ? split(secondWord, "in")
              : split(secondWord, "out")}
          </div>

        </div>
      </div>
    </footer>
  )
}