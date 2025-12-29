import type { Metadata } from "next";
import { Source_Code_Pro, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "./features/portfolio/components/Navbar";
import { Footer } from "./features/portfolio/components/Footer";

const sourceCodePro = Source_Code_Pro({
subsets: ['latin'],
weight: ['200','300','400','500','600','700','800','900'],
variable: '--font-source-code-pro',
display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
subsets: ['latin'],
weight: '700',
variable: '--font-space-grotesk',
display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://prathamtelang-portfolio.vercel.app/"),

  title: "Pratham Telang | Design Engineer Portfolio",
  description:
    "Portfolio of Pratham Telang, a full stack developer specializing in modern web applications, React, Next.js, TypeScript, and scalable backend systems.",

  icons: {
    icon: "/icon.svg",
  },

  openGraph: {
    title: "Pratham Telang | Full Stack Developer",
    description:
      "Explore projects, skills, and experience of Pratham Telang — a full stack developer building fast, scalable, and user-focused web applications.",
    url: "https://prathamtelang-portfolio.vercel.app/",
    siteName: "Pratham Telang Portfolio",
    images: [
      {
        url: "/og-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Pratham Telang Portfolio Website Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pratham Telang | Full Stack Developer",
    description:
      "Full stack developer portfolio showcasing projects, skills, and modern web development expertise.",
    images: ["/og-portfolio.png"],
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html  lang="en" suppressHydrationWarning className={`${sourceCodePro.variable} ${spaceGrotesk.variable}`}>
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
      <body className="min-h-screen w-screen">
        <Navbar/>
        <div id="content" className="pt-12">
  {children}
</div>
          <Footer/>
      </body>
    </html>
  );
}
