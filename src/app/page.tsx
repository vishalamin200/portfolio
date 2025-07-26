import  { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contanct";
import Intro from "@/components/sections/Intro";
import Navbar from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import clsx from "clsx";


export default function Home() {
  return (
    <div className={clsx("w-full overflow-hidden mx-auto")}>
        
        <Navbar/>
        <Intro/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  );
}
