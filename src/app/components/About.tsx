"use client";
import { Line } from "./Line";

export const About = () => {
  return (
    <div className="w-screen flex justify-center items-center">
      <div className="w-3/5 border-x border-[#E5E5E5] max-[475px]:w-screen">
        <h2 className="text-2xl px-4 font-semibold">About Me</h2>
        <Line />
        <p className="text-[#404040] px-4 my-2 text-md">
          I follow simplicity, pay attention to details, and trust my intuition
          to structure things in a way that just feels right. I think
          differently, and that's my strength. I move fast.
        </p>
        
          <button
          onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=prathamtelang007@gmail.com", "_blank")}
          className="flex gap-2 mb-2 cursor-pointer bg-gradient-to-r from-red-600 to-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md mx-4 transition duration-200">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
            Slide in my DMs
          </button>
        
      </div>
    </div>
  );
};
