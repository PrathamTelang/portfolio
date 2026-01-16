import Image from "next/image"
import profilePic from "../images/heroImage.jpg"
import IndianFlag from "../images/Flag_of_India.svg.png"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import { GoDotFill } from "react-icons/go"

export const Hero = () => {
    return (
        <div className="w-screen  flex justify-center bg-background bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)] edge-fade-x
             ">
            <div className="flex border-x border-border   bg-background w-11/12 lg:w-3/5  max-[475px]:max-h-36 max-h-full">
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
                        className="rounded-full h-full w-full border-white  max-[475px]:min-w-full max-[475px]:max-h-36 object-cover" 
                    />    
                </div>   
                <div className="w-full h-full flex flex-col justify-end border-l border-border  max-[475px]:max-h-36">
                    <div className="pl-4 text-xs text-secondary-text  select-none bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)]
                    h-full flex items-end ">font-family: 'Source Code Pro', monospace;</div>
                    <div className="w-full h-px bg-border " />
                    <div className="flex items-end">
                        <div className="w-full">
                            <div className="pl-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <h1 className=" text-3xl font-serif italic sm:text-5xl" >Pratham Telang</h1>
                                <RiVerifiedBadgeFill className="text-2xl text-[#1D9BF0]" />
                                </div>
                                <div className="mr-4 px-4 py-1.5 border border-border rounded-2xl flex items-center gap-2 bg-border/50 text-sm"><GoDotFill className="text-[#00BC7D] animate-ping" />Available for work</div>
                            </div>
                            <div className="w-full h-px bg-border " />
                            <p className="pl-4 text-secondary-text mt-2 max-[475px]:my-0 text-md max-[475px]:text-sm ">Web developer & Design Engineer</p>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}