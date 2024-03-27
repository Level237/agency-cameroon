'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
export default function ListBrand() {
  return (
    <div className="flex border border-[#e8d1bb38] z-5  mb-36 justify-center rounded bg-[#000] w-[80vw] h-full">
    
    <motion.div
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{ duration:0.5,delay:0.5,ease:"easeInOut" }}
    >
    <Image
            src="/agency.png"
            width="100"
            height="100"
            alt="logo agency cameroon"
            />
    </motion.div>
    <motion.div
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{ duration:0.5,delay:0.75,ease:"easeInOut" }}
    >
    <Image
            src="/agency.png"
            width="100"
            height="100"
            alt="logo agency cameroon"
            />
    </motion.div>
    <motion.div
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{ duration:0.5,delay:0.85,ease:"easeInOut" }}
    >
    <Image
            src="/agency.png"
            width="100"
            height="100"
            alt="logo agency cameroon"
            />
    </motion.div>
    <motion.div
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{ duration:0.5,delay:0.95,ease:"easeInOut" }}
    >
    <Image
            src="/agency.png"
            width="100"
            height="100"
            alt="logo agency cameroon"
            />
    </motion.div>
    <motion.div
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{ duration:1,delay:1,ease:"easeInOut" }}
    >
    <Image
            src="/agency.png"
            width="100"
            height="100"
            alt="logo agency cameroon"
            />
    </motion.div>
      </div>
  )
}
