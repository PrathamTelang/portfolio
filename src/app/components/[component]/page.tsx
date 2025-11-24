import fs from "fs";
import path from "path";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/shadcn/tabs";
import { CodeBlock } from "@/components/ui/shadcn/code-block";
import { Bar } from "@/app/features/portfolio/components/Bar";

/* -------------------- PAGE -------------------- */

export default function ComponentShowcase({ params }: { params: { component: string } }) {
  const { component } = params;
  const ComponentName = capitalize(component);

  /* ---- Load component source ---- */
  const componentPath = path.join(
    process.cwd(),
    "src/components/ui/custom-components",
    `${ComponentName}.tsx`
  );

  const sourceCode = fs.existsSync(componentPath)
    ? fs.readFileSync(componentPath, "utf8")
    : "Component not found";

  /* ---- Load example code ---- */
  const examplePath = path.join(
    process.cwd(),
    "src/components/ui/custom-components/examples",
    `${component}-example.tsx`
  );

  const exampleCode = fs.existsSync(examplePath)
    ? fs.readFileSync(examplePath, "utf8")
    : "/* No example available */";

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <Bar />

      <div className="px-6 w-3/5 mx-auto space-y-12 border-x bg-background">
        <h1 className="text-3xl font-bold capitalize">{component} Component</h1>
        <p className="text-muted-foreground">Documentation and examples for {component}.</p>

        {/* ---------- Tabs ---------- */}
        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
            <TabsTrigger value="example">Example</TabsTrigger>
          </TabsList>

          {/* Preview */}
          <TabsContent value="preview">
            <Card>
              <CardContent className="py-10">
                <ComponentPreview name={component} />
              </CardContent>
            </Card>
          </TabsContent>

          {/* Source Code */}
          <TabsContent value="code">
            <CodeBlock language="tsx" code={sourceCode} filename={`${ComponentName}.tsx`} />
          </TabsContent>

          {/* Example Code */}
          <TabsContent value="example">
            <CodeBlock language="tsx" code={exampleCode} filename={`${component}-example.tsx`} />
          </TabsContent>
        </Tabs>
      </div>

      <Bar />
    </div>
  );
}

/* -------------- Dynamic Component Preview Loader -------------- */
function ComponentPreview({ name }: { name: string }) {
  try {
    const Comp = require(`../../../components/ui/custom-components/${capitalize(name)}`).default;
    return <Comp />;
  } catch (err) {
    return <div>Preview not available.</div>;
  }
}

/* -------------------- Helpers -------------------- */
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
