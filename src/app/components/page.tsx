// src/app/components/page.tsx
import { image } from "motion/react-client";
import { Bar } from "../features/portfolio/components/Bar";
import { Footer } from "../features/portfolio/components/Footer";
import Grid from "../features/portfolio/components/Grid";
import { Line } from "../features/portfolio/components/Line";

const components = [
  { name: "Button", slug: "button", image: "/components/button.png" },
  { name: "Badge", slug: "badge", image: "/components/badge.png" },
  { name: "Input", slug: "input", image: "/components/input.png" },
  { name: "Card", slug: "card", image: "/components/card.png" },
];

export default function ComponentsPage() {
  return (
    <div className="w-screen ">
      <Bar/>
      <div className="w-screen flex flex-col justify-center items-center bg-lightbg dark:bg-darkbg bg-[repeating-linear-gradient(45deg,var(--color-lightborder)_0_1px,transparent_1px_8px)]
     dark:bg-[repeating-linear-gradient(45deg,var(--color-darkborder)_0_1px,transparent_1px_8px)]">
 <div className="w-3/5 relative bg-white border-x border-lightborder dark:bg-darkbg dark:border-darkborder  max-[475px]:w-11/12
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
