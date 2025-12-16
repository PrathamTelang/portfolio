"use client";

import { easeInOut, motion } from "motion/react";

export default function NewtonCradleLoader() {
  return (
    <div
      className="flex flex-col items-center justify-center"
      role="status"
      aria-label="Loading"
    >
      <div className="border-t border-x border-foreground rounded-t-2xl h-15 w-32 flex justify-center">
        <Pendulum type="right" />
        <Pendulum type="toggle" delay={0.02} />
        <Pendulum type="toggle" delay={0.04} />
        <Pendulum type="toggle" delay={0.06} />
        <Pendulum type="left" />
      </div>

      <div className="w-40 bg-foreground h-1 rounded-2xl" />
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
          ? {
              rotate: [-40, 0, 0],
              scaleY: [1, 0.98, 1],
            }
          : type === "right"
          ? {
              rotate: [0, 0, 40],
              scaleY: [1, 0.98, 1],
            }
          : type === "toggle"
          ? {
              rotate: [-1, 0, 1],
              scaleY: [1, 0.985, 1],
            }
          : {}
      }
      transition={
        type === "left" || type === "right"
          ? {
              duration: 0.65,
              times: [0, 0.1, 1],
              repeat: Infinity,
              repeatType: "mirror",
              ease: easeInOut,
              delay,
            }
          : type === "toggle"
          ? {
              duration: 0.65,
              times: [0, 0.5, 1],
              repeat: Infinity,
              repeatType: "mirror",
              ease: easeInOut,
              delay,
            }
          : {}
      }
      style={{ transformOrigin: "top center" }}
    >
      <String />
      <Ball />
    </motion.div>
  );
};

const Ball = () => (
  <div className="bg-foreground rounded-full h-3 w-3" />
);

const String = () => (
  <div className="bg-foreground h-8 w-[0.5px]" />
);
