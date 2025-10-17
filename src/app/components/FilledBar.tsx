
export const FilledBar = () => {
  return (
    <div className="w-screen">
      <div className="w-screen h-[1px] bg-[#e5e5e5]" />
      <div className="flex justify-center h-8 " >
        <div className="border-x w-3/5 h-8 bg-white border-[#e5e5e5] max-[475px]:w-11/12"></div>
      </div>
      <div className="w-screen h-[1px] bg-[#e5e5e5]" />
    </div>
  );
};
