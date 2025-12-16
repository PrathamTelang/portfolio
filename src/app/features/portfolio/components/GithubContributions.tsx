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
    <div className="w-screen flex justify-center items-center bg-background bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)]
         ">
      <div
        className="w-11/12 lg:w-3/5 relative bg-background border-x border-border   "
      >
        <section className="flex flex-col items-center w-full overflow-hidden ">
          <div className="p-2 w-full bg-background  text-primary-text text-primary-text flex flex-col items-center justify-center">
            <GitHubCalendar
              username="PrathamTelang"
              blockSize={12}
              blockMargin={5}
              colorScheme={isDarkMode ? "dark" : "light"}
              fontSize={14}
            />
            <div className="w-full">
              <a
              className="text-secondary-text  underline"
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
