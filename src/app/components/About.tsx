
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
      </div>
    </div>
  );
};
