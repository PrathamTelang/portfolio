import Image from "next/image";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Background } from "./components/Backgroud";
import { Bar } from "./components/Bar";
import { Line } from "./components/Line";
import { Skills } from "./components/Skills";
import SocialLinks from "./components/SocialLink";


export default function Home() {
  return (
   <div className="max-w-screen overflow-x-hidden">
    <div className="h-full max-w-screen bg-[#FCFCFC]">
      <Background/>
      <Line/>
      <Hero />
      <Bar/>
      <About/>
      <Bar/>
      <Experience/>
      <Bar/>
      <Skills/>
      <Bar/>
      <SocialLinks/>
    </div>
   </div>
  );
}
