import Image from "next/image"
import pfp from "./images/pfp.png"
import shinchan from "./images/shinchan.jpeg"
import { Line } from "./Line"
import thanos from "./images/thanos.jpg"

export const Hero = () => {
    return (
        <div className="w-screen  flex justify-center">
            <div className="flex border-x-2 border-[#E5E5E5] w-3/5 max-[475px]:w-screen max-[475px]:max-h-36 max-h-full">
                <div className="h-48 min-w-48 max-[475px]:min-w-36 max-[475px]:min-h-full">
                    <Image
                        src={thanos} 
                        alt="Dark Hole" 
                        className="rounded-full border-2 h-full w-full border-white max-[475px]:min-w-full max-[475px]:max-h-36 object-cover" 
                    />    
                </div>   
                <div className="w-full h-full border-l-2 border-[#E5E5E5] max-[475px]:max-h-36">
                    <div className="pl-4 text-xs text-[#D4D4D8] select-none bg-[repeating-linear-gradient(45deg,#E5E5E5_0_1px,transparent_1px_10px)] h-2/6 flex items-end max-[475px]:hidden">font-family: 'Source Code Pro', monospace;</div>
                    <div className="w-full h-[1px] bg-[#E5E5E5]" />
                    <div className=" h-4/6 flex items-end max-[475px]:h-full">
                        <div className="w-full">
                            <h1 className="pl-4 text-3xl font-semibold" >Pratham Telang</h1>
                            <div className="w-full h-[1px] bg-[#E5E5E5]" />
                            <p className="pl-4 text-[#404040] my-2 max-[475px]:my-1 text-md ">Software Engineer </p>
                            <div className="w-full h-[1px] bg-[#E5E5E5]" />
                            <p className="pl-4 text-[#404040] my-2 max-[475px]:my-0 text-sm ">Nagpur, Maharashtra, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}