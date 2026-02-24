import { Bar } from "../features/portfolio/components/Bar";
import Grid from "../features/portfolio/components/Grid";


const components = [
  { name: "ArrowBreadcrumbs", slug: "ArrowBreadcrumbs", image: "/components/thumbnails/og-arrow-breadcrumbs.png" },
  { name: "Timeline", slug: "Timeline", image: "/components/thumbnails/og-timeline.png" },
  { name: "SlideToUnlock", slug: "SlideToUnlock", image: "/components/thumbnails/og-slide-to-unlock.png" },
];

export default function ComponentsPage() {
  return (
    <div className="w-screen ">
      <Bar/>
      <div className="w-screen flex flex-col justify-center items-center bg-background  bg-[repeating-linear-gradient(45deg,var(--color-border)_0_1px,transparent_1px_8px)]
      edge-fade-x">
 <div className="w-11/12 lg:w-3/5  relative bg-background border-x border-border    
      ">
      <h1 className="pl-4 text-3xl font-semibold">Reusable UI components <br/> designed to move beautifully.</h1>
    </div>
    <Bar />
      <Grid items={components} />
      <Bar />
      </div>
    </div>
  );
}
