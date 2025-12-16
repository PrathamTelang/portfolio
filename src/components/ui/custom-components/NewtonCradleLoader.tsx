"use client";

import { easeInOut, motion } from "motion/react";

export default function NewtonCradleLoader() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="border-t border-x border-foreground rounded-t-2xl h-15 w-32 flex justify-center">
        <Pendulum type="right" />
        <Pendulum type="toggle" />
        <Pendulum type="toggle" />
        <Pendulum type="toggle" />
        <Pendulum type="left" />
      </div>

      <div className="w-40 bg-foreground h-1 rounded-2xl" />
    </div>
  );
}

type PendulumProps = {
  type?: "left" | "right" | "toggle";
};

const Pendulum = ({ type }: PendulumProps) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      animate={
        type === "left"
          ? {
              rotate: [-40, 0, 0],
            }
          : type === "right"
          ? {
              rotate: [0, 0, 40],
            }
            : type === "toggle"
          ? {
              rotate: [-1, 0, 1],
            }
          : {}
      }
      transition={
        type === "left"
          ? {
              duration: 0.65,
              times: [0, 0.1, 1], // pause at impact
              repeat: Infinity,
              repeatType: "mirror",
              ease: easeInOut,
            }
          : type === "right"
          ? {
              duration: 0.65,
              delay: 0,
              times: [0, 0.1, 1], // pause before swing
              repeat: Infinity,
              repeatType: "mirror",
              ease: easeInOut,
            }
            : type === "toggle"
          ? {
              duration: 0.65,
              delay: 0,
              repeat: Infinity,
              repeatType: "mirror",
              ease: easeInOut,
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
