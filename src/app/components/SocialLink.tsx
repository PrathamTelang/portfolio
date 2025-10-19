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
    icon: <FaGithubSquare className="dark:bg-white rounded-md" />,
    url: "https://github.com/PrathamTelang",
  },
  {
    name: "X (Formerly Twitter)",
    username: "@Prat_Telang",
    icon: <FaSquareXTwitter className="dark:bg-white rounded-md" />,
    url: "https://x.com/Prat_Telang",
  },
  {
    name: "Reddit",
    username: "MissionBasis7442",
    icon: <FaReddit className="text-[#FF4500] dark:bg-white rounded-full" />,
    url: "https://www.reddit.com/user/MissionBasis7442/",
  },
];

export default function SocialLinks() {
  return (
    
    <div className="w-screen flex justify-center ">
        <div className="w-3/5 bg-white dark:bg-darkbg border-x border-lightborder dark:border-darkborder max-[475px]:w-11/12">
            <h2 className="text-2xl px-4 font-semibold dark:text-darkprimary-text ">Social Links</h2>
            <Line/>
        <div className="grid md:grid-cols-2 gap-4 flex-wrap p-4 ">
        
      {socialLinks.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          target="_blank"
          className="flex hover:underline items-center justify-between border border-lightborder dark:border-darkborder p-4 transition"
        >
          <div className="flex items-center gap-3">
            <div className="text-5xl">{item.icon}</div>
            <div>
              <h3 className="font-semibold dark:text-darkprimary-text">{item.name}</h3>
              <p className="text-sm text-secondary-text dark:text-darksecondary-text">{item.username}</p>
            </div>
          </div>
          <ArrowUpRight className="text-secondary-text dark:text-darksecondary-text" size={18} />
        </Link>
      ))}
    </div>
        </div>
    </div>
  );
}
