import Image from "next/image";

import { getDictionary, Locale } from "@/lib/get-dictionary";

import { Header } from "@/components/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Products } from "@/components/sections/Products";
import { Quotes } from "@/components/sections/Quotes";
import { BudgetForm } from "@/components/sections/BudgetForm";
import { Footer } from "@/components/Footer";

export default async function Home( {
  params,
}: {
  params: Promise<{lang: Locale}>;
}) {
  const { lang } = await params;

  const dict = await getDictionary(lang);

  return (
    <main >
      <Header lang={lang} dict={dict.header}/>
      <Hero dict={dict.hero}/>
      <About dict={dict.about}/>
      <Process dict={dict.process}/>
      <Products dict={dict.products}/>
      <Quotes dict={dict.quotes}/>
      <BudgetForm dict={dict.budget}/>
      <Footer dict={dict.footer}/>
    </main>
  );
}
