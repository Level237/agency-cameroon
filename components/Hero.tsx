import React from 'react'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    
      <section className="relative  isolate border-b-[0.1px] border-[#e8d1bb38] overflow-hidden bg-black">
  <svg
    className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
    aria-hidden="true">
    <defs>
      <pattern id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc" width="200" height="200" x="100%" y="-1"
        patternUnits="userSpaceOnUse">
        <path d="M.5 200V.5H200" fill="none"></path>
      </pattern>
    </defs>
    <svg x="50%" y="-1" className="overflow-visible fill-gray-800/20">
      <path d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
        stroke-width="0"></path>
    </svg>
    <rect width="100%" height="100%" stroke-width="0" fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"></rect>
  </svg>
  <div
    className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
    aria-hidden="true">
    <div className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#e09a39a6] to-[#e09a3950] opacity-20"
      style={{ clipPath:"polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)" }}>
    </div>
  </div>
  <section className="mt-[-50px] flex h-screen items-center justify-center">
    <section className="max-w-full flex-shrink-0 px-4 text-center lg:mx-0 lg:max-w-3xl lg:pt-8">
      <h1 className="mt-10 font-secondary text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
        revolutionize
        <span className="text-[#e8d1bb"> your branding</span> with
        <span className="text-[#513417] font-primary dark:text-[#724a23]"> Agency</span>
      </h1>
      <p className="mt-6 font-primary text-lg leading-8 text-black dark:text-white">Elevate Your Productivity With Agency, Your Personalized Workflow
        Assistant</p>
      <div className="mt-5 flex items-center justify-center gap-x-6">
      <Button variant="outline" className='text-[#513417] dark:text-white'>Testimonials</Button>
        <Button variant="default" className='bg-[#513417] dark:bg-[#e8d1bb] dark:[#513417]'>our portfolio</Button>
      </div>
    </section>
  </section>
</section>
 
  )
}
