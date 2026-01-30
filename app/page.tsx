import Image from "next/image";

import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Products } from "@/components/sections/Products";
import { Quotes } from "@/components/sections/Quotes";
import { BudgetForm } from "@/components/sections/BudgetForm";

export default function Home() {
  return (
    <main >
      <Hero />
      <About />
      <Process />
      <Products />
      <Quotes />
      <BudgetForm />
    </main>
  );
}
