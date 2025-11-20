// src/app/components/page.tsx
import Link from "next/link";

const components = [
  { name: "Button", slug: "button" },
  { name: "Badge", slug: "badge" },
  { name: "Input", slug: "input" },
  { name: "Card", slug: "card" },
  { name: "Navbar", slug: "navbar" },
];

export default function ComponentsPage() {
  return (
    <div className="min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-8">Components</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {components.map((c) => (
          <Link
            key={c.slug}
            href={`/components/${c.slug}`}
            className="border rounded-xl p-6 hover:bg-neutral-900 transition"
          >
            <h2 className="text-xl font-semibold">{c.name}</h2>
            <p className="text-neutral-400">View component →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
