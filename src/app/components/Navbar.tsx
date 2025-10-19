"use client";

import React, { useEffect, useState } from "react";
import { BsMoonStars } from "react-icons/bs";
import { MdOutlineLightMode } from "react-icons/md";

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
  

  return (
    <div className="flex w-screen justify-center h-12 fixed top-0 mb-2 border-y border-lightborder bg-white z-10 dark:bg-[#030712] dark:text-white dark:border-[#1D202A]">
      <div className="w-3/5 border-x border-lightborder dark:border-[#1D202A] max-[475px]:w-11/12 flex items-center justify-end px-4">
        <div className="flex gap-1 bg-[#F2F2F3] dark:bg-[#1D202A] rounded-full p-1">
          <button
            className="h-7 w-7 cursor-pointer rounded-full  flex items-center justify-center border border-[#D9DADC] dark:border-none bg-white dark:bg-[#1D202A] "
            onClick={() => setDarkMode(false)}
            title="Enable Light Mode"
          >
            <MdOutlineLightMode />
          </button>
          <button
            className="h-7 w-7 cursor-pointer rounded-full  flex items-center justify-center p-1 dark:border border-[#4A5465] dark:bg-[#364153]"
            onClick={() => setDarkMode(true)}
            title="Enable Dark Mode"
          >
            <BsMoonStars />
          </button>
        </div>
      </div>
    </div>
  );
};
