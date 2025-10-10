import { ArrowUpRight } from "lucide-react"
import { Line } from "./Line"
import { LinkedInIcon } from "./svg/LinkdinIcon"

export const Skills = () => {
    return (
        <div className="w-screen flex justify-center">
            <div className="w-3/5  border-x-2 border-[#E5E5E5] max-[475px]:w-screen">
                <h2 className="text-2xl px-4 font-semibold ">Techstack</h2>
                <Line/>
                
                
            </div>
        </div>
    )
}