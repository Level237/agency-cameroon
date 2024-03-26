import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
   <div>
   <Header/>
   
   <section className="relative">
   <Hero/>
    <div className="container absolute mt-[-52px]  flex justify-center items-center">
    <div className="flex border border-[#e09a3956]  mb-36 justify-center rounded bg-[#2b0f10] w-[80vw] h-full">
      <Image
            src="/agency.png"
            width="100"
            height="100"
            alt="logo agency cameroon"
            />
            <Image
            src="/agency.png"
            width="100"
            height="100"
            alt="logo agency cameroon"
            />
            <Image
            src="/agency.png"
            width="100"
            height="100"
            alt="logo agency cameroon"
            />
            <Image
            src="/agency.png"
            width="100"
            height="100"
            alt="logo agency cameroon"
            />
             <Image
            src="/agency.png"
            width="100"
            height="100"
            alt="logo agency cameroon"
            />
             <Image
            src="/agency.png"
            width="100"
            height="100"
            alt="logo agency cameroon"
            />
      </div>
    </div>
      
   </section>
   </div>
  );
}
