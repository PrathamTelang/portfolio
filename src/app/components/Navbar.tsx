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
    <div className="flex w-screen justify-center h-12 fixed top-0 mb-2 border-y border-[#e5e5e5] bg-white z-10 dark:bg-black dark:border-[#333333]">
      <div className="w-3/5 border-x border-[#e5e5e5] max-[475px]:w-11/12 flex items-center justify-end px-4">
        <div className="flex gap-1 bg-[#F3F3F3] dark:bg-[#1A1A1A] rounded-full">
          <button
            className="h-7 w-7 cursor-pointer rounded-full border border-[#e5e5e5] flex items-center justify-center"
            onClick={() => setDarkMode(true)}
            title="Enable Dark Mode"
          >
            <BsMoonStars />
          </button>
          <button
            className="h-7 w-7 cursor-pointer rounded-full border border-[#e5e5e5] flex items-center justify-center"
            onClick={() => setDarkMode(false)}
            title="Enable Light Mode"
          >
            <MdOutlineLightMode />
          </button>
        </div>
      </div>
    </div>
  );
};
