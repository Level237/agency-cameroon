'use client'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"



import Image from "next/image";

import Link from "next/link"

import { ToggleTheme } from "./ToggleTheme";
import Search from "./Search";

export default function Header() {
  return (
   <header className="w-[100%] sticky  z-[30] bg-transparent backdrop-blur   border-b-[0.1px] dark:border-[#e8d1bb38] border-[#5134173a] top-0  py-4 px-4 sm:px-10 dark:bg-[#000]  bg-[#e8d1bb]  font-[sans-serif] min-h-[60px]">
    <section className="flex flex-wrap items-center gap-x-2 max-lg:gap-y-6 justify-between">
        <div className="flex-1">
            <Image 
            src="/agency.png"
            width="40"
            height="40"
            alt="logo agency cameroon"
            />
       
        </div>
        <section className="flex items-center justify-center gap-3 w-[540px]">
        <NavigationMenu>
            <NavigationMenuList>
            <NavigationMenuItem>
            <NavigationMenuTrigger >Services</NavigationMenuTrigger>
            <NavigationMenuContent>
                
                <NavigationMenuLink href="/graphic" className="font-primary px-3 py-3">
                    Graphic Design
                </NavigationMenuLink>
               
                
                <NavigationMenuLink href="/graphic" className="font-primary text-sm ">
                    Web Development
                </NavigationMenuLink>
              
         
                
               
            </NavigationMenuContent>
            
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuTrigger>PortFolio</NavigationMenuTrigger>
            <NavigationMenuContent>
                
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link href="/" className="text-white">Developpement web</Link>
                    
                </NavigationMenuLink>
                
              
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link href="/" className="text-white">Branding</Link>
                    
                </NavigationMenuLink>
            </NavigationMenuContent>
            
            </NavigationMenuItem>
            <NavigationMenuItem>
            
            <NavigationMenuLink >
                   
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
            
            <NavigationMenuLink href="/graphic" className="font-primary px-3 py-3">
                    About
                </NavigationMenuLink>
            
            
            
            
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuLink href="/contact" className=" font-primary hover:bg-gray-800 hover:p-3 hover:rounded">
                    Contact
                    <div className="">

                    </div>
                </NavigationMenuLink>
            
            
            </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </section>
      <ToggleTheme/>
        
    </section>
   </header>

  )
}
