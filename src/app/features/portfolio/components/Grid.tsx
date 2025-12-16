"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Line } from "./Line";

type GridItem = {
  slug: string;
  name: string;
  image?: string;
};

function useGridColumns() {
  const [cols, setCols] = React.useState(1);

  React.useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;

      // Match your Tailwind breakpoints / grid-cols:
      // base: 1 col
      // sm (≥640px): 2 cols
      // lg (≥1024px): 3 cols
      // xl (≥1280px): 3 cols (same as lg in your code)
      if (width >= 1024) {
        setCols(3); // lg & up
      } else if (width >= 640) {
        setCols(2); // sm
      } else {
        setCols(1); // base
      }
    };

    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  return cols;
}

export default function Grid({ items = [] }: { items?: GridItem[] }) {
  const cols = useGridColumns();

  return (
    <div
      className="h-full w-screen flex justify-center max-w-screen bg-lightbg 
      bg-[repeating-linear-gradient(45deg,var(--color-lightborder)_0_1px,transparent_1px_8px)]
       
      dark:bg-[repeating-linear-gradient(45deg,var(--color-darkborder)_0_1px,transparent_1px_8px)]"
    >
      <div className="w-11/12 lg:w-3/5 relative bg-white border-x border-border  dark:border-darkborder">

        {/* Background vertical grid lines – dynamically match column count */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div
            className="
              grid h-full gap-10
            "
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            }}
          >
            {Array.from({ length: cols }).map((_, i) => (
              <div
                key={i}
                className="border-x border-border  dark:border-darkborder"
              />
            ))}
          </div>
        </div>

        {/* Items */}
        <ul
          className="
            grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-10 
            lg:grid-cols-3 
            xl:grid-cols-3 
            relative z-20
          "
        >
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/components/${item.slug}`}
              className="hover:bg-hover transition block"
            >
              <Line />
              <div className="p-2">
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={400}
                    height={300}
                    className="rounded-md mb-2"
                  />
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
