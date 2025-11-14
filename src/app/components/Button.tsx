import React, { ReactElement } from 'react'
import { FaPlus } from 'react-icons/fa'

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
    <div 
    onClick={props.onClick}
    style={{ cursor: props.cursor }}
    className='text-primary  dark:bg-[#03192A]  dark:hover:bg-sky-400/20 px-2 w-fit border border-dashed border-sky-300/60 bg-sky-400/10 hover:bg-sky-400/15 dark:border-sky-300/30 relative '>
        <FaPlus className='h-1.5 w-1.5 absolute -top-1/7 -left-1/18 text-[#73D4FF] dark:text-[#3B6E89]' />
        <FaPlus className='h-1.5 w-1.5 absolute -top-1/7 -right-1/18 text-[#73D4FF] dark:text-[#3B6E89]' />
        <FaPlus className='h-1.5 w-1.5 absolute -bottom-1/7 -left-1/18 text-[#73D4FF] dark:text-[#3B6E89]' />
        <FaPlus className='h-1.5 w-1.5 absolute -bottom-1/7 -right-1/18 text-[#73D4FF] dark:text-[#3B6E89]' />
        {props.startIcon}
    {props.text}
    {props.endIcon}
    </div>
  )
}

export default Button