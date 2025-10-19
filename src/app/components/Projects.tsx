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
        <div className="w-3/5 bg-white border-x border-[#e5e5e5] max-[475px]:w-11/12">
            <h2 className="text-2xl px-4 font-semibold">Projects</h2>
            <Line/>
                
        <div className="grid md:grid-cols-2 gap-4 flex-wrap p-4 ">
        
      {projectsLinks.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          target="_blank"
          className="flex hover:underline hover:bg-[#F9F9F9] items-center justify-between border border-[#e5e5e5] p-4 transition"
        >
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold ">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.username}</p>
              </div>
              <ExternalLink className="text-gray-400" size={20} />
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
