
export const Footer = () => {
  return (
    <div className="w-screen flex justify-center items-center ">
      <div className="w-3/5 relative bg-white border-x border-lightborder dark:bg-darkbg dark:border-darkborder  max-[475px]:w-11/12
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
