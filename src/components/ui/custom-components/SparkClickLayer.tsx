"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GiLightningTrio } from "react-icons/gi";

type Spark = {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
};

export default function SparkClickLayer() {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY;

      const colors = ["#00E5FF", "#7DF9FF", "#FFFFFF", "#A2FFFF"];

      const newSpark: Spark = {
        id: Date.now(),
        x,
        y,
        rotation: Math.random() * 40 - 20, // a bit of random tilt
        color: colors[Math.floor(Math.random() * colors.length)],
      };

      setSparks((prev) => [...prev, newSpark]);

      setTimeout(() => {
        setSparks((prev) => prev.filter((s) => s.id !== newSpark.id));
      }, 500);
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {sparks.map((spark) => (
        <motion.span
          key={spark.id}
          style={{ left: spark.x, top: spark.y }}
          className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
          initial={{
            opacity: 0,
            scale: 0.3,
            y: 0,
          }}
          animate={{
            opacity: [0.8, 1, 0],
            scale: [0.3, 1.1, 0.8],
            y: [-5, -20], // slight upward drift
          }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <GiLightningTrio
            size={34}
            style={{
              color: spark.color,
              transform: `rotate(${spark.rotation}deg)`,
              filter: "drop-shadow(0 0 12px #00FFFF)",
            }}
          />
        </motion.span>
      ))}
    </div>
  );
}
