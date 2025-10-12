
export const FilledBar = () => {
  return (
    <div className="w-screen">
      <div className="w-screen h-[1px] bg-[#E5E5E5]" />
      <div className="flex justify-center h-8 bg-[repeating-linear-gradient(45deg,#E5E5E5_0_1px,transparent_1px_10px)]" >
        <div className="border-x w-3/5 h-8 border-[#E5E5E5] max-[475px]:w-11/12"></div>
      </div>
      <div className="w-screen h-[1px] bg-[#E5E5E5]" />
    </div>
  );
};
