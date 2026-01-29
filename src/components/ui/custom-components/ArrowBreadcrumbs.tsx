"use client"

import { motion } from "motion/react"

type BreadcrumbItem = {
  label: string
  href?: string
  active?: boolean
}

interface ArrowBreadcrumbsProps {
  items: BreadcrumbItem[]
  onItemClick?: (index: number) => void
}


const arrowClipPath =
  "polygon(0 0, 92% 0, 100% 50%, 92% 100%, 0 100%, 8% 50%)"

export default function ArrowBreadcrumbs({
  items,
  onItemClick,
}: ArrowBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-sm">
      <ol className="flex items-center">
        {items.map((item, idx) => {
          const isActive = item.active 

          return (
            <motion.li
              key={idx}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
              style={{
                clipPath: arrowClipPath,
                WebkitClipPath: arrowClipPath,
                zIndex: isActive ? 20 : 10,
              }}
              className={[
                "px-6 py-2 -ml-3 first:ml-0 cursor-pointer select-none",
                "transition-colors duration-200",
                isActive
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-[#F0F0F0] text-black hover:bg-neutral-300 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700",
              ].join(" ")}
              onClick={() => onItemClick?.(idx)}
            >
              <span>{item.label}</span>
            </motion.li>
          )
        })}
      </ol>
    </nav>
  )
}