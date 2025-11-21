"use client";

import React from "react";
import Link from "next/link";
import { Line } from "./Line";

export default function Grid({ items = [] }: { items?: { slug: string; name: string }[] }) {
  return (
      <div
        className="h-full w-screen flex justify-center max-w-screen bg-[#FCFCFC] 
        bg-[repeating-linear-gradient(45deg,var(--color-lightborder)_0_1px,transparent_1px_8px)]
        dark:bg-darkbg 
        dark:bg-[repeating-linear-gradient(45deg,var(--color-darkborder)_0_1px,transparent_1px_8px)]"
      >
        <div className="relative w-3/5 isolate bg-lightbg dark:bg-darkbg border-x">
          {/* Background grid lines */}
          <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-10 max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
            <div className="border-r border-gray-950/5 dark:border-white/10"></div>
            <div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div>
            <div className="border-l border-gray-950/5 max-lg:hidden xl:border-x dark:border-white/10"></div>
            <div className="border-l border-gray-950/5 max-xl:hidden dark:border-white/10"></div>
          </div>

          {/* Items */}
          <ul className="grid grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 xl:grid-cols-4 relative z-20">
            {items.map((item) => (
              <Link
                key={item.slug}
                href={`/components/${item.slug}`}
                className="hover:bg-neutral-900 transition block"
              >
                <Line />
                <div className="p-2">
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-neutral-400">View component →</p>
                </div>
                <Line />
              </Link>
            ))}
          </ul>
        </div>
      </div>
  );
}
