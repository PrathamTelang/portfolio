import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Background } from "./components/Backgroud";
import { FilledBar } from "./components/FilledBar";
import { Line } from "./components/Line";
import { Skills } from "./components/TechStack";
import { Education } from "./components/Education";
import SocialLinks from "./components/SocialLink";
import Projects from "./components/Projects"
import { Navbar } from "./components/Navbar";


export default function Home() {
  return (
   <div className="max-w-screen tracking-tighter text-balance overflow-x-hidden">
    <div className="h-full max-w-screen bg-[#FCFCFC] bg-[repeating-linear-gradient(45deg,#e5e5e5_0_1px,transparent_1px_8px)]">
      <Navbar/>
      <Background/>
      <Line/>
      <Hero />
      <FilledBar/>
      <About/>
      <FilledBar/>
      <Experience/>
      <FilledBar/>
      <Projects/>
      <FilledBar/>
      <Skills/>
      <FilledBar/>
      <SocialLinks/>
      <FilledBar/>
      <Education/>
      <FilledBar/>
    </div>
   </div>
  );
}
