"use client"
import '@/app/globals.css'
import NameSvg from './NameSvg'
import { AnimatePresence, motion } from "motion/react"
import { useRef, useState } from 'react'
import { createPortal } from 'react-dom'

export const Background = () => {
  const [show, setShow] = useState(false)
const ref = useRef<HTMLDivElement>(null)
const [rect, setRect] = useState<DOMRect | null>(null)


  return (
    <div className="flex w-screen  items-center justify-center bg-background bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)] edge-fade-x">
      <div className=" w-11/12 lg:w-3/5 border-x border-border   text-primary-text ">
      <div className="w-full h-60 flex justify-center items-center
                      relative overflow-hidden bg-background 
bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]
bg-size-[4px_4px]
      ">
        <motion.div
  ref={ref}
  className="flex items-center justify-center"
  onHoverStart={() => {
    const r = ref.current?.getBoundingClientRect()
    if (r) setRect(r)
    setShow(true)
  }}
  onHoverEnd={() => setShow(false)}
>
  <NameSvg />
</motion.div>
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
          top: rect.bottom + 14,
          transform: "translateX(-50%)",
        }}
        className="
          z-9999
          w-80
          bg-background
          border border-border
          p-3
          text-sm 
          shadow-lg
          pointer-events-none
        "
      >
        <div>
          
        <div className='flex justify-between items-center'>
          <div className='text-primary-text text-2xl'>प्रथम</div>
          <div>---------------------</div>
        <div className='text-foreground font-serif italic text-md'>Pratham</div>
        </div>

        <div className='text-secondary-text'>
         is a Sanskrit-origin word meaning
        &quot;first, foremost, beginning&quot; — symbolizing
        leadership and origin.
        </div>
        </div>
      </motion.div>
    </AnimatePresence>,
    document.body
  )
}
                  
        </div>
      </div>
    </div>
  )
}
