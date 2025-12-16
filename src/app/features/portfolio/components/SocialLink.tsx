"use client";
import { FaLinkedin, FaGithub, FaXTwitter, FaYoutube, FaReddit, FaSquareXTwitter , } from "react-icons/fa6";
import { SiZalo, SiDailydotdev } from "react-icons/si"; // ✅ Corrected here
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { Line } from "./Line";


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
];

export default function SocialLinks() {
  return (
    
    <div className="w-screen flex justify-center bg-background bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)]
         dark:bg-[repeating-linear-gradient(45deg,var(--color-darkborder)_0_1px,transparent_1px_8px)]">
        <div className="w-11/12 lg:w-3/5 relative bg-background  border-x border-border  ">
            <h2 className="text-xs font-semibold text-[#F6D743] 
           transform -rotate-90  absolute sm:top-11 sm:-left-16.5 sm:text-lg top-7.5 -left-10.5
        ">Social Links</h2>
        <div className="grid md:grid-cols-2 gap-4 flex-wrap p-4 ">
        
      {socialLinks.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          target="_blank"
          className="flex hover:underline items-center justify-between border border-border  p-4 transition"
        >
          <div className="flex items-center gap-3">
            <div className="text-5xl">{item.icon}</div>
            <div>
              <h3 className="font-semibold ">{item.name}</h3>
              <p className="text-sm text-secondary-text ">{item.username}</p>
            </div>
          </div>
          <ArrowUpRight className="text-secondary-text " size={18} />
        </Link>
      ))}
    </div>
        </div>
    </div>
  );
}
