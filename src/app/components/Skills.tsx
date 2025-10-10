import { FaGitAlt, FaNodeJs, FaReact } from "react-icons/fa"
import { Line } from "./Line"
import { SiExpress, SiJavascript, SiMongodb, SiPostgresql, SiTailwindcss, SiTypescript } from "react-icons/si"
import { RiNextjsFill } from "react-icons/ri"
import { VscVscode } from "react-icons/vsc"
import motionIcon from "./svg/Motion.svg"
import motionIconpng from "./images/motion.png"
import Image from "next/image"




export const Skills = () => {
    return (
        <div className="w-screen flex justify-center">
            <div className="w-3/5  border-x-2 border-[#E5E5E5] max-[475px]:w-screen ">
                <h2 className="text-2xl px-4 font-semibold ">Techstack</h2>
                <Line/>
                <div className=" bg-[radial-gradient(circle,_#E5E5E5_1px,_transparent_1px)] 
                      bg-[length:10px_10px]">
                    <div className="relative z-10">
                        <div className="pt-2 ">
                    <h3 className="text-lg px-4 font-semibold">Frontend</h3>
                    <div className="flex items-center pl-4 text-4xl gap-4">
                        <SiTypescript className="text-[#007ACC]" />
                        <SiJavascript className="text-[#F7DF1E]"/>
                        <FaReact className="text-[#61DAFB]" />
                        <RiNextjsFill />
                        <SiTailwindcss className="text-[#06B6D4]" />
                    </div>
                </div>
                <div className="pt-2">
                    <h3 className="text-lg px-4 font-semibold">Backend</h3>
                    <div className="flex items-center pl-4 text-4xl gap-4">
                        <FaNodeJs className="text-[#5EAF47]" />
                        <SiExpress />
                        <SiMongodb className="text-[#6CAC48]" />
                        <SiPostgresql className="text-[#396C94]" />
                    </div>
                </div>
                <div className="pt-2 ">
                    <h3 className="text-lg px-4 font-semibold">Design and Tools</h3>
                    <div className="flex items-center pl-4 text-4xl gap-4">
                        <FaGitAlt className="text-[#DE4C36]" />
                        <VscVscode className="text-[#2AAFF2]" />
                        <Image src={motionIconpng} alt="motion" width={40} height={40} className="object-contain p-1"/>
                    </div>
                </div>
                    </div>
                </div>
            </div>
        </div>
    )
}