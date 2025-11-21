// src/app/components/page.tsx
import Grid from "../features/portfolio/components/Grid";

const components = [
  { name: "Button", slug: "button" },
  { name: "Badge", slug: "badge" },
  { name: "Input", slug: "input" },
  { name: "Card", slug: "card" },
  { name: "Navbar", slug: "navbar" },
];

export default function ComponentsPage() {
  return (
    <Grid items={components} />
  );
}
