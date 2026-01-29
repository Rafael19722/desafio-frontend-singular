import Image from "next/image";

import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main >
      <Hero />

      <div className="h-[50vh] bg-white flex items-center justify-center">
        <p className="text-gray-400">Próximas seções virão aqui...</p>
      </div>
    </main>
  );
}
