import { readFile } from "fs/promises"
import path from "path"
import { NextResponse } from "next/server"

/**
 * Map shadcn install names → your actual file names
 */
const COMPONENT_MAP: Record<string, string> = {
  "spotlight-card": "SpotlightCard.tsx",
  "spark-click-layer": "SparkClickLayer.tsx",
  "offer-button": "OfferButton.tsx",
  "newton-cradle-loader": "NewtonCradleLoader.tsx",
}

export async function GET(
  _: Request,
  { params }: { params: { slug: string } }
) {
  const fileName = COMPONENT_MAP[params.slug]

  if (!fileName) {
    return new NextResponse("Component not found", { status: 404 })
  }

  const filePath = path.join(
    process.cwd(),
    "src/components/ui/custom-components",
    fileName
  )

  const content = await readFile(filePath, "utf8")

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
