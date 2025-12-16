import fs from "fs";
import path from "path";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/shadcn/tabs";
import { CodeBlock } from "@/components/ui/shadcn/code-block";
import { Bar } from "@/app/features/portfolio/components/Bar";


/* -------------------- COMPONENT MAP -------------------- */
const componentMap: Record<string, string> = {
  "spotlight-card": "SpotlightCard",
  "liquid-button": "LiquidButton",
  "spark-click": "SparkClickLayer",
  "newton-cradle-loader": "NewtonCradleLoader",
};



const previewDefaults: Record<string, any> = {
  SpotlightCard: {
  title: "Ultimate UI Experience",
  description: "Interactive glassmorphism spotlight card.",
  },
  LiquidButton: {
    children: "Liquid Button",
  },
  SparkClickLayer: {
    // No props needed
  },
  NewtonCradleLoader: {
    // No props needed
  },
};



/* -------------------- PAGE -------------------- */
export default async function ComponentShowcase({
  params,
}: {
  params: Promise<{ component: string }>;
}) {
  const { component } = await params;

  const ComponentName = componentMap[component] || capitalize(component);

  /* -------- Load component source (tsx) -------- */
  const componentPath = path.join(
    process.cwd(),
    "src/components/ui/custom-components",
    `${ComponentName}.tsx`
  );

  const sourceCode = fs.existsSync(componentPath)
    ? fs.readFileSync(componentPath, "utf8")
    : "Component not found";

  /* -------- Load markdown docs -------- */
  const docsDir = path.join(
    process.cwd(),
    "docs/custom-components",
    component
  );

  const installation = safeRead(path.join(docsDir, "installation.md"));
  const usage = safeRead(path.join(docsDir, "usage.md"));
  const example = safeRead(path.join(docsDir, "example.md"));

  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <Bar />

      <div className="px-6 w-11/12 lg:w-3/5 mx-auto border-x bg-background">
        <h1 className="text-3xl font-bold capitalize">{component} Component</h1>
        <p className="text-muted-foreground">Documentation, preview, and source code.</p>

        <Tabs defaultValue="preview" className="w-full">
          <TabsList>
            <TabsTrigger value="preview">Preview</TabsTrigger>
            <TabsTrigger value="code">Code</TabsTrigger>
          </TabsList>
          {/*------------ Preview Tab --------- */}
          <TabsContent value="preview">
            <Card>
              <CardContent className="py-10">
                <ComponentPreview name={component} />
              </CardContent>
            </Card>
          </TabsContent>
          {/*------------ Code Tab --------- */}
          <TabsContent value="code">
            <CodeBlock
              language="tsx"
              code={sourceCode}
              filename={`${ComponentName}.tsx`}
            />
          </TabsContent>

          {/* Installation, Usage, Example appear directly under preview */}
            <div className="prose dark:prose-invert mt-10 space-y-10">
              {/* -------- Installation -------- */}
              <section>
                <h2>Installation</h2>
                <CodeBlock
                  language="tsx"
                  code={installation}
                />
              </section>
              {/* -------- Usage -------- */}
              <section>
                <h2>Usage</h2>
                <CodeBlock
                  language="tsx"
                  code={usage}
                />
              </section>
              {/* -------- Example -------- */}
              <section>
                <h2>Example</h2>
                <CodeBlock
                  language="tsx"
                  code={example}
                />
              </section>
            </div>
        </Tabs>
      </div>
      <Bar />
    </div>
  );
}

/* -------------------- SAFE FILE READER -------------------- */
function safeRead(filePath: string) {
  return fs.existsSync(filePath)
    ? fs.readFileSync(filePath, "utf8")
    : "*No documentation available.*";
}

/* -------------- Dynamic Component Preview Loader -------------- */
function ComponentPreview({ name }: { name: string }) {
  try {
    const Comp =
      require(`../../../components/ui/custom-components/${componentMap[name] || capitalize(name)}`).default;

    const defaults = previewDefaults[componentMap[name] || capitalize(name)] || {};

    return <Comp {...defaults} />;
  } catch (err) {
    console.error("PREVIEW ERROR:", err);
    return <div>Preview not available.</div>;
  }
}



/* -------------------- Helpers -------------------- */
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
