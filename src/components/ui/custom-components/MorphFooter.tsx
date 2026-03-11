"use client"

import { motion } from "motion/react"
import { useState, useEffect } from "react"

export default function AnimatedFooter() {
  const [state, setState] = useState<"first" | "second">("first")

  const firstWord = "DESIGNING"
  const secondWord = "SINCE 2025"

  const split = (text: string, mode: "in" | "out") =>
    text.split("").map((char, i) => (
      <motion.span
        key={char + i}
        initial={false}
        animate={mode === "in" ? { y: "0em" } : { y: "-1em" }}
        transition={{
          delay: i * 0.04,
          duration: 0.45,
          ease: "easeOut",
        }}
        className="inline-block"
      >
        {char === " " ? "\u00A0" : char}
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
    <footer className="border-t border-border pt-10">

      {/* Normal footer content */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 text-sm">

          <div>
            <h3 className="font-semibold mb-4">About</h3>
            <p className="text-muted-foreground">
              Independent design engineer building interactive UI components.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>GitHub</li>
              <li>LinkedIn</li>
              <li>Twitter</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p className="text-muted-foreground">
              prathamtelang007@gmail.com
            </p>
          </div>

        </div>
      </div>

      {/* Animated bottom section */}
      <div
        className="w-full text-center select-none"
        onMouseEnter={() => setState("second")}
      >
        <div className="relative w-full leading-none overflow-hidden">

          {/* Invisible element to preserve height */}
          <div className="invisible text-8xl md:text-[10vw] font-bold tracking-tight">
            {firstWord}
          </div>

          {/* FIRST WORD */}
          <div className="absolute inset-0 flex justify-center text-8xl md:text-[10vw] font-bold tracking-tight">
            {state === "first"
              ? split(firstWord, "in")
              : split(firstWord, "out")}
          </div>

          {/* SECOND WORD */}
          <div className="absolute inset-0 flex justify-center text-4xl md:text-[3vw] font-medium tracking-wide">
            {state === "second"
              ? split(secondWord, "in")
              : split(secondWord, "out")}
          </div>

        </div>
      </div>

    </footer>
  )
}