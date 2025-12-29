import { GoDotFill } from "react-icons/go";

export const About = () => {
  return (
    <div className="w-screen flex justify-center items-center bg-background bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)]">
      <div className="w-11/12 lg:w-3/5 relative border-x bg-background border-border
      ">
          <h2 className="text-xs font-semibold text-[#615FFF] 
           transform -rotate-90  absolute sm:top-7 sm:-left-12 sm:text-lg top-5 -left-7.5
        ">About Me</h2>
        
        
        <p className="text-secondary-text px-4 my-2 text-sm flex items-center">
         <ul className="list-disc list-inside">
          <li className="pb-2">Design Engineer with a strong design sensibility, focused on pixel-perfect execution and attention to detail</li>

<li className="pb-2">Skilled in Next.js, React, TypeScript, and modern front-end technologies, building clean and user-centric web interfaces</li>

<li className="pb-2">Passionate about learning new technologies and turning ideas into reality through polished, thoughtfully crafted personal projects</li>

         </ul>
        </p>
      </div>
    </div>
  );
};
