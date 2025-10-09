import Image from "next/image"
import pfp from "./images/pfp.png"
import shinchan from "./images/shinchan.jpeg"
import { Line } from "./Line"

export const Hero = () => {
    return (
            <div className="flex">
            <div className="max-h-48 h-48 max-w-48 min-w-48">
                <Image
                src={shinchan} 
                alt="Dark Hole" 
                className="rounded-full border-2 border-white h-full w-full object-cover"
                />    
            </div>   
            <div className="  border-l-2 w-full border-[#E5E5E5] ">
                <div className="pl-4 text-xs text-[#D4D4D8] bg-[repeating-linear-gradient(45deg,#E5E5E5_0_1px,transparent_1px_10px)] h-14 flex items-end">font-family: 'Source Code Pro', monospace;</div>
                <div className="w-full h-[1px] bg-[#E5E5E5]" />
                <h1 className="pl-4 text-3xl font-semibold" >Pratham Telang</h1>
                <div className="w-full h-[1px] bg-[#E5E5E5]" />
                <p className="pl-4 text-[#404040] my-2 text-md ">Software Engineer with an eye for design.<br/>I build clean, simple, and impactful digital experiences.</p>
                <div className="w-full h-[1px] bg-[#E5E5E5]" />
                <p className="pl-4 text-[#404040] my-2 text-sm ">Nagpur, Maharashtra, India</p>
            </div>
        </div>
    )
}