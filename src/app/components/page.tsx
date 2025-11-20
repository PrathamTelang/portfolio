// src/app/components/page.tsx
import Link from "next/link";
import { Line } from "../features/portfolio/components/Line";

const components = [
  { name: "Button", slug: "button" },
  { name: "Badge", slug: "badge" },
  { name: "Input", slug: "input" },
  { name: "Card", slug: "card" },
  { name: "Navbar", slug: "navbar" },
];

export default function ComponentsPage() {
  return (
    <div className="max-w-screen tracking-tighter text-balance overflow-x-hidden ">
    <div className="h-full max-w-screen bg-[#FCFCFC] bg-[repeating-linear-gradient(45deg,var(--color-lightborder)_0_1px,transparent_1px_8px)]
    dark:bg-darkbg dark:bg-[repeating-linear-gradient(45deg,var(--color-darkborder)_0_1px,transparent_1px_8px)]">
      <div className="relative isolate mt-16 bg-lightbg dark:bg-darkbg">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 gap-10 max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4"><div className="border-r border-gray-950/5 dark:border-white/10"></div><div className="border-l border-gray-950/5 lg:border-x dark:border-white/10"></div><div className="border-l border-gray-950/5 max-lg:hidden xl:border-x dark:border-white/10"></div><div className="border-l border-gray-950/5 max-xl:hidden dark:border-white/10"></div>
        </div>
        <ul className="grid grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 xl:grid-cols-4">
          {components.map((c) => (
          <Link
            key={c.slug}
            href={`/components/${c.slug}`}
            className=" hover:bg-neutral-900 transition"
          >
            <Line/>
            <h2 className="text-xl font-semibold pl-4">{c.name}</h2>
            <p className="text-neutral-400 pl-4">View component →</p>
            <Line/>
          </Link>
        ))}
    </ul>
    </div>
    </div>
    </div>
  );
}
