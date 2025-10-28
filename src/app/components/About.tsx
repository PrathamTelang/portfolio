"use client";

export const About = () => {
  return (
    <div className="w-screen flex justify-center items-center ">
      <div className="w-3/5 relative bg-white border-x border-lightborder dark:bg-darkbg dark:border-darkborder  max-[475px]:w-11/12
      ">
          <h2 className="text-xs font-semibold text-[#615FFF] 
           transform -rotate-90  absolute sm:top-7 sm:-left-12 sm:text-lg top-5 -left-7.5
        ">About Me</h2>
        
        
        <p className="text-secondary-text px-4 my-2 text-md dark:text-darksecondary-text">
          Pratham Telang <br/>
Web Developer & Design Engineer <br/>
I build fast, intuitive, and user-centric digital experiences using modern web technologies like React, Next.js, and TypeScript.
        </p>
        
          <button
          onClick={() => window.open("https://mail.google.com/mail/?view=cm&fs=1&to=prathamtelang007@gmail.com", "_blank")}
          className="flex gap-2 mb-2 cursor-pointer bg-gradient-to-r from-red-600 to-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-md mx-4 transition duration-200">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>
            Slide in my DMs
          </button>
        
      </div>
    </div>
  );
};
