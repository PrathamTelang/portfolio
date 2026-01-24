// components/Timeline.tsx
"use client";

import { motion } from "motion/react";

// data/timeline.ts
export const timeline = [
  {
    title: "Started Programming",
    role: "JavaScript & HTML",
    date: "2022",
    description: "Built my first websites and learned core web fundamentals.",
  },
  {
    title: "Frontend Intern",
    role: "React / Tailwind",
    date: "2023",
    description: "Worked on production UI and improved performance & UX.",
  },
  {
    title: "Design Engineer",
    role: "Next.js / Motion",
    date: "2024",
    description: "Focused on animations, systems, and premium interactions.",
  },
  {
    title: "Fullstack Developer",
    role: "Node.js / Databases",
    date: "2025",
    description: "Building scalable web applications and APIs.",
  },
  {
    title: "Tech Lead",
    role: "Project Management",
    date: "2026",
    description: "Leading teams and managing projects for successful delivery.",
  },
];

export default function Timeline() {
  return (
    <section className="relative ml-10 mx-auto">
      {/* vertical line */}
      <div className="absolute top-0 h-full w-px bg-[#27272A] -translate-x-1/2" />

      <div className="space-y-48">
        {timeline.map((item) => {
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex"
            >
              {/* dot */}
              <span className="absolute top-2 h-3 w-3 rounded-full bg-[#FAFAFA] -translate-x-1/2" />

              {/* card */}
              <div className="ml-4">
                <time className="text-sm text-[#A1A1AA] hover:text-[#D4D4D8] transition-colors">
                  {item.date}
                </time>

                <h3 className="mt-1 text-md font-semibold text-[#FAFAFA]">
                  {item.title}
                </h3>

                <p className="text-sm text-[#A1A1AA]">
                  {item.role}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
