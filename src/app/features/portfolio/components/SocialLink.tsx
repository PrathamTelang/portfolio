"use client";
import { FaLinkedin, FaGithub, FaXTwitter, FaYoutube, FaReddit, FaSquareXTwitter , } from "react-icons/fa6";
import { SiZalo, SiDailydotdev } from "react-icons/si"; // ✅ Corrected here
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { Line } from "./Line";
import Grid from "./Grid";
import Image from "next/image";
import React from "react";
import { BentoGrid } from "./BentoGrid";
import { BentoItem } from "./BentoItem";


const socialLinks = [
  {
    name: "LinkedIn",
    username: "Pratham Telang",
    icon: <FaLinkedin className="text-[#0A66C2]" />,
    url: "https://www.linkedin.com/in/prathamtelang/",
  },
  {
    name: "GitHub",
    username: "PrathamTelang",
    icon: <FaGithubSquare className="rounded-md" />,
    url: "https://github.com/PrathamTelang",
  },
  {
    name: "X",
    username: "@Prat_Telang",
    icon: <FaSquareXTwitter className=" rounded-md" />,
    url: "https://x.com/Prat_Telang",
  },
  {
    name: "Reddit",
    username: "MissionBasis7442",
    icon: <FaReddit className="text-[#FF4500] dark:bg-background rounded-full" />,
    url: "https://www.reddit.com/user/MissionBasis7442/",
  },
  {
    name: "YouTube",
    username: "Pratham Telang",
    icon: <FaYoutube className="text-[#FF0000] rounded-md" />,
    url: "https://www.youtube.com/@prathamtelang",
  },
  {
    name: "Daily.dev",
    username: "Pratham Telang",
    icon: <SiDailydotdev className="text-[#000000] dark:text-white rounded-md" />,
    url: "https://daily.dev/prathamtelang",
  }
];

export default function SocialLinks() {
  return (
    
    <div className="w-screen flex justify-center bg-background bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)] edge-fade-x
         ">
        <div className="w-11/12 lg:w-3/5 relative bg-background  border-x border-border  ">
            <h2 className="text-xs font-serif italic text-[#F6D743] 
           transform -rotate-90  absolute sm:top-6.5 sm:-left-11.5 sm:text-lg top-4 -left-7
        ">Social Links</h2>
        
          <BentoGrid>
  {socialLinks.map((link, index) => (
    <BentoItem
      key={link.name}
      name={link.name}
      username={link.username}
      icon={link.icon}
      url={link.url}
      className={
            index === 0
          ? "md:row-span-1"
          : index === 1
          ? "md:col-span-1"
          : index === 2
          ? "md:col-span-2"
          : index === 3
          ? "md:col-span-1"
          : index === 4
          ? "md:col-span-2"
          : index === 5
          ? "md:col-span-1"
          : "md:col-span-2"

      }
    />
  ))}
</BentoGrid>
        
        </div>
    </div>
  );
}

type GridItem = {
  name: string;
  username: string;
  icon: React.ReactNode;
  url: string;
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
        setCols(2); // lg & up
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

export function GridForSocialLinks({ items = [] }: { items?: GridItem[] }) {
  const cols = useGridColumns();

  return (
      <div className=" relative bg-background border-x border-border  ">

        {/* Background vertical grid lines – dynamically match column count */}
        <div className="pointer-events-none absolute inset-0 z-10">
          <div
            className="
              grid h-full gap-9
            "
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
            }}
          >
            {Array.from({ length: cols }).map((_, i) => (
              <div
                key={i}
                className="border-x border-border  "
              />
            ))}
          </div>
        </div>

        {/* Items */}
        <ul
          className="
            grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-9 
            lg:grid-cols-2 
            xl:grid-cols-2 
            relative z-20
          "
        >
          {items.map((item) => (
            <Link
              href={item.url}
              className="hover:bg-hover transition block"
            >
              <Line />
              <div className="flex justify-between px-4 py-1">
                <div className="flex flex-col justify-center ">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-neutral-400">{item.username}</p>
              </div>
              <div className="text-5xl flex items-center">
                {item.icon}
              </div>
              </div>
              <Line />
            </Link>
          ))}
        </ul>
      </div>
  );
}

