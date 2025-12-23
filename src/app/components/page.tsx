// src/app/components/page.tsx
import { Bar } from "../features/portfolio/components/Bar";
import Grid from "../features/portfolio/components/Grid";


const components = [
  { name: "SpotlightCard", slug: "spotlight-card", image: "/components/thumbnails/og-card.png" },
  { name: "SparkClickLayer", slug: "spark-click", image: "/components/thumbnails/spark-click.png" },
  { name: "NewtonCradleLoader", slug: "newton-cradle-loader", image: "/components/thumbnails/newton-cradle-loader.png" },
  { name: "OfferButton", slug: "offer-button", image: "/components/thumbnails/offer-button.png" },
];

export default function ComponentsPage() {
  return (
    <div className="w-screen ">
      <Bar/>
      <div className="w-screen flex flex-col justify-center items-center bg-background  bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)]
     ">
 <div className="w-11/12 lg:w-3/5  relative bg-background border-x border-border    
      ">
      <h1 className="pl-4 text-3xl font-semibold " >Beautiful UI components,
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
