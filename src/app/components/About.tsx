import { Line } from "./Line"

export const About = () => {
    return (
        <div className=" w-screen flex justify-center items-center">
            <div className="w-3/5  border-x-2 border-[#E5E5E5] max-[475px]:w-screen">
                <h2 className="text-2xl px-4 font-semibold ">About Me</h2>
            <Line/>
            <p className="text-[#404040] px-4 my-2 text-md ">I follow simplicity, pay attention to details, and trust my intuition to structure things in a way that just feels right. I think differently, and that's my strength. I move Fast.</p>
            <button className="bg-red-300 mx-4">Connect with Me!</button>
            </div>
        </div>
    )
}