import path from "path";
import * as React from "react";

export const registry = [
  {
    name: "Button",
    slug: "button",
    path: "Button",
    preview: () => {
      const Button = require("./Button").default;
      return React.createElement(Button, null, "Click me");
    },
    examplePath: "Button.example.tsx",
  },
  {
    name: "Badge",
    slug: "badge",
    path: "Badge",
    preview: () => {
      const Badge = require("./Badge").default;
      return React.createElement(Badge, null, "Badge");
    },
    examplePath: "Badge.example.tsx",
  },
    {
    name: "Input",
    slug: "input", 
    path: "Input",
    preview: () => {
      const Input = require("./Input").default;
      return React.createElement(Input, { placeholder: "Type here..." });
    },
    examplePath: "Input.example.tsx",
  },
  {
    name: "Card",
    slug: "card",
    path: "Card",
    preview: () => {
      const Card = require("./Card").default;
      return React.createElement(Card, null, "This is a custom card component.");
    },
    examplePath: "Card.example.tsx",
  },
];
