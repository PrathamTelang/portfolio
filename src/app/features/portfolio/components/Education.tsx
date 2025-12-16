import { Line } from "./Line"

export const Education = () => {
    return (
        <div className="w-screen flex justify-center bg-background bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)]
             ">
            <div className="w-11/12 lg:w-3/5 relative bg-background  border-x border-border  ">
            <h2 className="text-xs font-semibold text-[#FF8243] 
           transform -rotate-90  absolute sm:top-8 sm:-left-13 sm:text-lg top-5 -left-8.5
        ">Education</h2>
            <div className="py-2">
                <h3 className="text-lg px-4 font-semibold ">Raisoni University</h3>
            <p className="text-secondary-text px-4 mt-1 text-md ">
                Bachelor of Computer Application
            </p>
            <p className="text-secondary-text ml-4 text-sm ">2023 - 2026</p>
            </div>
        </div>
        </div>
    )
}