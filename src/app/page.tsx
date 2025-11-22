import { About } from "./features/portfolio/components/About";
import { Experience } from "./features/portfolio/components/Experience";
import { Hero } from "./features/portfolio/components/Hero";
import { Background } from "./features/portfolio/components/Backgroud";
import { Bar } from "./features/portfolio/components/Bar";
import { Line } from "./features/portfolio/components/Line";
import { Skills } from "./features/portfolio/components/TechStack";
import { Education } from "./features/portfolio/components/Education";
import SocialLinks from "./features/portfolio/components/SocialLink";
import Projects from "./features/portfolio/components/Projects"
import GitHubContributions from "./features/portfolio/components/GithubContributions";
import { Footer } from "./features/portfolio/components/Footer";


export default function Home() {
  return (
   <div className="max-w-screen tracking-tighter text-balance overflow-x-hidden ">
    <div className="h-full max-w-screen">
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
