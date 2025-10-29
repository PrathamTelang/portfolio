"use client";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

import PulseRead from "./images/PulseRead.png"
import LinkStash from "./images/LinkStash.png"
import Image from "next/image";

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
  }
];

export default function Projects() {
  return (
    
    <div className="w-screen flex justify-center ">
        <div className="w-3/5 relative bg-white dark:bg-darkbg border-x border-lightborder dark:border-darkborder max-[475px]:w-11/12">
            <h2 className="text-xs font-semibold text-[#00A6F4] 
           transform -rotate-90  absolute sm:top-7 sm:-left-12 sm:text-lg top-5 -left-8
        ">Projects</h2>
                
        <div className="grid md:grid-cols-2 gap-4 flex-wrap p-4 ">
        
      {projectsLinks.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          target="_blank"
          className="flex hover:underline hover:bg-[#F9F9F9] dark:hover:decoration-darkprimary-text dark:hover:bg-[#10141E] items-center justify-between border border-lightborder dark:border-darkborder p-4 transition"
        >
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold dark:text-darkprimary-text">{item.name}</h3>
              <p className="text-sm text-secondary-text dark:text-darksecondary-text">{item.description}</p>
              </div>
              <ExternalLink className="text-secondary-text dark:text-darksecondary-text" size={20} />
            </div>
            <div className="w-full h-full pt-2"><Image src={item.image} alt={item.alt} className="rounded-lg hover:" /></div>
          </div>
        </Link>
      ))}
    </div>
        </div>
    </div>
  );
}
