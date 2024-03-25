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
import Link from "next/link"
import { FaSearch } from "react-icons/fa";

export default function Header() {
  return (
   <header className="w-[100%] border-b-[0.1px] border-[#968d8d60] sticky top-0 z-50  py-4 px-4 sm:px-10  font-[sans-serif] min-h-[70px]">
    <div className="flex flex-wrap items-center gap-x-2 max-lg:gap-y-6 justify-between">
        <div className="flex-1">
        <h2 className="text-white text-3xl font-bold">Agency</h2>
        </div>
        <div className="w-[400px]">
        <NavigationMenu className="text-white">
            <NavigationMenuList>
            <NavigationMenuItem className="">
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
            <NavigationMenuItem>
            <NavigationMenuTrigger>PortFolio</NavigationMenuTrigger>
            <NavigationMenuContent>
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
            <NavigationMenuItem>
            
            <NavigationMenuLink>
                    <Link href="/" className="text-white">About us</Link>
                </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    <Link href="/" className="">Contact</Link>
                </NavigationMenuLink>
            
            
            </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </div>
        <div className="w-[40px] text-white cursor-pointer">
            <FaSearch/>
        </div>
        
    </div>
   </header>

  )
}
