

import { BoxesCore } from '@/components/ui/background-boxes'
import React from 'react'
import { cn } from "@/lib/utils";
import Header from '@/components/Header';
import { Button } from '@/components/ui/button'
import { PinContainer } from '@/components/ui/3d-pin';

import ListBrand from '@/components/List-brand';
export default function page() {
  return (
    <>
    <Header/>
    <div className="h-full relative w-full overflow-hidden bg-white dark:bg-black flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-black z-20 [mask-image:radial-gradient(transparent,black)] pointer-events-none" />
       
      <BoxesCore />
      <div className="mt-[-50px] flex h-screen items-center justify-center">
    <div className="max-w-full z-[2000000] flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
      <h1 className="mt-10 font-secondary text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
        revolutionize
        <span className="text-[#e8d1bb"> your branding</span> with
        <span className="text-[#513417] font-primary"> Agency</span>
      </h1>
      <p className="mt-6 font-primary text-lg leading-8 text-white">Elevate Your Productivity With Agency, Your Personalized Workflow
        Assistant</p>
      <div className="mt-5 flex items-center justify-center gap-x-6">
      <Button variant="outline" className='text-[#513417] dark:text-white dark:bg-black'>Testimonials</Button>
        <Button variant="default" className='bg-[#513417] dark:text-black dark:bg-[#e8d1bb]'>our portfolio</Button>
      </div>
    </div>
  </div>
 
    </div>
    <section>
    <ListBrand/>
   
    </section>
    
    </>
    
  )
}
