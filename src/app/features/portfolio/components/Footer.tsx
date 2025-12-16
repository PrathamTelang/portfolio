
export const Footer = () => {
  return (
    <div className="w-screen bottom-0 flex justify-center items-center bg-lightbg  bg-[repeating-linear-gradient(45deg,var(--color-lightborder)_0_1px,transparent_1px_8px)]
     dark:bg-[repeating-linear-gradient(45deg,var(--color-darkborder)_0_1px,transparent_1px_8px)]">
      <div className="w-11/12 lg:w-3/5 relative bg-white border-x border-border  dark:border-darkborder  
      ">
        <div className="h-40 w-full flex flex-col items-end justify-center">
  <p className="text-secondary-text px-4  text-md dark:text-darksecondary-text">
    - Inspired by  
    <a className="px-2 underline" href="https://tailwindcss.com/">tailwindcss.com</a> 
    & 
    <a className="px-2 underline" href="https://chanhdai.com/">chanhdai.com</a>
  </p>
  
  <p className="text-secondary-text px-4 text-md dark:text-darksecondary-text">
    Built by
    <a className="px-2 underline" href="https://x.com/Prat_Telang">Prat_Telang</a>
  </p>
</div>

      </div>
    </div>
  );
};
