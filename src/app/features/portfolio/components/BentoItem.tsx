"use client";

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
  const isEmail = url.startsWith("mailto:");
  const email = isEmail ? url.replace("mailto:", "") : "";

  const [copied, setCopied] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      navigator.vibrate?.(20);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      console.error("Clipboard failed", err);
    }
  };

  const content = (
    <>
      <Line />
      <div className="flex flex-col h-full justify-center items-center p-4 border border-border">
        <div className="text-5xl flex items-center">{icon}</div>
        <div className="flex flex-col justify-center items-center sm:pt-2">
          <h3 className="font-semibold font-serif italic text-xl">{name}</h3>

          {/* 👇 smooth feedback */}
          <p
  className={`flex items-center gap-1 text-sm transition-all duration-300 ${
    copied ? "text-green-400 scale-105" : "text-neutral-400"
  }`}
>
  {copied ? "Copied ✓" : username}
</p>

        </div>
      </div>
      <Line />
    </>
  );

  // 📧 EMAIL → COPY
  if (isEmail) {
    return (
      <button
  onClick={handleCopyEmail}
  className={`block w-full text-left hover:bg-hover transition ${className}`}
>
        {content}
      </button>
    );
  }

  // 🔗 NORMAL LINKS
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`block hover:bg-hover transition ${className}`}
    >
      {content}
    </Link>
  );
}
