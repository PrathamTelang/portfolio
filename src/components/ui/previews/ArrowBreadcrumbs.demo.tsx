import ArrowBreadcrumbs from "../custom-components/ArrowBreadcrumbs";


export default function ArrowBreadcrumbsDemo() {
  return (
    
      <ArrowBreadcrumbs
        items={[
          { label: "Home" },
          { label: "Projects" },
          { label: "PulseRead", active: true },
        ]}
      />
    
  );
}
