import Link from "next/link";
import { Line } from "./Line";
import React from "react";

type BentoItemProps = {
  name: string;
  username: string;
  icon: React.ReactNode;
  url: string;
  className?: string;
};

export function BentoItem({
  name,
  username,
  icon,
  url,
  className = "",
}: BentoItemProps) {
  return (
    <Link
      href={url}
      className={`block hover:bg-hover transition ${className}`}
    >
      <Line />
      <div className="flex flex-col h-full justify-center items-center p-4 border border-border">
        <div className="text-5xl flex items-center">
          {icon}
        </div>
        <div className="flex flex-col justify-center items-center sm:pt-2">
          <h3 className="font-semibold font-serif italic text-xl">{name}</h3>
          <p className="text-sm text-neutral-400">{username}</p>
        </div>
      </div>
      <Line />
    </Link>
  );
}
