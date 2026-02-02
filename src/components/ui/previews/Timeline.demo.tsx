"use client"

import Timeline, { TimelineItem } from "../custom-components/Timeline"

const timelineData: TimelineItem[] = [
  {
    title: "Mechanical Era",
    role: "Mechanical Tools",
    date: "Pre-1800s",
    description:
      "Early machines powered by human or animal force, laying the foundation for automation.",
    image: "/components/assets/a-brief-history-of-machine-tools.jpg",
  },
  {
    title: "Electronic Computing",
    role: "Vacuum Tubes",
    date: "1940s–1950s",
    description:
      "The first electronic computers used vacuum tubes to perform calculations at scale.",
    image: "/components/assets/vacuum-tube-computer-1940s.jpeg",
  },
  {
    title: "Microprocessor Age",
    role: "Integrated Circuits",
    date: "1970s",
    description:
      "Single-chip CPUs enabled smaller, faster, and more affordable computing devices.",
    image: "/components/assets/microprocessor-chip-1970s.avif",
  },
  { 
    title: "Mobile Computing", 
    role: "Smartphones", 
    date: "2007–2010s", 
    description: "Powerful handheld devices merged computing, communication, and the internet into one platform.", 
    image: "/components/assets/smartphone-evolution-timeline.webp",
  },
  { 
    title: "Cloud Infrastructure", 
    role: "Data Centers", 
    date: "2010s", 
    description: "Scalable cloud platforms replaced local servers with on-demand global infrastructure.", 
    image: "/components/assets/cloud-computing-data-center.webp", 
  },
  { 
    title: "Artificial Intelligence", 
    role: "Machine Learning", 
    date: "2020s–Future", 
    description: "Algorithms capable of learning and reasoning now drive automation, insights, and new products.", 
    image: "/components/assets/artificial-intelligence-neural-network-illustration.png", 
  }
]

export default function TimelineDemo() {
  return (
    <div>
      <Timeline items={timelineData} />
    </div>
  )
}
