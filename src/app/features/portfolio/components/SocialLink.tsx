"use client";
import { FaLinkedin, FaReddit, FaSquareXTwitter, } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { BentoGrid } from "./BentoGrid";
import { BentoItem } from "./BentoItem";
import { MdAlternateEmail } from "react-icons/md";
import { BsFiletypePdf } from "react-icons/bs";
import Image from "next/image";
import { image } from "motion/react-client";

const socialLinks = [
  {
    name: "LinkedIn",
    username: "Pratham Telang",
    icon: <FaLinkedin className="text-[#0A66C2]" />,
    url: "https://www.linkedin.com/in/prathamtelang/",
    image: "/linkedin-bg.png",
  },
  {
    name: "GitHub",
    username: "PrathamTelang",
    icon: <FaGithubSquare className="rounded-md" />,
    url: "https://github.com/PrathamTelang",
    image: "/github-bg.png",
  },
  {
    name: "X",
    username: "@Prat_Telang",
    icon: <FaSquareXTwitter className=" rounded-md" />,
    url: "https://x.com/Prat_Telang",
    image: "/x-bg.png",
  },
  {
    name: "Reddit",
    username: "MissionBasis7442",
    icon: <FaReddit className="text-[#FF4500] dark:bg-background rounded-full" />,
    url: "https://www.reddit.com/user/MissionBasis7442/",
    image: "/reddit-bg.png",
  },
  {
    name: "Email",
    username: "prathamtelang007@gmail.com",
    icon: <MdAlternateEmail />,
    url: "mailto:prathamtelang007@gmail.com",
    image: "/email-bg.png",
  },
  {
    name: "Resume",
    username: "View Resume",
    icon: <BsFiletypePdf />,
    url: "/Pratham_Telang_Resume.pdf",
    image: "/resume-bg.png",
  }
];

export default function SocialLinks() {
  return (
    
    <div className="w-screen flex justify-center bg-background bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)] edge-fade-x">
        <div className="w-11/12 lg:w-3/5 relative bg-background  border-x border-border  ">
            <h2 className="text-xs font-serif italic text-[#F6D743] 
           transform -rotate-90  absolute sm:top-3.5 sm:-left-8.5 sm:text-lg top-2.5 -left-5
        ">Connect</h2>
        
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
      >
      <Image
    src={link.image}
    alt={link.name}
    fill
    className="object-cover"
  />
</BentoItem>
  ))}
</BentoGrid>
        
        </div>
    </div>
  );
}
