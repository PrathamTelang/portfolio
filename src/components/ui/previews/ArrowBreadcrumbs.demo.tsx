"use client"

import { useState } from "react";
import ArrowBreadcrumbs from "../custom-components/ArrowBreadcrumbs";


export default function ArrowBreadcrumbsDemo() {
        const [activeIndex, setActiveIndex] = useState(2)
  return (
<ArrowBreadcrumbs
  items={[
    { label: "Home", active: activeIndex === 0 },
    { label: "Projects", active: activeIndex === 1 },
    { label: "PulseRead", active: activeIndex === 2 },
  ]}
  onItemClick={setActiveIndex}
/>   
  );
}
