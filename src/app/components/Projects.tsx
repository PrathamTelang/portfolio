"use client";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

import motionProject from "./images/motionProject.png"
import Image from "next/image";
import { Line } from "./Line";

const projectsLinks = [
  {
    name: "LinkedIn",
    username: "Pratham Telang",
    image: motionProject,
    alt: "LinkedIn Preview",
    url: "https://www.linkedin.com/in/prathamtelang/",
  },
    {
    name: "LinkedInn",
    username: "Pratham Telang",
    image: motionProject,
    alt: "LinkedIn Preview",
    url: "https://www.linkedin.com/in/prathamtelang/",
  },
    {
    name: "LinkedInnn",
    username: "Pratham Telang",
    image: motionProject,
    alt: "LinkedIn Preview",
    url: "https://www.linkedin.com/in/prathamtelang/",
  },
    {
    name: "LinkedInnnn",
    username: "Pratham Telang",
    image: motionProject,
    alt: "LinkedIn Preview",
    url: "https://www.linkedin.com/in/prathamtelang/",
  }
];

export default function Projects() {
  return (
    
    <div className="w-screen flex justify-center ">
        <div className="w-3/5 bg-white dark:bg-darkbg border-x border-lightborder dark:border-darkborder max-[475px]:w-11/12">
            <h2 className="text-2xl px-4 font-semibold dark:text-darkprimary-text">Projects</h2>
            <Line/>
                
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
              <p className="text-sm text-secondary-text dark:text-darksecondary-text">{item.username}</p>
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
