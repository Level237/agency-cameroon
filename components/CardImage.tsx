'use client'
import React, { useState } from 'react'
import { FaArrowAltCircleRight } from 'react-icons/fa'
import {motion,AnimatePresence} from 'framer-motion'
import Image from 'next/image'
import { Badge } from './ui/badge'
export default function CardImage(props:any) {
    const [showOverlay,setShowOverlay]=useState(false)
  return (
    
    
    <motion.div className='relative overflow-hidden h-[290px] min-w-[500px] bg-slate-400 rounded-xl flex justify-center items-center'
    onHoverStart={()=>setShowOverlay(true)}
    onHoverEnd={()=>setShowOverlay(false)}
    >
       <div className='absolute  bottom-[10px] inset-0 z-10'>
            <Badge  className='bg-black absolute bottom-0 rounded-lg bottom text-[#e8d1bb]'>Category</Badge>
          </div>
        <AnimatePresence>

        
      {showOverlay && (
        <section>
         
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
            <div className='absolute bg-black pointer-events-none opacity-50 h-full w-full'></div>
            <motion.h1 className='bg-black font-secondary font-semibold text-sm z-10 px-3 py-2 rounded-full flex items-center gap-[0.5ch] hover:opacity-75'
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
        </section>
       
      )}
      </AnimatePresence>
      <Image src={props.image} className='h-full' fill alt={props.image} style={{ objectFit:"cover" }}/>
     
    </motion.div>
    
  )
}