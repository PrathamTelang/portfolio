import type { Metadata } from "next";
import {  Instrument_Serif, Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "./features/portfolio/components/Navbar";
import { Footer } from "./features/portfolio/components/Footer";

const geist = Geist({
subsets: ['latin'],
weight: ['200','300','400','500','600','700','800','900'],
variable: '--font-geist',
display: 'swap',
})

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
})


export const metadata: Metadata = {
  metadataBase: new URL("https://prathamtelang-portfolio.vercel.app"),

  alternates: {
  canonical: "https://prathamtelang-portfolio.vercel.app",
},

  title: "Pratham Telang | Design Engineer",
  description:
    "Portfolio of Pratham Telang, a full stack developer specializing in modern web applications, React, Next.js, TypeScript, and scalable backend systems.",

  icons: {
    icon: "/Pratham.png",
  },
openGraph: {
  title: "Pratham Telang | Design Engineer",
  description:
    "Portfolio of Pratham Telang, a Design Engineer crafting expressive, performant web interfaces and systems.",
  url: "https://prathamtelang-portfolio.vercel.app",
  siteName: "Pratham Telang Portfolio",
  images: [
    {
      url: "https://prathamtelang-portfolio.vercel.app/og-portfolio.png",
      width: 1200,
      height: 630,
      alt: "Pratham Telang Portfolio Website Preview",
    },
  ],
  type: "website",
},

twitter: {
  card: "summary_large_image",
  title: "Pratham Telang | Design Engineer",
  description:
    "Design Engineer portfolio showcasing interfaces, systems, and modern web experiences.",
  images: {
    url: "https://prathamtelang-portfolio.vercel.app/og-portfolio.png",
    alt: "Pratham Telang Portfolio Website Preview",
  },
},

};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html  lang="en" suppressHydrationWarning className={`${geist.variable} ${instrumentSerif.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className="min-h-screen w-screen overflow-x-hidden">
        <Navbar/>
        <div id="content" className="pt-12">
  {children}
</div>
          <Footer/>
      </body>
    </html>
  );
}
