import Image from "next/image";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";

export default function Home() {
  return (
    <main >
      <Hero />
      <About />
      <Process />
      
      <div className="h-[50vh] bg-white flex items-center justify-center">
        <p className="text-gray-400">Próximas seções virão aqui...</p>
      </div>
    </main>
  );
}
