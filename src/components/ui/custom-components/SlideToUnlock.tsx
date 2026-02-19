"use client"

import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "motion/react"
import { useRef, useState } from "react"

export default function SlideToUnlock() {
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  const [unlocked, setUnlocked] = useState(false)
  const handleWidth = 56

  const textOpacity = useTransform(x, [0, handleWidth], [1, 0])

  function handleDragEnd() {
    const trackWidth = trackRef.current?.offsetWidth || 0
    const maxX = trackWidth - handleWidth
    const current = x.get()

    if (current > maxX * 0.9) {
      animate(x, maxX, { type: "spring", bounce: 0 })
      setUnlocked(true)
    } else {
      animate(x, 0, { type: "spring", bounce: 0 })
    }
  }

  return (
    <div className="w-64 rounded-full bg-zinc-100 p-1 shadow-inner ring ring-black/5 ring-inset dark:bg-zinc-900 dark:ring-white/10">
      <div
        ref={trackRef}
        className="relative flex h-12 items-center justify-center overflow-hidden"
      >
        {/* Text */}
        <motion.div
          className="text-sm font-medium text-zinc-600 dark:text-zinc-300"
          style={{ opacity: textOpacity }}
        >
          Slide to unlock
        </motion.div>

        {/* Handle */}
        <motion.div
  className="
    absolute left-0 top-1/2 -translate-y-1/2
    h-12 w-12 rounded-full bg-white
    flex items-center justify-center
    cursor-grab active:cursor-grabbing
    shadow-md text-zinc-500
  "
  style={{ x }}
  drag="x"
  dragConstraints={trackRef}
  dragElastic={0}
  dragMomentum={false}
  onDragEnd={handleDragEnd}
>
  {/* 🔒 Lock Icon */}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  className="w-6 h-6"
  fill="currentColor"
>
  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  <path
    d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm0 4a3 3 0 0 1 2.995 2.824l.005 .176v1a2 2 0 0 1 1.995 1.85l.005 .15v3a2 2 0 0 1 -1.85 1.995l-.15 .005h-6a2 2 0 0 1 -1.995 -1.85l-.005 -.15v-3a2 2 0 0 1 1.85 -1.995l.15 -.005v-1a3 3 0 0 1 3 -3zm3 6h-6v3h6v-3zm-3 -4a1 1 0 0 0 -.993 .883l-.007 .117v1h2v-1a1 1 0 0 0 -1 -1z"
  />
</svg>
</motion.div>
      </div>
    </div>
  )
}
