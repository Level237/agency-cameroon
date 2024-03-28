'use client'
import React, { useEffect, useState } from 'react'
import CardImage from "./CardImage"
import useMeasure from "react-use-measure"
import {motion,animate,useMotionValue} from "framer-motion"

export default function InfiniteCarousel() {

    const images=[
        "/img1.jpg",
        "/img2.jpg",
        "/img3.jpg",
        "/img4.jpg",
        "/img5.jpg",
        "/img1.jpg",
        "/img1.jpg",
        "/img1.jpg",
    ]
    const  FAST_DURATION=15;
    const SLOW_DURATION=75

    const [duration,setDuration]=useState(FAST_DURATION)
    console.log(duration);
    let [ref,{width}]=useMeasure()
    const xTranslation=useMotionValue(0)
    const [mustFinish,setMustFinish]=useState(false);
    const [rerender,setRerender]=useState(false)
    useEffect(()=>{
        let controls;
        let finalPosition=-width/2 - 8;
        
        if(mustFinish){
            controls=animate(xTranslation,[xTranslation.get(),finalPosition],{
                ease:"linear",
                duration:duration * (1 -xTranslation.get()/finalPosition),
                onComplete:()=>{
                    setMustFinish(false);
                    setRerender(!rerender)
                }
            })
        }else{
            controls=animate(xTranslation,[0,finalPosition],{
                ease:'linear',
                duration:duration,
                repeat:Infinity,
                repeatType:"loop",
                repeatDelay:0
            })
        }

        //return controls?.stop;
    },[xTranslation,width,duration,rerender])
  return (
    <main className='py-8'>
        
 <motion.div className='relative left-0 flex gap-4' ref={ref} style={{ x:xTranslation }}
 onHoverStart={()=>{
    setMustFinish(true)
    setDuration(SLOW_DURATION)}}
 onHoverEnd={()=>{
    setMustFinish(true)
    setDuration(FAST_DURATION)}}>
     {[...images,...images].map((item,id)=>(
        <CardImage key={id} image={item}/>
     ))}
    </motion.div>
    </main>
   
  )
}