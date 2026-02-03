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
  children?: React.ReactNode; // 👈 ADD THIS
};

export function BentoItem({
  name,
  username,
  icon,
  url,
  className = "",
  children,
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
  <div className="relative group h-full group-hover:opacity-0 transition-opacity
">
    <Line />

    {/* 👇 hover child slot */}
    {children && (
      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-300
          z-10
        "
      >
        {children}
      </div>
    )}

    <div className="relative z-20 flex flex-col h-full justify-center items-center p-4 border border-border transition-opacity duration-300
    group-hover:opacity-0
">
      <div className="text-5xl flex items-center">{icon}</div>

      <div className="flex flex-col justify-center items-center sm:pt-2">
        <h3 className="font-semibold font-serif italic text-xl">
          {name}
        </h3>

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
  </div>
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
