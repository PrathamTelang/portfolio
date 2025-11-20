"use client";

import Button from "./sections/Button";
import ComponentShowcase from "./showcase/ComponentShowcase";
import Badge from "./ui/Badge";
import Buttonnn from "./ui/Buttonnn";
import { Card } from "./ui/Card";


export default function ComponentsPage() {
  return (
    <div className="max-w-4xl mx-auto py-20 text-white">
      <h1 className="text-4xl font-bold mb-10">UI Components</h1>

      <ComponentShowcase
        title="Button"
        code={`<Buttonnn variant="default">Click me</Buttonnn>`}
      >
        <Buttonnn variant="default">Click me</Buttonnn>
      </ComponentShowcase>

      <ComponentShowcase
        title="Badge"
        code={`<Badge variant="success">Success</Badge>`}
      >
        <Badge variant="success">Success</Badge>
      </ComponentShowcase>

      <ComponentShowcase
        title="Card"
        code={`<Card>Card Content</Card>`}
      >
        <Card>Card Content</Card>
      </ComponentShowcase>
    </div>
  );
}
