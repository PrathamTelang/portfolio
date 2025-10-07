import Image from "next/image";
import { Header } from "./components/header";
import { About } from "./components/about";


export default function Home() {
  return (
   <div className="bg-white h-screen w-screen flex justify-center">
    <div className="h-screen w-3/4 bg-amber-50">
      <Header></Header>
      <About></About>
    </div>
   </div>
  );
}
