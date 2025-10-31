"use client"
import '@/app/globals.css'
import NameSvg from './NameSvg'
import { motion } from "motion/react"

export const Background = () => {
  return (
    <div className="flex w-screen pt-12  items-center justify-center ">
      <div className=" w-3/5 border-x border-lightborder dark:bg-darkbg dark:border-darkborder dark:text-darkprimary-text max-[475px]:w-11/12">
      <div className="w-full h-60 flex justify-center items-center
                      relative overflow-hidden bg-white dark:bg-darkbg
bg-[linear-gradient(to_right,var(--color-lightborder)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-lightborder)_1px,transparent_1px)]
bg-[size:4px_4px]
dark:bg-[linear-gradient(to_right,var(--color-darkborder)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-darkborder)_1px,transparent_1px)]
      
                      ">
        <motion.div className="flex items-center justify-center">
          <NameSvg/>
          </motion.div>                  
        </div>
      </div>
    </div>
  )
}
