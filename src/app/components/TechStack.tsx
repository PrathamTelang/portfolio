import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa";
import { Line } from "./Line";
import { SiExpress, SiJavascript, SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";
import motionIconpng from "./images/motion.png";
import Image from "next/image";

export const Skills = () => {
  return (
    <div className="w-screen flex justify-center">
      <div className="w-3/5 border-x border-[#E5E5E5] max-[475px]:w-11/12">
        <h2 className="text-2xl px-4 font-semibold">Techstack</h2>
        <Line />
        <div className="bg-[radial-gradient(circle,_#E5E5E5_1px,_transparent_1px)] bg-[length:10px_10px]">
          <div className="relative z-10">

            {/* Frontend */}
            <div className="pt-2">
              <h3 className="text-lg px-4 font-semibold">Frontend</h3>
              <div className="flex items-center pl-4 text-4xl gap-4">
                <Tooltip icon={<SiTypescript className="text-[#007ACC]" />} text="TypeScript" link="https://www.typescriptlang.org/" />
                <Tooltip icon={<SiJavascript className="text-[#F7DF1E]" />} text="JavaScript" link="https://www.javascript.com/" />
                <Tooltip icon={<FaReact className="text-[#61DAFB]" />} text="React" link="https://reactjs.org/" />
                <Tooltip icon={<RiNextjsFill />} text="Next.js" link="https://nextjs.org/" />
                <Tooltip icon={<SiTailwindcss className="text-[#06B6D4]" />} text="Tailwind CSS" link="https://tailwindcss.com/" />
              </div>
            </div>

            {/* Backend */}
            <div className="pt-2">
              <h3 className="text-lg px-4 font-semibold">Backend</h3>
              <div className="flex items-center pl-4 text-4xl gap-4">
                <Tooltip icon={<FaNodeJs className="text-[#5EAF47]" />} text="Node.js" link="https://nodejs.org/" />
                <Tooltip icon={<SiExpress />} text="Express" link="https://expressjs.com/" />
                <Tooltip icon={<SiMongodb className="text-[#6CAC48]" />} text="MongoDB" link="https://www.mongodb.com/" />
                <Tooltip icon={<SiPostgresql className="text-[#396C94]" />} text="PostgreSQL" link="https://www.postgresql.org/" />
              </div>
            </div>

            {/* Design & Tools */}
            <div className="pt-2">
              <h3 className="text-lg px-4 font-semibold">Design and Tools</h3>
              <div className="flex items-center pl-4 text-4xl gap-4">
                <Tooltip icon={<FaGitAlt className="text-[#DE4C36]" />} text="Git" link="https://git-scm.com/" />
                <Tooltip icon={<VscVscode className="text-[#2AAFF2]" />} text="VSCode" link="https://code.visualstudio.com/" />
                <Tooltip
                  icon={
                    <Image
                      src={motionIconpng}
                      alt="Motion"
                      width={40}
                      height={40}
                      className="object-contain p-1"
                    />
                  }
                  text="Motion"
                  link="https://motion.dev/"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

// Tooltip component
const Tooltip = ({ icon, text, link }: { icon: any; text: any; link?: any }) => {
  return (
    <div className="relative group cursor-pointer">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {icon}
      </a>
      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300 
                      bg-gray-800 text-white text-sm rounded py-1 px-2 whitespace-nowrap pointer-events-none">
        {text}
      </div>
    </div>
  );
};
