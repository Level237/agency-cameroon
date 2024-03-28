'use client'

import Image from "next/image"
import { useState } from "react"
import { FaArrowAltCircleRight } from 'react-icons/fa'
import {motion,AnimatePresence} from 'framer-motion'
export default function PortfolioCard(props:any) {
    const [showOverlay,setShowOverlay]=useState(false)
  return (
    <motion.div className='relative overflow-hidden h-[300px] min-w-[190px] bg-slate-400 rounded-xl flex justify-center items-center'
    onHoverStart={()=>setShowOverlay(true)}
    onHoverEnd={()=>setShowOverlay(false)}
    >
           <AnimatePresence>

        
{showOverlay && (
  <motion.div className='absolute inset-0 z-10 flex justify-center items-center'
  initial={{ 
      opacity:0,
   }}
   animate={{ 
      opacity:1,
      y:0
    }}
   
    exit={{ 
      opacity:0,
     }}
     
  >
      <div className='absolute bg-black pointer-events-none opacity-80 h-full w-full'></div>
      <motion.h1 className='bg-[#513417] font-secondary font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75'
      initial={{ 
          y:100
       }}
       animate={{ 
          y:0
        }}
        transition={{ 
          duration:0.4
         }}
        exit={{ 
          y:100
         }}

       
      >Explore now <FaArrowAltCircleRight/>
      </motion.h1>
     
  </motion.div>
)}
</AnimatePresence>
            <Image src={props.src} className='h-full' fill alt="img1" style={{ objectFit:"cover" }}/>
          </motion.div>
  )
}
