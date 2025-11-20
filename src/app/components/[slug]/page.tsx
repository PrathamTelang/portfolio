// src/app/components/[slug]/page.tsx
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

// Map the slug to the actual component file
const componentMap: Record<string, any> = {
  button: dynamic(() => import("../../../components/ui/custom-components/Buttonnn")),
  badge: dynamic(() => import("../../../components/ui/custom-components/Badge")),
  input: dynamic(() => import("../../../components/ui/custom-components/Input")),
  card: dynamic(() => import("../../../components/ui/custom-components/Card")),
};

export default function ComponentPreview({ params }: any) {
  const Component = componentMap[params.slug];

  if (!Component) return notFound();

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold capitalize mb-8">{params.slug} Component</h1>

      <div className="border rounded-xl p-10 bg-neutral-900">
        <Component />
      </div>
    </div>
  );
}
