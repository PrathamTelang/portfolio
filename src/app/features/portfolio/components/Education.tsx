
export const Education = () => {
    return (
        <div className="w-screen flex justify-center bg-background bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)] edge-fade-x
             ">
            <div className="w-11/12 lg:w-3/5 relative bg-background  border-x border-border  ">
            <h2 className="text-xs font-serif italic text-[#FF8243] 
           transform -rotate-90  absolute sm:top-5 sm:-left-10 sm:text-lg top-4 -left-6.5
        ">Education</h2>
        <div className="py-2">
                <h3 className="text-md px-4 font-semibold ">St. Paul Jr.College</h3>
            <p className="text-secondary-text px-4 mt-1 text-sm ">
                Higher Secondary Education
            </p>
            <p className="text-secondary-text ml-4 text-sm ">2022 - 2023</p>
            </div> 
            <div className="py-2">
                <h3 className="text-md px-4 font-semibold ">Raisoni University</h3>
            <p className="text-secondary-text px-4 mt-1 text-sm ">
                Bachelor of Computer Application
            </p>
            <p className="text-secondary-text ml-4 text-sm ">2024 - 2026</p>
            </div>
        </div>
        </div>
    )
}