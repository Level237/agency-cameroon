import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ListBrand from "@/components/List-brand";

import ListServices from "@/components/services/List-services";
import InfiniteCarousel from "@/components/InfiniteCarousel";
import PortfolioAnimate from "@/components/PortfolioAnimate";
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
      
   </section>
   </div>
  );
}
