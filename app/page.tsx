import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ListBrand from "@/components/List-brand";

import ListServices from "@/components/services/List-services";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import PortfolioAnimate from "@/components/PortfolioAnimate";
import AnimatedTabs from "@/components/AnimatedTab";
import { Separator } from "@/components/ui/separator";
export default function Home() {
  return (
   <div>
   <Header/>
   
   <section className="relative">
   <Hero/>
    <div className="container absolute mt-[-52px]  flex justify-center items-center">
      <ListBrand/>
    </div>
      
   </section>

<section>
  
</section>
   <section className="container m-auto mt-36">
    <PortfolioAnimate/>
    
      <ListServices/>
      <section className="mt-20">
      <h1 className="mt-10 font-primary text-2xl font-bold tracking-tight text-[#e8d1bb] sm:text-4xl">Our Realisation</h1>
      <div className="mt-12 flex flex-col items-center justify-center">
      <AnimatedTabs/>
      <Separator className="w-[90%] mt-3 h-[0.2px] mb-20 bg-[#e8d1bb2a]"/>
      </div>
      
      </section>
   </section>
   </div>
  );
}
