import fs from "fs";
import path from "path";
import { Card, CardContent } from "@/components/ui/shadcn/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/shadcn/tabs";
import { CodeBlock } from "@/components/ui/shadcn/code-block";

export default function ComponentShowcase({ params }: { params: { component: string } }) {
  const { component } = params;

  // Read source code dynamically
  const filePath = path.join(
    process.cwd(),
    "src/components/ui/custom-components",
    `${component.charAt(0).toUpperCase() + component.slice(1)}.tsx`
  );

  let sourceCode = "Component not found";
  if (fs.existsSync(filePath)) {
    sourceCode = fs.readFileSync(filePath, "utf8");
  }

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto space-y-12">
      
      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold capitalize">{component} Component</h1>
        <p className="text-muted-foreground mt-1">
          Documentation, examples and usage for the {component} component.
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="preview" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview">
          <Card>
            <CardContent className="py-10">
              {component === "button" && <YourButton />}
              {component === "badge" && <YourBadge />}
              {component === "input" && <YourInput />}
              {component === "card" && <YourCard />}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <pre className="whitespace-pre-wrap  overflow-x-auto">
            <CodeBlock
        language="tsx"
        filename={`${capitalize(component)}.tsx`}
        code={sourceCode}
      />
          </pre>
        </TabsContent>
      </Tabs>

      {/* -------- Extra Documentation Sections -------- */}

      {/* FEATURES */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1">
          <li>Lightweight, customizable UI component.</li>
          <li>Theme-aware and fully responsive.</li>
          <li>Works seamlessly with Tailwind and Shadcn.</li>
          <li>Simple API with flexible styling.</li>
        </ul>
      </section>

      {/* INSTALLATION */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Installation</h2>
        <pre className="rounded-md border bg-card p-4 font-mono text-sm">
npm install @your/components/{component}
        </pre>
      </section>

      {/* USAGE */}
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Usage</h2>
        <pre className="rounded-md border bg-card p-4 font-mono text-sm">
{`import { ${capitalize(component)} } from "@/components/ui/custom-components/${capitalize(component)}";

<${capitalize(component)}>Example</${capitalize(component)}>`}
        </pre>
      </section>

      {/* EXAMPLES */}
      <section className="space-y-2 pb-10">
        <h2 className="text-xl font-semibold">Examples</h2>
        <pre className="rounded-md border bg-card p-4 font-mono text-sm">
{exampleCode(component)}
        </pre>
      </section>

    </div>
  );
}

/* -------- Helper Components -------- */

function YourButton() {
  const Button = require("../../../components/ui/custom-components/Buttonnn").default;
  return <Button>Click me</Button>;
}

function YourBadge() {
  const Badge = require("../../../components/ui/custom-components/Badge").default;
  return <Badge>Badge</Badge>;
}

function YourInput() {
  const Input = require("../../../components/ui/custom-components/Input").default;
  return <Input placeholder="Type here..." />;
}

function YourCard() {
  const CustomCard = require("../../../components/ui/custom-components/Input").default;
  return <CustomCard>This is a custom card component.</CustomCard>;
}

/* -------- Helpers -------- */
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function exampleCode(component: string) {
  switch (component) {
    case "badge":
      return `<div className="flex gap-3">
  <Badge>Default</Badge>
  <Badge variant="secondary">Secondary</Badge>
  <Badge variant="outline">Outline</Badge>
</div>`;
    case "button":
      return `<Button>Click me</Button>`;
    case "input":
      return `<Input placeholder="Type here..." />`;
    default:
      return `No examples available.`;
  }
}
