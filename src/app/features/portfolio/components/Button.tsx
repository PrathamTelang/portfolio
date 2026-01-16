import React, { ReactElement } from 'react'
import { motion } from "motion/react";


export interface ButtonProps {
    text: string;
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    onClick?: () => void
    fullWidth?: boolean
    cursor?: string
}


function Button(props: ButtonProps) {
  return (
    <a
    onClick={props.onClick}
    style={{ cursor: props.cursor }} 
    className="group relative px-1.5 text-lg bg-border/50 group-hover:bg-border/65 ">
      <span className="absolute inset-0 border border-dashed border-border ">
      </span>
    {props.startIcon}
    {props.text}
    {props.endIcon}
    <motion.svg 
      width="5" 
      height="5" 
      viewBox="0 0 5 5" 
      className="absolute top-[-2px] left-[-2px] fill-black dark:fill-white/50 drop-shadow-2xl drop-shadow-black/20 dark:drop-shadow-white/20

"
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      >
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
    </motion.svg>
    <motion.svg 
    width="5" 
    height="5" 
    viewBox="0 0 5 5" 
    className="absolute top-[-2px] right-[-2px] fill-black dark:fill-white/50" 
    animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}>
        <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
      </motion.svg>
    <motion.svg 
    width="5" 
    height="5" 
    viewBox="0 0 5 5" 
    className="absolute bottom-[-2px] left-[-2px] fill-black dark:fill-white/50" 
    animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}><path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path></motion.svg>
    <motion.svg width="5" height="5" viewBox="0 0 5 5" className="absolute right-[-2px] bottom-[-2px] fill-black dark:fill-white/50" animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}><path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path></motion.svg></a>
  )
}

export default Button