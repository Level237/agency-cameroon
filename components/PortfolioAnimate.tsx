'use client'
import React from 'react'
import InfiniteCarousel from './InfiniteCarousel'
import { Button } from './ui/button'
import { FiArrowRight } from 'react-icons/fi'

export default function PortfolioAnimate() {
  return (
    <div className="mb-20">
      <h1 className="mt-10 font-primary text-2xl font-bold tracking-tight text-black dark:text-[#e8d1bb] sm:text-4xl">Attractive Portfolio</h1>
    <InfiniteCarousel/>
    <div className="flex justify-center mt-5 items-center">
    <Button variant="default" className='bg-[#513417] dark:bg-[#e8d1bb] dark:[#513417]'>More Portfolio<FiArrowRight className="text-xl" /></Button>
    </div>
    
    </div>
  )
}
