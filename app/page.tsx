import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import ListBrand from "@/components/List-brand";
import { Separator } from "@/components/ui/separator";
import ListServices from "@/components/services/List-services";
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

   <section className="container m-auto mt-36">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-white font-bold text-4xl">Nos Services</h2>
        <Separator className="w-36 h-1 mr-16 bg-[#e09a39]"/>
      </div>
      <ListServices/>
   </section>
   </div>
  );
}
