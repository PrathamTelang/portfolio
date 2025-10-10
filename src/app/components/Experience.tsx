import { Line } from "./Line"

export const Experience = () => {
    return (
        <div className="w-screen flex justify-center">
            <div className="w-3/5  border-x border-[#E5E5E5] max-[475px]:w-screen">
            <h2 className="text-2xl px-4 font-semibold ">Experience</h2>
            <Line/>
            <div className="pt-2">
                <h3 className="text-lg px-4 font-semibold">TechVance Innovations</h3>
            <p className="text-[#404040] px-4 my-1 text-md">
                Full Stack Developer | 26th May 2025 to 26th June 2025
            </p>
                        <p className="text-[#404040] ml-4 text-sm">Developed the whole frontend of the</p>
            </div>
        </div>
        </div>
    )
}