'use client'
import {motion} from "framer-motion"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Image from "next/image"
import { Badge } from "../ui/badge"
  
export default function ListServices() {
  return (
    <section className="grid grid-cols-3 mb-5  gap-5 max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <motion.div
     
        className="relative"
      >
      <Card className="w-full h-[380px] border-[#e09a3925]">
      <Image
        alt="graphic design"

        className="aspect-video h-full overflow-hidden rounded-t-lg object-cover"
        height={225}
        src="/graphic.jpg"
        width={400}
      />
     
     
    </Card>
      </motion.div>
 
    <Card className="w-full border-[#e09a3925]">
      <Image
        alt="Cover image"

        className="aspect-video overflow-hidden rounded-t-lg object-cover"
        height={225}
        src="/design.jpg"
        width={400}
      />
      <CardContent className="rounded-b-lg p-6">
      <CardTitle className=" flex justify-between items-center">
          <h3 className="text-lg text-[#e09a39]">
          Web Design
          </h3>
          <div>
<Badge variant="outline" className="text-white border-[#cc3333] font-thin">creative</Badge>
          </div>
          </CardTitle>
      </CardContent>
      <CardFooter className="flex justify-center">
        
      </CardFooter>
    </Card>
    <Card className="w-full border-[#e09a3925]">
      <Image
        alt="Cover image"

        className="aspect-video overflow-hidden rounded-t-lg object-cover"
        height={225}
        src="/web.jpg"
        width={400}
      />
      <CardContent className="rounded-b-lg p-6">
      <CardTitle className=" flex justify-between items-center">
          <h3 className="text-lg text-[#e09a39]">
          Graphic Design
          </h3>
          <div>
<Badge variant="outline" className="text-white border-[#e09a39] font-thin">IT</Badge>
          </div>
          </CardTitle>
      </CardContent>
      <CardFooter className="flex justify-center">
        
      </CardFooter>
    </Card>
    </section>
   
  )
}
