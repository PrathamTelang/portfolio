"use client";

import { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";

export default function GitHubContributions() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the HTML element has the 'dark' class
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Initial check
    checkTheme();

    // Watch for class changes (e.g., theme toggler updates)
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-screen flex justify-center items-center">
      <div
        className="w-3/5 relative bg-white border-x border-lightborder dark:bg-darkbg dark:border-darkborder max-[475px]:w-11/12"
      >
        <section className="flex flex-col items-center w-full overflow-hidden ">
          <div className="p-2 w-full bg-lightbg dark:bg-darkbg text-primary-text dark:text-darkprimary-text flex flex-col items-center justify-center">
            <GitHubCalendar
              username="PrathamTelang"
              blockSize={12}
              blockMargin={5}
              colorScheme={isDarkMode ? "dark" : "light"}
              fontSize={14}
            />
            <div className="w-full">
              <a
              className="text-secondary-text dark:text-darksecondary-text underline"
              href="https://github.com/PrathamTelang"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            </div>
          </div>
          
        </section>
      </div>
    </div>
  );
}
