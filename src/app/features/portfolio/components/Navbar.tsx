"use client";

import React, { useEffect, useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import Button from "./Button";
import Link from "next/link";

export const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    } else {
      setDarkMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

    useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);


    const flashSound = () => {
      const audio = new Audio('sounds/flashBang.mp3');
      audio.play();
    }
    const switchSound = () => {
      const audio = new Audio('sounds/LightSwitch.mp3');
      audio.play();
    }
  
  

  return (
    <div className="flex w-screen justify-center h-12 fixed top-0 left-0 border-y border-border z-50 bg-background ">
      <div className="w-11/12 lg:w-3/5 border-x border-border flex items-center justify-end px-4 gap-2">
      <div className="flex justify-center items-center gap-4 font-semibold">
        <Link href="/" >
              <div>Portfolio</div>
            </Link>
            <Link href="/components" >
              <div>Components</div>
            </Link>
          </div>
      <div className="cursor-pointer rounded-full border border-border p-2 flex items-center justify-center hover:bg-border "
        onClick={() => window.open("https://github.com/PrathamTelang/portfolio")}
      >
        <FaGithub className="" />
      </div>
        <div className="flex gap-1 bg-border rounded-full p-1">
          <button
            className="h-7 w-7 cursor-pointer rounded-full  flex items-center justify-center border border-[#D9DADC] dark:border-none bg-background dark:bg-[#27272A]"
            onClick={() => { setDarkMode(false); flashSound(); }}
            title="Enable Light Mode"
          >
            <MdOutlineLightMode />
          </button>
          <button
              className="h-7 w-7 cursor-pointer rounded-full  flex items-center justify-center p-1 dark:border border-neutral-700 bg-[#EEEEF0] dark:bg-black"
            onClick={() => { setDarkMode(true); switchSound(); }}
            title="Enable Dark Mode"
          >
            <BsMoonStars />
          </button>
        </div>
      </div>
    </div>
  );
};
