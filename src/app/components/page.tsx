// src/app/components/page.tsx
import { Bar } from "../features/portfolio/components/Bar";
import Grid from "../features/portfolio/components/Grid";


const components = [
  { name: "Button", slug: "button", image: "/components/button.png" },
  { name: "Badge", slug: "badge", image: "/components/badge.png" },
  { name: "Input", slug: "input", image: "/components/input.png" },
  { name: "Card", slug: "card", image: "/components/card.png" },
  { name: "SpotlightCard", slug: "spotlight-card", image: "/components/spotlight-card.png" },
  { name: "LiquidButton", slug: "liquid-button", image: "/components/liquid-button.png" },
  { name: "HologramCard", slug: "hologram-card", image: "/components/hologram-card.png" },
  { name: "SparkClickLayer", slug: "spark-click", image: "/components/spark-click.png" },
];

export default function ComponentsPage() {
  return (
    <div className="w-screen ">
      <Bar/>
      <div className="w-screen flex flex-col justify-center items-center bg-lightbg dark:bg-darkbg bg-[repeating-linear-gradient(45deg,var(--color-lightborder)_0_1px,transparent_1px_8px)]
     dark:bg-[repeating-linear-gradient(45deg,var(--color-darkborder)_0_1px,transparent_1px_8px)]">
 <div className="w-11/12 lg:w-3/5  relative bg-white border-x border-lightborder dark:bg-darkbg dark:border-darkborder  
      ">
      <h1 className="pl-4 text-3xl font-semibold dark:text-darkprimary-text" >Beautiful UI components,
          <br />
          crafted with Tailwind CSS.</h1>
    </div>
    <Bar />
      <Grid items={components} />
      <Bar />
      </div>
    </div>
  );
}
