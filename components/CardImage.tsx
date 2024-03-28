'use client'
import React, { useState } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import {motion,AnimatePresence} from 'framer-motion'
import Image from 'next/image'
export default function CardImage(props:any) {
    const [showOverlay,setShowOverlay]=useState(false)
  return (
    
    
    <motion.div className='relative overflow-hidden h-[290px] min-w-[500px] bg-slate-400 rounded-xl flex justify-center items-center'
    onHoverStart={()=>setShowOverlay(true)}
    onHoverEnd={()=>setShowOverlay(false)}
    >
        <AnimatePresence>

        
      {showOverlay && (
        <motion.div className='absolute inset-0 z-10 flex justify-center items-center'
        initial={{ 
            opacity:0
         }}
         animate={{ 
            opacity:1
          }}

          exit={{ 
            opacity:0
           }}
           
        >
            <div className='absolute bg-black pointer-events-none opacity-50 h-full w-full'></div>
            <motion.h1 className='bg-black font-secondary font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75'
            initial={{ 
                y:10
             }}
             animate={{ 
                y:0
              }}

              exit={{ 
                y:10
               }}

             
            >Explore now <FaArrowAltCircleRight/>
            </motion.h1>
           
        </motion.div>
      )}
      </AnimatePresence>
      <Image src={props.image} className='h-full' fill alt={props.image} style={{ objectFit:"cover" }}/>
     
    </motion.div>
    
  )
}