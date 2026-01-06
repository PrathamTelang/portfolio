import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    "$schema": "https://ui.shadcn.com/schema/registry.json",
    "name": "tailang",
    "items": [
      {
        "name": "spotlight-card",
        "type": "registry:component",
        "files": ["registry/components/spotlight-card"]
      }
    ]
  })
}
