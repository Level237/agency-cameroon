import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";
import { Badge } from "@/components/ui/badge"
import ListBrand from "@/components/List-brand";
import { Separator } from "@/components/ui/separator";
import ListServices from "@/components/services/List-services";
import { PinContainer } from "@/components/ui/3d-pin";
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
        <h2 className="text-white font-bold text-4xl font-primary">our Services</h2>
        <Separator className="w-36 h-1 mr-16 bg-[#e09a39]"/>
      </div>
      <div className="grid mt-11 mb-11 grid-cols-3 container">
      <PinContainer
        title="Design Graphic"
        link="home"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold font-secondary text-[#e8d1bb]  text-base text-slate-100">
            Design graphic
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="web development"
        link="home"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            web development
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      <PinContainer
        title="UI Design"
        link="/web"
      >
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            UI Design
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
      </PinContainer>
      </div>
      
   </section>
   </div>
  );
}
