"use client";
import { ExternalLink } from "lucide-react";
import type { StaticImageData } from 'next/image';

import PulseRead from "./images/PulseRead.png"
import LinkStash from "./images/LinkStash.png"
import PortfolioSS from "./images/PortfolioSS.png"
import Image from "next/image";
import { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";

const projectsLinks = [
  {
    name: "LinkStash",
    description: "Save and organize your links",
    image: LinkStash,
    alt: "LinkStash Preview",
    url: "https://github.com/PrathamTelang/LinkStash",
  },
    {
    name: "PulseRead",
    description: "Master speed reading, one pulse at a time.",
    image: PulseRead,
    alt: "PulseRead Preview",
    url: "https://github.com/PrathamTelang/PulseRead",
  },
  {
    name: "Portfolio",
    description: "My personal portfolio website",
    image: PortfolioSS,
    alt: "Portfolio Preview",
    url: "https://github.com/PrathamTelang/Portfolio",
  }
];

export default function Projects() {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  const openAt = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="w-screen flex justify-center ">
      <div className="w-3/5 relative bg-white dark:bg-darkbg border-x border-lightborder dark:border-darkborder max-[475px]:w-11/12">
        <h2 className="text-xs font-semibold text-[#00A6F4] 
           transform -rotate-90  absolute sm:top-7 sm:-left-12 sm:text-lg top-5 -left-8
        ">Projects</h2>

        <div className="grid md:grid-cols-2 gap-4 flex-wrap p-4 ">
          {projectsLinks.map((item, idx) => (
            <button
              key={item.name}
              onClick={() => openAt(idx)}
              className="text-left flex hover:underline hover:bg-[#F9F9F9] dark:hover:decoration-darkprimary-text dark:hover:bg-[#10141E] items-center justify-between border border-lightborder dark:border-darkborder p-4 transition w-full"
            >
              <div className="w-full cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold dark:text-darkprimary-text">{item.name}</h3>
                    <p className="text-sm text-secondary-text dark:text-darksecondary-text">{item.description}</p>
                  </div>
                  {/* External link opens in new tab without opening the modal */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                  </a>
                </div>
                <div className="w-full h-full pt-2"><Image src={item.image} alt={item.alt} className="rounded-lg" /></div>
              </div>
            </button>
          ))}
        </div>

        {/* Modal carousel */}
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


type Project = {
  name: string;
  description: string;
  image: StaticImageData;
  alt: string;
  url: string;
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
        className="bg-white dark:bg-darkbg border border-lightborder dark:border-darkborder rounded-lg p-4 w-11/12 max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold dark:text-darkprimary-text">{item.name}</h3>
            <p className="text-sm text-secondary-text dark:text-darksecondary-text">{item.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <a href={item.url} target="_blank" rel="noreferrer">
            </a>
            <button
              onClick={onClose}
              aria-label="Close"
              className="text-secondary-text dark:text-darksecondary-text cursor-pointer"
            >
              <RxCross2 className="text-xl" />
            </button>
          </div>
        </div>

        <div className="mt-4">
          <Image src={item.image} alt={item.alt} className="rounded-lg w-full h-auto" />
        </div>
      </div>
    </div>
  );
}
