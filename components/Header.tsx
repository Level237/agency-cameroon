import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"

export default function Header() {
  return (
   <header className="w-[100%] border-b-[0.1px] border-[#968d8d60] sticky top-0 z-50  py-4 px-4 sm:px-10  font-[sans-serif] min-h-[70px]">
    <div className="flex flex-wrap items-center gap-x-2 max-lg:gap-y-6 justify-between">
        <div className="flex-1">
        <h2 className="text-white text-3xl font-bold">Agency</h2>
        </div>
        <div className="text-white">
            le
            
        </div>
        
    </div>
   </header>

  )
}
