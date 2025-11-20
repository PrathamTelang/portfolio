"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-semibold text-white">
          Portfolio
        </Link>

        <div className="flex items-center gap-6 text-white/80">
          <Link href="#projects" className="hover:text-white">
            Projects
          </Link>
          <Link href="#skills" className="hover:text-white">
            Skills
          </Link>
          <Link href="#contact" className="hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
