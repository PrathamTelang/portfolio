import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function ComponentShowcase({
  title,
  children,
  code,
}: {
  title: string;
  children: React.ReactNode;  // live component preview
  code: string;               // string showing component source
}) {
  return (
    <Card className="p-6 my-10 bg-zinc-950 border-zinc-800">
      <h2 className="text-xl font-bold mb-4">{title}</h2>

      <Tabs defaultValue="preview" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="preview" className="p-4 border rounded-lg">
          {children}
        </TabsContent>

        <TabsContent
          value="code"
          className="text-sm p-4 border rounded-lg bg-zinc-900 overflow-x-auto"
        >
          <pre>
            <code>{code}</code>
          </pre>
        </TabsContent>
      </Tabs>
    </Card>
  );
}
