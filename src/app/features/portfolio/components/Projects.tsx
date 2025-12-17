"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { RxCross2 } from "react-icons/rx";

import PulseRead from "../images/PulseRead.png";
import LinkStash from "../images/LinkStash.png";
import PortfolioSS from "../images/PortfolioSS.png";
import NexRead from "../images/NexRead.png";
import Button from "./Button";
import { Line } from "./Line";

/* ------------------------------------------------------------------ */
/* Data */
/* ------------------------------------------------------------------ */

const projectsLinks = [
  {
    name: "LinkStash",
    description: "Save and organize your links",
    image: LinkStash,
    alt: "LinkStash Preview",
    giturl: "https://github.com/PrathamTelang/LinkStash",
  },
  {
    name: "PulseRead",
    description: "Master speed reading, one pulse at a time.",
    image: PulseRead,
    alt: "PulseRead Preview",
    weburl: "https://pulseread.pages.dev/",
    giturl: "https://github.com/PrathamTelang/PulseRead",
  },
  {
    name: "NexRead",
    description: "AI Summaries & Insights Instantly",
    image: NexRead,
    alt: "NexRead Preview",
    weburl: "https://nex-read.vercel.app/",
    giturl: "https://github.com/PrathamTelang/NexRead",
  },
  {
    name: "Portfolio",
    description: "My personal portfolio website",
    image: PortfolioSS,
    alt: "Portfolio Preview",
    weburl: "https://prathamtelang-portfolio.vercel.app/",
    giturl: "https://github.com/PrathamTelang/Portfolio",
  }
];

/* ------------------------------------------------------------------ */
/* Hook: grid columns */
/* ------------------------------------------------------------------ */

function useGridColumns() {
  const [cols, setCols] = useState(1);

  useEffect(() => {
    const updateCols = () => {
      const width = window.innerWidth;
      if (width >= 1024) setCols(2);
      else if (width >= 640) setCols(2);
      else setCols(1);
    };

    updateCols();
    window.addEventListener("resize", updateCols);
    return () => window.removeEventListener("resize", updateCols);
  }, []);

  return cols;
}

/* ------------------------------------------------------------------ */
/* Page */
/* ------------------------------------------------------------------ */

export default function Projects() {
  const cols = useGridColumns();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openAt = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    <div
      className="w-screen flex justify-center bg-background
      bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)]"
    >
      <div className="w-11/12 lg:w-3/5 relative bg-background  border-border">

        {/* Section label */}
        <h2
          className="text-xs font-semibold text-[#00A6F4]
          transform -rotate-90 absolute sm:top-7 sm:-left-12
          sm:text-lg top-5 -left-8"
        >
          Projects
        </h2>

        {/* Background grid lines */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div
            className="grid h-full gap-10"
            style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
          >
            {Array.from({ length: cols }).map((_, i) => (
              <div key={i} className="border-x border-border" />
            ))}
          </div>
        </div>

        {/* Grid */}
        <ul
          className="
            grid grid-cols-1 sm:grid-cols-2
            gap-5 md:gap-10
            relative z-20
          "
        >
          {projectsLinks.map((item, idx) => (
            <li key={item.name}>
              <button
                onClick={() => openAt(idx)}
                className="
                  w-full text-left  cursor-pointer
                  hover:bg-[#F9F9F9] dark:hover:bg-[#10141E]
                  transition
                "
              >
                <Line />
                <div className="pt-2 pl-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-secondary-text">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="rounded-lg px-4 pb-4"
                  />
                </div>
                <Line />
              </button>
            </li>
          ))}
        </ul>

        {/* Modal */}
        {isOpen && selectedIndex !== null && (
          <ProjectModal
            items={projectsLinks}
            startIndex={selectedIndex}
            onClose={() => setIsOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Modal */
/* ------------------------------------------------------------------ */

type Project = {
  name: string;
  description: string;
  image: StaticImageData;
  alt: string;
  weburl?: string;
  giturl?: string;
};

function ProjectModal({
  items,
  startIndex,
  onClose,
}: {
  items: Project[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);

  useEffect(() => {
    setIndex(startIndex);
  }, [startIndex]);

  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={onClose}
    >
      <div
        className="bg-background border border-border rounded-lg
        p-4 w-11/12 max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-secondary-text">
              {item.description}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close"
            className="text-secondary-text"
          >
            <RxCross2 className="text-xl cursor-pointer" />
          </button>
        </div>

        <div className="mt-4">
          <Image
            src={item.image}
            alt={item.alt}
            className="rounded-lg w-full h-auto"
          />
        </div>

        <div className="pt-3 flex gap-4">
          <Button
            text="View Project"
            cursor={item.weburl ? "pointer" : "not-allowed"}
            onClick={() => item.weburl && window.open(item.weburl, "_blank")}
          />
          <Button
            text="View Code"
            cursor={item.giturl ? "pointer" : "not-allowed"}
            onClick={() => item.giturl && window.open(item.giturl, "_blank")}
          />
        </div>
      </div>
    </div>
  );
}
