import Image from "next/image";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Background } from "./components/Backgroud";


export default function Home() {
  return (
   <div className="bg-white h-screen w-screen flex justify-center">
    
    <div className="h-screen w-3/5 p-4 border-2 border-[#E5E5E5] border-dotted bg-[#FCFCFC]">
      <Background/>
      <Header/>
      <div className="w-full h-[1px] bg-[#E5E5E5]"></div>
      <About/>
      <div className="w-full h-[1px] bg-[#E5E5E5]"></div>
      <Experience/>
    </div>
   </div>
  );
}
