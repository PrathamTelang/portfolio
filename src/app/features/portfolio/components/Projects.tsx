"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import PulseRead from "../images/og-pulseread.png";
import LinkStash from "../images/og-linkstash.png";
import PortfolioSS from "../images/og-portfolio.png";
import NexRead from "../images/og-nexread.png";
import Button from "./Button";
import { Line } from "./Line";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiGithubLine } from "react-icons/ri";


const projectsLinks = [
  {
    name: "LinkStash",
    description: "One central place to save, organize, and access all your important links effortlessly.",
    image: LinkStash,
    alt: "LinkStash Preview",
    giturl: "https://github.com/PrathamTelang/LinkStash",
  },
  {
    name: "PulseRead",
    description: "Speed-reading app that flashes words from any PDF or book at adjustable WPM.",
    image: PulseRead,
    alt: "PulseRead Preview",
    weburl: "https://pulse-read.vercel.app/",
    giturl: "https://github.com/PrathamTelang/PulseRead",
  },
  {
    name: "NexRead",
    description: "AI tool that provides insights, short & long summaries, with audio support.",
    image: NexRead,
    alt: "NexRead Preview",
    weburl: "https://nex-read.vercel.app/",
    giturl: "https://github.com/PrathamTelang/NexRead",
  },
  {
    name: "Portfolio",
    description: "Personal website showcasing projects with clean UI and smooth motion.",
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

  return (
    <div
      className="w-screen flex justify-center bg-background
      bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)] edge-fade-x"
    >
      <div className="w-11/12 lg:w-3/5 relative bg-background  border-border">

        {/* Section label */}
        <h2
          className="text-xs font-serif italic text-[#00A6F4]
          transform -rotate-90 absolute sm:top-3 sm:-left-8
          sm:text-lg top-2 -left-5"
        >
          Projects
        </h2>

        {/* Background grid lines */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div
            className="grid h-full gap-9"
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
            gap-5 md:gap-9
            relative z-20
          "
        >
          {projectsLinks.map((item) => (
            <li key={item.name}>
              <button
                className="
                  w-full text-left
                  hover:bg-hover
                  transition
                "
              >
                <Line />
                

                <div className="">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    className="py-2 px-4 border-b border-border "
                  />
                  
                  <div className=" mt-2 py-2 px-4 border-t border-border">
                    
                  <div className="flex justify-between items-center mb-2 ">
                    <h3 className="text-2xl font-serif italic">{item.name}</h3>
                  <div className="flex justify-center items-center gap-2">
                    <Button
                    text={<RiGithubLine />}
                    fontSize="25px"
                    variant="primary"
                    cursor={item.giturl ? "pointer" : "not-allowed"}
                    
                    onClick={() => item.giturl && window.open(item.giturl, "_blank")}
                  />
                    <Button
                    text={<MdOutlineArrowOutward />}
                    fontSize="25px"
                    variant="secondary"
                    cursor={item.weburl ? "pointer" : "not-allowed"}
                    onClick={() => item.weburl && window.open(item.weburl, "_blank")}
                  />
                  
                  </div>
                  </div>
                  <p className="text-sm text-secondary-text">
                    {item.description}
                  </p>
                  
                </div>
                  
                </div>
                <Line />
              </button>
            </li>
          ))}
        </ul>

        
      </div>
    </div>
  );
}
