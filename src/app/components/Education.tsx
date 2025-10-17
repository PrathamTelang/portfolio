import { Line } from "./Line"

export const Education = () => {
    return (
        <div className="w-screen flex justify-center ">
            <div className="w-3/5 bg-white  border-x border-[#e5e5e5] max-[475px]:w-11/12">
            <h2 className="text-2xl px-4 font-semibold ">Education</h2>
            <Line/>
            <div className="pt-2">
                <h3 className="text-lg px-4 font-semibold">Raisoni University</h3>
            <p className="text-[#404040] px-4 mt-1 text-md">
                Bachelor of Computer Application
            </p>
            <p className="text-[#404040] ml-4 text-sm">2023 - 2026</p>
            </div>
        </div>
        </div>
    )
}