import { Line } from "./Line"

export const Experience = () => {
    return (
        <div className="w-screen flex h-full justify-center">
            <div className="w-3/5 relative  bg-white dark:bg-darkbg border-x border-lightborder dark:border-darkborder max-[475px]:w-11/12">
            <h2 className="text-xs font-semibold text-[#F6339A] 
           transform -rotate-90  absolute sm:top-9 sm:-left-14 sm:text-lg top-6 -left-9.5
            ">Experience</h2>
           
            <div className="pt-2">
                <h3 className="text-lg px-4 font-semibold dark:text-darkprimary-text">TechVance Innovations</h3>
            <p className="text-secondary-text px-4 my-1 text-md dark:text-darksecondary-text">
                Full Stack Developer | 26th May 2025 to 26th June 2025
            </p>
                        <p className="text-secondary-text ml-4 text-sm dark:text-darksecondary-text">Developed the whole frontend of the</p>
            </div>
            <div className="pt-2">
                <h3 className="text-lg px-4 font-semibold dark:text-darkprimary-text">TechVance Innovations</h3>
            <p className="text-secondary-text px-4 my-1 text-md dark:text-darksecondary-text">
                Full Stack Developer | 26th May 2025 to 26th June 2025
            </p>
                        <p className="text-secondary-text ml-4 text-sm dark:text-darksecondary-text">Developed the whole frontend of the</p>
            </div>
        </div>
        </div>
    )
}