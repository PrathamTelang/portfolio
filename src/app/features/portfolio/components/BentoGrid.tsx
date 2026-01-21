import React from "react";

export function BentoGrid({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
        relative z-20
        grid grid-cols-1
        md:grid-cols-4
        md:auto-rows-[175.6px]
        lg:auto-rows-[153.2px]
        xl:auto-rows-[215.6px]
        2xl:auto-rows-[230px]
      "
    >
      {children}
    </div>
  );
}
