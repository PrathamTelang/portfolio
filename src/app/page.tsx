import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Background } from "./components/Backgroud";
import { Bar } from "./components/Bar";
import { Line } from "./components/Line";
import { Skills } from "./components/TechStack";
import { Education } from "./components/Education";
import SocialLinks from "./components/SocialLink";
import Projects from "./components/Projects"
import { Navbar } from "./components/Navbar";
import GitHubContributions from "./components/GithubContributions";
import { Footer } from "./components/Footer";


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
