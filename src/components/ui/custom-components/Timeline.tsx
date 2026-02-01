"use client"

import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import { useState } from "react"
import { createPortal } from "react-dom"

export type TimelineItem = {
  title: string
  role: string
  date: string
  description: string
  image: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  const [active, setActive] = useState<{
    rect: DOMRect
    image: string
    title: string
  } | null>(null)

  const [roleTooltip, setRoleTooltip] = useState<{
    rect: DOMRect
    text: string
  } | null>(null)

  return (
    <section className="relative mx-auto ml-10">
      {/* vertical line */}
      <div className="absolute top-0 h-full w-px bg-[#27272A] -translate-x-1/2" />

      <div className="space-y-48">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex"
          >
            <span className="absolute top-2 h-2 w-2 rounded-full bg-black dark:bg-[#FAFAFA] -translate-x-1/2" />

            <div className="ml-4">
              <time className="text-sm text-[#A1A1AA]">{item.date}</time>

              <motion.h3
                className="mt-1 text-md font-semibold cursor-pointer"
                onMouseEnter={(e) =>
                  setActive({
                    rect: e.currentTarget.getBoundingClientRect(),
                    image: item.image,
                    title: item.title,
                  })
                }
                onMouseLeave={() => setActive(null)}
              >
                {item.title}
              </motion.h3>

              <p
                className="text-sm text-[#A1A1AA] cursor-help inline-block"
                onMouseEnter={(e) =>
                  setRoleTooltip({
                    rect: e.currentTarget.getBoundingClientRect(),
                    text: item.description,
                  })
                }
                onMouseLeave={() => setRoleTooltip(null)}
              >
                {item.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Image preview */}
      {typeof window !== "undefined" &&
        active &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2 }}
              style={{
                position: "fixed",
                left: active.rect.left + active.rect.width / 2,
                top: active.rect.top - 120,
                transform: "translateX(-50%)",
              }}
              className="z-50 pointer-events-none"
            >
              <Image
                src={active.image}
                alt={active.title}
                width={240}
                height={140}
                className="rounded-md object-cover"
                unoptimized
              />
            </motion.div>
          </AnimatePresence>,
          document.body
        )}

      {/* Role tooltip */}
      {typeof window !== "undefined" &&
        roleTooltip &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.15 }}
              style={{
                position: "fixed",
                left: roleTooltip.rect.left + roleTooltip.rect.width / 2,
                top: roleTooltip.rect.bottom + 8,
                transform: "translateX(-50%)",
              }}
              className="z-50 max-w-xs rounded-md border bg-background px-3 py-2 text-xs shadow-lg pointer-events-none"
            >
              {roleTooltip.text}
            </motion.div>
          </AnimatePresence>,
          document.body
        )}
    </section>
  )
}
