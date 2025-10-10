"use client";
import { FaLinkedin, FaGithub, FaXTwitter, FaYoutube, FaReddit , } from "react-icons/fa6";
import { SiZalo, SiDailydotdev } from "react-icons/si"; // ✅ Corrected here
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


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
    icon: <FaGithub />,
    url: "https://github.com/PrathamTelang",
  },
  {
    name: "X (Formerly Twitter)",
    username: "@Prat_Telang",
    icon: <FaXTwitter />,
    url: "https://x.com/Prat_Telang",
  },
  {
    name: "Reddit",
    username: "PrathamTelang",
    icon: <FaReddit className="text-[#FF4500]" />,
    url: "https://www.reddit.com/user/PrathamTelang",
  },
];

export default function SocialLinks() {
  return (
    
    <div className="w-screen flex justify-center ">
        <div className="w-3/5 border border-[#E5E5E5] max-[475px]:w-screen">
            <h2 className="text-2xl px-4 font-semibold">Social Links</h2>
                
        <div className="grid md:grid-cols-2 gap-4">
        
      {socialLinks.map((item) => (
        <Link
          key={item.name}
          href={item.url}
          target="_blank"
          className="flex hover:underline items-center justify-between border border-[#E5E5E5] p-4 transition"
        >
          <div className="flex items-center gap-3">
            <div className="text-5xl">{item.icon}</div>
            <div>
              <h3 className="font-semibold ">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.username}</p>
            </div>
          </div>
          <ArrowUpRight className="text-gray-400" size={18} />
        </Link>
      ))}
    </div>
        </div>
    </div>
  );
}
