import React, { ReactElement } from 'react'
import { FaPlus } from 'react-icons/fa'
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
    className="group relative px-1.5 text-lg text-sky-800 dark:text-sky-300">
      <span className="absolute inset-0 border border-dashed border-sky-300/60 bg-sky-400/10 group-hover:bg-sky-400/15 dark:border-sky-300/30">
      </span>
    {props.startIcon}
    {props.text}
    {props.endIcon}
    <motion.svg 
      width="5" 
      height="5" 
      viewBox="0 0 5 5" 
      className="absolute top-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50 drop-shadow-2xl drop-shadow-sky-400/20 dark:drop-shadow-sky-900/20

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
    className="absolute top-[-2px] right-[-2px] fill-sky-300 dark:fill-sky-300/50" 
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
    className="absolute bottom-[-2px] left-[-2px] fill-sky-300 dark:fill-sky-300/50" 
    animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}><path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path></motion.svg>
    <motion.svg width="5" height="5" viewBox="0 0 5 5" className="absolute right-[-2px] bottom-[-2px] fill-sky-300 dark:fill-sky-300/50" animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}><path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path></motion.svg></a>
  )
}

export default Button