"use client";

import React from "react";
import Link from "next/link";
import { Line } from "./Line";
import Image from "next/image";

export default function Grid({
  items = [],
}: {
  items?: { slug: string; name: string; image?: string }[];
}) {
  return (
    <div
      className="h-full w-screen flex justify-center max-w-screen bg-lightbg 
      bg-[repeating-linear-gradient(45deg,var(--color-lightborder)_0_1px,transparent_1px_8px)]
      dark:bg-darkbg 
      dark:bg-[repeating-linear-gradient(45deg,var(--color-darkborder)_0_1px,transparent_1px_8px)]"
    >
      <div className="w-3/5  relative bg-white border-x border-lightborder dark:bg-darkbg dark:border-darkborder  max-[475px]:w-11/12">

        {/* Background grid lines (auto-match the XL column count) */}
        <div
          className="
            pointer-events-none absolute inset-0 z-10 
            grid grid-cols-2 max-md:gap-5 gap-10 
            lg:grid-cols-3 
            xl:grid-cols-3
          "
        >
          {/* 3 columns → 3 vertical separators */}
          <div className="border-r border-lborder-lightborder dark:border-darkborder"></div>
          <div className="border-r border-l border-lightborder dark:border-darkborder"></div>
          <div className="border-l border-lightborder dark:border-darkborder"></div>
        </div>

        {/* Items */}
        <ul
          className="
            grid grid-cols-2 gap-5 md:gap-10 
            lg:grid-cols-3 
            xl:grid-cols-3 
            relative z-20
          "
        >
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/components/${item.slug}`}
              className="hover:bg-[#0D111B] transition block"
            >
              <Line />
              <div className="p-2">
                {item.image ? (
                    <Image src={item.image} alt={item.name}
                    width={400} height={300} className="rounded-md mb-2"/>
                ) : null}
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-neutral-400">View component →</p>
              </div>
              <Line />
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
