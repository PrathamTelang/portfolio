'use client';

import { motion } from 'motion/react';
import { JSX, useState } from 'react';

export default function OfferButton(): JSX.Element {
  const [hovered, setHovered] = useState(false);
  const [pressed, setPressed] = useState(false);

  return (
    <div className="relative flex items-center justify-center">
      {/* TOP DRAWER */}
      <motion.div
        initial={{ opacity: 0, y: 0, filter: 'blur(2px)' }}
        animate={
          hovered
            ? { opacity: 1, y: -24, rotate: 4, filter: 'blur(0px)' }
            : { opacity: 0, y: 0, filter: 'blur(2px)' }
        }
        transition={{ duration: 0.25 }}
        className="absolute px-4 py-1 rounded-xl text-sm font-semibold
                   bg-[#d8ff7c] text-black"
      >
        expires in...
      </motion.div>

      {/* BOTTOM DRAWER */}
      <motion.div
        initial={{ opacity: 0, y: 0, filter: 'blur(2px)' }}
        animate={
          hovered
            ? { opacity: 1, y: 24, rotate: 4, filter: 'blur(0px)' }
            : { opacity: 0, y: 0, filter: 'blur(2px)' }
        }
        transition={{ duration: 0.25 }}
        className="absolute px-4 py-1 rounded-xl text-sm font-semibold
                   bg-[#d8ff7c] text-black"
      >
        ...8 hours
      </motion.div>

      {/* BUTTON */}
      <motion.button
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => {
          setHovered(false);
          setPressed(false);
        }}
        onMouseDown={() => setPressed(true)}
        onMouseUp={() => setPressed(false)}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: hovered ? 1.05 : 1,
          boxShadow: hovered
            ? '0 16px 16px rgba(0,0,0,0.15)'
            : '0 8px 8px rgba(0,0,0,0.08)',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="relative min-w-[160px] min-h-[48px]
                   rounded-2xl px-6 py-2
                   bg-[#d8ff7c]
                   shadow-inner
                   font-semibold"
      >
        <motion.span
          animate={{
            scale: hovered ? 1.05 : 1,
            filter: hovered
              ? 'drop-shadow(0 6px 2px rgba(0,0,0,0.25))'
              : 'drop-shadow(0 1px 0 rgba(255,255,255,0.4))',
          }}
          transition={{ duration: 0.25 }}
          className="block text-lg
                     bg-gradient-to-b from-gray-700 to-black
                     bg-clip-text text-transparent"
        >
          Get Offer
        </motion.span>

        {/* CORNERS */}
        {[0, 1, 2, 3].map((i) => (
          <motion.svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1 1 32 32"
            className="absolute w-8 stroke-black/20 fill-none"
            animate={{
              x:
                hovered || pressed
                  ? [ -36, 36, 36, -36 ][i]
                  : [ -24, 24, 24, -24 ][i],
              y:
                hovered || pressed
                  ? [ -36, -36, 36, 36 ][i]
                  : [ -24, -24, 24, 24 ][i],
              rotate: [90, 180, -90, 0][i],
            }}
            transition={{ duration: 0.25 }}
            style={{
              top: i < 2 ? 0 : 'auto',
              bottom: i >= 2 ? 0 : 'auto',
              left: i === 0 || i === 3 ? 0 : 'auto',
              right: i === 1 || i === 2 ? 0 : 'auto',
            }}
          >
            <path d="M32,32C14.355,32,0,17.645,0,0h.985c0,17.102,13.913,31.015,31.015,31.015v.985Z" />
          </motion.svg>
        ))}
      </motion.button>
    </div>
  );
}
