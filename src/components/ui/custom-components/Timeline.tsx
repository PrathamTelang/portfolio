"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import { createPortal } from "react-dom";

export const timeline = [
  {
    title: "Mechanical Era",
    role: "Mechanical Tools",
    date: "Pre-1800s",
    description: "Early machines powered by human or animal force, laying the foundation for automation.",
    image: "/components/assets/a-brief-history-of-machine-tools.jpg",
  },
  {
    title: "Electronic Computing",
    role: "Vacuum Tubes",
    date: "1940s–1950s",
    description: "The first electronic computers used vacuum tubes to perform calculations at scale.",
    image: "/components/assets/vacuum-tube-computer-1940s.jpeg",
  },
  {
    title: "Microprocessor Age",
    role: "Integrated Circuits",
    date: "1970s",
    description: "Single-chip CPUs enabled smaller, faster, and more affordable computing devices.",
    image: "/components/assets/microprocessor-chip-1970s.avif",
  },
  {
    title: "Personal Computing",
    role: "Desktop PCs",
    date: "1980s",
    description: "Computers became accessible to individuals, transforming homes, offices, and productivity.",
    image: "/components/assets/personal-computer-1980s-desktop.webp",
  },
  {
    title: "Internet Era",
    role: "Early Web",
    date: "1990s",
    description: "The World Wide Web connected people globally and reshaped communication and information sharing.",
    image: "/components/assets/early-internet-web-browser-1990s.webp",
  },
  {
    title: "Mobile Computing",
    role: "Smartphones",
    date: "2007–2010s",
    description: "Powerful handheld devices merged computing, communication, and the internet into one platform.",
    image: "/components/assets/smartphone-evolution-timeline.webp",
  },
  {
    title: "Cloud Infrastructure",
    role: "Data Centers",
    date: "2010s",
    description: "Scalable cloud platforms replaced local servers with on-demand global infrastructure.",
    image: "/components/assets/cloud-computing-data-center.webp",
  },
  {
    title: "Artificial Intelligence",
    role: "Machine Learning",
    date: "2020s–Future",
    description: "Algorithms capable of learning and reasoning now drive automation, insights, and new products.",
    image: "/components/assets/artificial-intelligence-neural-network-illustration.png",
  },
];


export default function Timeline() {
  const [active, setActive] = useState<{
    rect: DOMRect;
    image: string;
    title: string;
  } | null>(null);

  const [roleTooltip, setRoleTooltip] = useState<{
  rect: DOMRect;
  text: string;
} | null>(null);


  return (
    <section className="relative mx-auto ml-10">
      {/* vertical line */}
      <div className="absolute top-0 h-full w-px bg-[#27272A] -translate-x-1/2" />

      <div className="space-y-48">
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative flex"
          >
            {/* dot */}
            <span className="absolute top-2 h-2 w-2 rounded-full bg-black dark:bg-[#FAFAFA] -translate-x-1/2 hover:scale-150 transition-transform duration-200" />

            <div className="ml-4">
              <time className="text-sm text-[#A1A1AA]">{item.date}</time>

              <motion.h3
                className="mt-1 text-md font-semibold text-black dark:text-[#FAFAFA] cursor-pointer "
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
  className="text-sm text-gray-700 dark:text-[#A1A1AA] cursor-help inline-block"
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

      {typeof window !== "undefined" &&
        active &&
        createPortal(
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
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

        {typeof window !== "undefined" &&
  roleTooltip &&
  createPortal(
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        style={{
          position: "fixed",
          left: roleTooltip.rect.left + roleTooltip.rect.width / 2,
          top: roleTooltip.rect.bottom + 8,
          transform: "translateX(-50%)",
        }}
        className="
          z-50
          max-w-xs
          rounded-md
          border border-border
          bg-background
          px-3
          py-2
          text-xs
          text-gray-800
          dark:text-[#E4E4E7]
          shadow-lg
          pointer-events-none
        "
      >
        {roleTooltip.text}
      </motion.div>
    </AnimatePresence>,
    document.body
  )}

    </section>
  );
}
