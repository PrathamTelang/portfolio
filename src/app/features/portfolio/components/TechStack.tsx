"use client";
import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { motion } from "motion/react";
import { SiExpress, SiJavascript, SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import motionIconpng from "../images/motion.png";
import Image from "next/image";


const technologies = [
  { name: "JavaScript", icon: <SiJavascript size={40} color="#F7DF1E" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "TypeScript", icon: <SiTypescript size={40} color="#3178C6" /> , link: "https://www.typescriptlang.org/" },
  { name: "React", icon: <FaReact size={40} color="#61DAFB" /> , link: "https://react.dev/" },
  { name: "Next.js", icon: <RiNextjsFill size={40} className="dark:text-white dark:bg-black " />  , link: "https://nextjs.org/" },
  { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" /> , link: "https://nodejs.org/" },
  { name: "Express.js", icon: <SiExpress size={40} className="dark:text-white dark:bg-black " /> , link: "https://expressjs.com/" },
  { name: "MongoDB", icon: <SiMongodb size={40} color="#47A248" />, link: "https://www.mongodb.com/" },
  { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> , link: "https://www.postgresql.org/" },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38B2AC" /> , SiTypescriptlink: "https://tailwindcss.com/" },
  { name: "Git", icon: <FaGitAlt size={40} color="#F05032" /> , link: "https://git-scm.com/" },
  { name: "VS Code", icon: <VscVscode size={40} color="#007ACC" /> , link: "https://code.visualstudio.com/" },
  { name: "Framer Motion", icon: <Image src={motionIconpng} alt="Framer Motion" width={40} height={40} /> , link: "https://www.framer.com/motion/" },
];

export const Skills = () => {
  return (
    <div className="w-screen flex justify-center bg-background bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)] edge-fade-x
         ">
      <div className="w-11/12 lg:w-3/5 relative bg-background  border-x border-border  ">
        <h2 className="text-xs font-serif italic text-[#ED6BFF] 
           transform -rotate-90  absolute sm:top-5 sm:-left-10 sm:text-lg top-3 -left-6
        ">TechStack</h2>
        <div className="bg-[radial-gradient(circle,var(--color-border)_1px,transparent_1px)]
        ">
          <div className="overflow-hidden">
            <motion.div
          className="flex items-center w-max "
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...technologies, ...technologies].map((technology, index) => (
              <div key={`${technology.name}-${index}`} className="inline-block m-4 text-center">
                <Tooltip icon={technology.icon} link={technology.link} />
              </div>
            ))}
          </motion.div>
          </div>
            
          
        </div>
      </div>
    </div>
  );
};

// Tooltip component
const Tooltip = ({ icon,  link }: { icon: any; link?: any }) => {
  return (
    <div className="relative group cursor-pointer p-10">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
    </div>
  );
};
