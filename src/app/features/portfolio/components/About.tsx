
export const About = () => {
  return (
    <div className="w-screen flex justify-center items-center bg-background bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)]">
      <div className="w-11/12 lg:w-3/5 relative border-x bg-background border-border
      ">
          <h2 className="text-xs font-semibold text-[#615FFF] 
           transform -rotate-90  absolute sm:top-7 sm:-left-12 sm:text-lg top-5 -left-7.5
        ">About Me</h2>
        
        
        <p className="text-secondary-text px-4 my-2 text-md ">
          Pratham Telang 
          <br/>
          Web Developer & Design Engineer 
          <br/>
          I build fast, intuitive, and user-centric digital experiences using modern web technologies like React, Next.js, and TypeScript.
        </p>
      </div>
    </div>
  );
};
