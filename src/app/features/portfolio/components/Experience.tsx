import { Line } from "./Line"

export const Experience = () => {
    return (
        <div className="w-screen flex h-full justify-center bg-lightbg bg-[repeating-linear-gradient(45deg,var(--color-lightborder)_0_1px,transparent_1px_8px)]
            dark:bg-darkbg dark:bg-[repeating-linear-gradient(45deg,var(--color-darkborder)_0_1px,transparent_1px_8px)]">
            <div className="w-3/5 relative  bg-white dark:bg-darkbg border-x border-lightborder dark:border-darkborder max-[475px]:w-11/12">
            <h2 className="text-xs font-semibold text-[#F6339A] 
           transform -rotate-90  absolute sm:top-9 sm:-left-14 sm:text-lg top-6 -left-9
            ">Experience</h2>
           
            <div className="pt-2">
                <h3 className="text-lg px-4 font-semibold dark:text-darkprimary-text">TechVance Innovations</h3>
            <p className="text-primary-text px-4 mt-1 text-md dark:text-darkprimary-text">
                Full Stack Developer | 26th May 2025 to 26th June 2025
            </p>
                <p className="before:content-['•'] text-secondary-text ml-4 mt-1 text-sm dark:text-darksecondary-text">
                    <a className="pl-2 text-primary-text dark:text-darkprimary-text">
                        Robot Control Dashboard:
                    </a>
                     Developed the frontend interface for a robot control system, focusing on responsive UI and seamless user interaction.</p>
               
                <p className="before:content-['•'] text-secondary-text ml-4 mt-1 text-sm dark:text-darksecondary-text">
                    <a className="pl-2 text-primary-text dark:text-darkprimary-text">
                        E-commerce Platform: 
                    </a>
                     Built and integrated cart and product routes using Node.js and Express, ensuring smooth API communication between frontend and backend.</p>
            </div>
            
        </div>
        </div>
    )
}