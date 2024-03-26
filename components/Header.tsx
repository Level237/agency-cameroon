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

  import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"

import Image from "next/image";

import Link from "next/link"
import { FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";
import { ToggleTheme } from "./ToggleTheme";

export default function Header() {
  return (
   <header className="w-[100%]  border-b-[0.1px] border-[#e09a3925] sticky top-0 z-50  py-4 px-4 sm:px-10 bg-[#09090B]  font-[sans-serif] min-h-[70px]">
    <div className="flex flex-wrap items-center gap-x-2 max-lg:gap-y-6 justify-between">
        <div className="flex-1">
            <Image 
            src="/agency.png"
            width="70"
            height="70"
            alt="logo agency cameroon"
            />
       
        </div>
        <div className="w-[400px]">
        <NavigationMenu  className="text-white">
            <NavigationMenuList>
            <NavigationMenuItem className="hover:bg-[#e09a3969] hover:rounded">
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-[#09090B] text-white">
                <ul className="">
                <li className="row-span-3 ">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link href="/" className="">Developpement web</Link>
                </NavigationMenuLink>
                </li>
                </ul>
            </NavigationMenuContent>
            
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:bg-[#e09a3969] hover:rounded">
            <NavigationMenuTrigger>PortFolio</NavigationMenuTrigger>
            <NavigationMenuContent  className="bg-[#09090B] text-white">
                <ul className="p-4">
                <li className="row-span-3">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link href="/" className="text-white">Developpement web</Link>
                    
                </NavigationMenuLink>
                </li>
                <li className="row-span-3">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link href="/" className="text-white">Branding</Link>
                    
                </NavigationMenuLink>
                </li>
                </ul>
            </NavigationMenuContent>
            
            </NavigationMenuItem>
            <NavigationMenuItem asChild>
            
            <NavigationMenuLink>
                    <Link href="/">About us</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="mr-5">
            <NavigationMenuLink className="">
                    <Link href="/" className="">Contact</Link>
                </NavigationMenuLink>
            
            
            </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </div>
        <div>
          <ToggleTheme/>
        </div>
        
    </div>
   </header>

  )
}
