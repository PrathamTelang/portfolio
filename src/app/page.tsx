import Image from "next/image";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Background } from "./components/Backgroud";
import { Bar } from "./components/Bar";
import { Line } from "./components/Line";


export default function Home() {
  return (
   <div className="bg-white h-full w-screen flex justify-center">
    
    <div className="h-full w-3/5 border-2 border-[#E5E5E5] border-dotted bg-[#FCFCFC]">
      <Background/>
      <Line/>
      <Hero />
      <Bar/>
      <About/>
      <Bar/>
      <Experience/>
      <Bar/>
    </div>
   </div>
  );
}
