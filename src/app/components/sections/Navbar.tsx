"use client";

import React, { useEffect, useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import Button from "./Button";

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
    <div className="flex w-screen justify-center h-12 fixed top-0 mb-2 border-y border-lightborder bg-white z-20 dark:bg-darkbg dark:text-white dark:border-darkborder">
      <div className="w-3/5 border-x border-lightborder dark:border-darkborder max-[475px]:w-11/12 flex items-center justify-end px-4 gap-2">
      <div>
            <Button
              text="Email"
              onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=prathamtelang007@gmail.com", "_blank")} 
            />
          </div>
      <div className="cursor-pointer rounded-full border border-lightborder dark:border-darkborder p-2 flex items-center justify-center hover:bg-lightborder dark:hover:bg-darkborder"
        onClick={() => window.open("https://github.com/PrathamTelang/portfolio")}
      >
        <FaGithub className="" />
      </div>
        <div className="flex gap-1 bg-[#F2F2F3] dark:bg-darkborder rounded-full p-1">
          <button
            className="h-7 w-7 cursor-pointer rounded-full  flex items-center justify-center border border-[#D9DADC] dark:border-none bg-white dark:bg-darkborder"
            onClick={() => { setDarkMode(false); flashSound(); }}
            title="Enable Light Mode"
          >
            <MdOutlineLightMode />
          </button>
          <button
            className="h-7 w-7 cursor-pointer rounded-full  flex items-center justify-center p-1 dark:border border-[#4A5465] dark:bg-[#364153]"
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
