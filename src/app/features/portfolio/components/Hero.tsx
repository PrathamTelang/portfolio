"use client"
import Image from "next/image"
import profilePic from "../images/heroImage.jpg"
import IndianFlag from "../images/Flag_of_India.svg.png"
import { RiVerifiedBadgeFill } from "react-icons/ri"
import { GoDotFill } from "react-icons/go"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { AnimatePresence, motion } from "motion/react"

export const Hero = () => {
      const [show, setShow] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const [rect, setRect] = useState<DOMRect | null>(null)

    const [, tick] = useState(0)

useEffect(() => {
  const id = setInterval(() => tick(t => t + 1), 60_000)
  return () => clearInterval(id)
}, [])

    const time = new Date().toLocaleTimeString("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
})

    
    return (
        <div className="w-screen  flex justify-center bg-background bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)] edge-fade-x
             ">
            <div className="flex border-x border-border   bg-background w-11/12 lg:w-3/5  max-[475px]:max-h-36 max-h-full">
                <div className="h-48 min-w-48 max-[475px]:min-w-36 max-[475px]:min-h-full">
                    <motion.div className="absolute group inline-block
                     "
                     ref={ref}
                        onHoverStart={() => {
    const r = ref.current?.getBoundingClientRect()
    if (r) setRect(r)
    setShow(true)
  }}
  onHoverEnd={() => setShow(false)}>
<Image
    alt="Indian Flag"
    src={IndianFlag}
    className="h-12 w-auto max-[475px]:h-8"
/>
{show && rect &&
    createPortal(
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{
            position: "fixed",
            left: rect.left + rect.width / 2,
            top: rect.top - 40,
            transform: "translateX(-50%)",
          }}
          className="
            z-50
            backdrop-blur-md
            border border-border
            p-3
            text-sm 
            shadow-lg
            pointer-events-none
          "
        >
        <div>
            Nagpur, IN
            <div className="text-xs text-secondary-text">
  Local time · {time} IST
</div>

        </div>
        </motion.div>
      </AnimatePresence>,
      document.body
    )
}
                      
                    </motion.div>

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