import { About } from "./components/sections/About";
import { Experience } from "./components/sections/Experience";
import { Hero } from "./components/sections/Hero";
import { Background } from "./components/sections/Backgroud";
import { Bar } from "./components/sections/Bar";
import { Line } from "./components/sections/Line";
import { Skills } from "./components/sections/TechStack";
import { Education } from "./components/sections/Education";
import SocialLinks from "./components/sections/SocialLink";
import Projects from "./components/sections/Projects"
import { Navbar } from "./components/sections/Navbar";
import GitHubContributions from "./components/sections/GithubContributions";
import { Footer } from "./components/sections/Footer";


export default function Home() {
  return (
   <div className="max-w-screen tracking-tighter text-balance overflow-x-hidden ">
    <div className="h-full max-w-screen bg-[#FCFCFC] bg-[repeating-linear-gradient(45deg,var(--color-lightborder)_0_1px,transparent_1px_8px)]
    dark:bg-darkbg dark:bg-[repeating-linear-gradient(45deg,var(--color-darkborder)_0_1px,transparent_1px_8px)]">
      <Navbar/>
      <Background/>
      <Line/>
      <Hero />
      <Bar/>
      <About/>
      <Bar/>
      <Experience/>
      <Bar/>
      <Projects/>
      <Bar/>
      <GitHubContributions/>
      <Bar/>
      <Skills/>
      <Bar/>
      <SocialLinks/>
      <Bar/>
      <Education/>
      <Bar/>
      <Footer/>
    </div>
   </div>
  );
}
