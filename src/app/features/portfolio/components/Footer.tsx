
export const Footer = () => {
  return (
    <div className="w-screen  bottom-0 flex justify-center items-center bg-background  bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)] edge-fade-x
     ">
      <div className="w-11/12 lg:w-3/5 relative bg-background border-x border-border    
      ">
        <div className="h-48 text-xs lg:text-sm max-w-full flex flex-col items-end justify-center">
  <p className="text-secondary-text px-4  text-md ">
    - Inspired by  
    <a className="px-2 underline" href="https://tailwindcss.com/">tailwindcss.com</a> 
    & 
    <a className="px-2 underline" href="https://chanhdai.com/">chanhdai.com</a>
  </p>
  
  <p className="text-secondary-text px-4 text-md ">
    Built by
    <a className="px-2 underline" href="https://x.com/Prat_Telang">Prat_Telang</a>
  </p>
</div>

      </div>
    </div>
  );
};
