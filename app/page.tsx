import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import ListBrand from "@/components/List-brand";
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
   </div>
  );
}
