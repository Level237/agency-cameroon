import React from 'react'
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
  import { FaSearch } from "react-icons/fa";
import { Button } from "./ui/button";
import { CommandDemo } from './Command';
export default function Search() {
  return (
    <div className="w-[40px] text-white cursor-pointer">
    <Dialog>
  <DialogTrigger asChild>
    <FaSearch/>
  </DialogTrigger>
  <DialogContent className="sm:max-w-md bg-white" >
    <DialogHeader>
      <DialogTitle>Search</DialogTitle>
      <DialogDescription>
        Anyone who has this link will be able to view this.
      </DialogDescription>
    </DialogHeader>
    <div className="flex items-center space-x-2">
      <CommandDemo/>
    </div>
    <DialogFooter className="sm:justify-start">
      <DialogClose asChild>
        <Button type="button" className='bg-[#e09a39] text-black'>
          Close
        </Button>
      </DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>
    </div>
  )
}
