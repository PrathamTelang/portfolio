
export const Bar = () => {
  return (
    <div className="w-screen dark:bg-darkbg">
      <div className="w-screen h-[1px] bg-lightborder dark:bg-darkborder" />
      <div className="flex justify-center h-8 " >
        <div className="border-x w-3/5 h-8 bg-white border-lightborder dark:bg-darkbg dark:border-darkborder max-[475px]:w-11/12"></div>
      </div>
      <div className="w-screen h-[1px] bg-lightborder dark:bg-darkborder" />
    </div>
  );
};
