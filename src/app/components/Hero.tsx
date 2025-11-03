import Image from "next/image"
import pfp from "./images/pfp.png"
import shinchan from "./images/shinchan.jpeg"
import { Line } from "./Line"
import thanos from "./images/thanos.jpg"
import profilePic from "./images/profilePic.jpg"
import IndianFlag from "./images/Flag_of_India.svg.png"

export const Hero = () => {
    return (
        <div className="w-screen  flex justify-center">
            <div className="flex border-x border-lightborder dark:border-darkborder dark:bg-darkbg bg-white w-3/5 max-[475px]:w-11/12 max-[475px]:max-h-36 max-h-full">
                <div className="h-48 min-w-48 max-[475px]:min-w-36 max-[475px]:min-h-full">
                    <div className="absolute group inline-block ">
                    <Image
                        alt="Indian Flag"
                        src={IndianFlag}
                        className="h-12 w-auto max-[475px]:h-8"
                      />
                      <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 
                                      opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-300 
                                      bg-gray-800  text-white text-sm rounded py-1 px-2 whitespace-nowrap pointer-events-none">
                        I'm from India
                      </div>
                    </div>

                    <Image
                        src={profilePic} 
                        alt="Dark Hole" 
                        className="rounded-full border h-full w-full border-white dark:border-darkborder max-[475px]:min-w-full max-[475px]:max-h-36 object-cover" 
                    />    
                </div>   
                <div className="w-full h-full border-l border-lightborder dark:border-darkborder max-[475px]:max-h-36">
                    <div className="pl-4 text-xs text-[#D4D4D8] dark:text-[#42454D]  select-none bg-[repeating-linear-gradient(45deg,var(--color-lightborder)_0_1px,transparent_1px_8px)]
                    dark:bg-[repeating-linear-gradient(45deg,var(--color-darkborder)0_1px,transparent_1px_8px)]
                    h-2/6 flex items-end max-[475px]:hidden">font-family: 'Source Code Pro', monospace;</div>
                    <div className="w-full h-[1px] bg-lightborder dark:bg-darkborder" />
                    <div className=" h-4/6 flex items-end max-[475px]:h-full">
                        <div className="w-full">
                            <h1 className="pl-4 text-3xl font-semibold dark:text-darkprimary-text" >Pratham Telang</h1>
                            <div className="w-full h-[1px] bg-lightborder dark:bg-darkborder" />
                            <p className="pl-4 text-secondary-text my-2 max-[475px]:my-0 text-md max-[475px]:text-sm dark:text-darksecondary-text">Web developer & Design Engineer</p>
                            <div className="w-full h-[1px] bg-lightborder dark:bg-darkborder" />
                            <p className="pl-4 text-secondary-text my-2 max-[475px]:my-0 text-xs dark:text-darksecondary-text">Nagpur, Maharashtra, India</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}