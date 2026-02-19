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
          drag={!unlocked ? "x" : false}
          dragConstraints={trackRef}
          dragElastic={0}
          dragMomentum={false}
          onDragEnd={handleDragEnd}
        >
          {/* 🔒 Lock Icon (Animated Shackle) */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6"
            fill="currentColor"
          >
            {/* Lock Body */}
            <path d="M6 10h12v9a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-9z" />

            {/* Animated Shackle */}
            <motion.path
              d="M8 10V6a4 4 0 0 1 8 0v4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ originX: 0.5, originY: 1 }}
              animate={{
                rotate: unlocked ? -35 : 0,
                x: unlocked ? -1 : 0,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            />
          </motion.svg>
        </motion.div>
      </div>
    </div>
  )
}
