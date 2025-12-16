"use client";

import { easeInOut, motion } from "motion/react";

export default function NewtonCradleLoader() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      {/* Frame */}
      <div
        className="
          flex h-15 w-32 justify-center rounded-t-2xl
          border-t border-x
          border-slate-800
          dark:border-gray-400
        "
      >
        <Pendulum type="right" />
        <Pendulum type="toggle" delay={0.02} />
        <Pendulum type="toggle" delay={0.04} />
        <Pendulum type="toggle" delay={0.06} />
        <Pendulum type="left" />
      </div>

      {/* Base */}
      <div
        className="
          h-1 w-40 rounded-2xl
          bg-slate-900
          dark:bg-gray-500
        "
      />
    </div>
  );
}

type PendulumProps = {
  type?: "left" | "right" | "toggle";
  delay?: number;
};

const Pendulum = ({ type, delay = 0 }: PendulumProps) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      animate={
        type === "left"
          ? { rotate: [-40, 0, 0], scaleY: [1, 0.98, 1] }
          : type === "right"
          ? { rotate: [0, 0, 40], scaleY: [1, 0.98, 1] }
          : type === "toggle"
          ? { rotate: [-1, 0, 1], scaleY: [1, 0.985, 1] }
          : {}
      }
      transition={{
        duration: 0.65,
        times: type === "toggle" ? [0, 0.5, 1] : [0, 0.1, 1],
        repeat: Infinity,
        repeatType: "mirror",
        ease: easeInOut,
        delay,
      }}
      style={{ transformOrigin: "top center" }}
    >
      <String />
      <Ball />
    </motion.div>
  );
};

const String = () => (
  <div
    className="
      h-8 w-[0.5px]
      bg-slate-800
      dark:bg-gray-400
    "
  />
);

const Ball = () => (
  <motion.div
    className="
      relative h-3 w-3 rounded-full overflow-hidden
      bg-slate-800
      dark:bg-gray-600
    "
    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    style={{
      backgroundImage: `
        radial-gradient(
          circle at 28% 28%,
          rgba(255,255,255,0.55),
          rgba(255,255,255,0.25) 18%,
          rgba(255,255,255,0.08) 35%,
          transparent 60%
        )
      `,
    }}
  >
    {/* specular highlight */}
    <div
      className="
        absolute top-[18%] left-[18%]
        h-1 w-1 rounded-full
        bg-background/70 blur-[0.5px]
      "
    />

    {/* subtle edge definition */}
    <div
      className="
        absolute inset-0 rounded-full
        shadow-[inset_-1px_-1px_2px_rgba(0,0,0,0.35)]
      "
    />
  </motion.div>
);

