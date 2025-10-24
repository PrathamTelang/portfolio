import { Line } from "./Line"

export const Education = () => {
    return (
        <div className="w-screen flex justify-center ">
            <div className="w-3/5 relative bg-white dark:bg-darkbg border-x border-lightborder dark:border-darkborder max-[475px]:w-11/12">
            <h2 className="text-xs font-semibold text-[#FF8243] 
           transform -rotate-90  absolute sm:top-8 sm:-left-13 sm:text-lg top-5 -left-8.5
        ">Education</h2>
            <div className="py-2">
                <h3 className="text-lg px-4 font-semibold dark:text-darkprimary-text">Raisoni University</h3>
            <p className="text-secondary-text px-4 mt-1 text-md dark:text-darksecondary-text">
                Bachelor of Computer Application
            </p>
            <p className="text-secondary-text ml-4 text-sm dark:text-darksecondary-text">2023 - 2026</p>
            </div>
        </div>
        </div>
    )
}