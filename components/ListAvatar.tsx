import React from 'react'

export default function ListAvatar() {
  return (
    <div className="flex -space-x-4 rtl:space-x-reverse">
    <img className="w-8 h-8 border-2  rounded-full  border-[#ffffff13]" src="/design.jpg" alt=""/>
    <img className="w-8 h-8 border-2 rounded-full border-gray-800" src="/design.jpg" alt=""/>
    <img className="w-8 h-8 border-2 rounded-full border-gray-800" src="/design.jpg" alt=""/>
    <a className="flex items-center justify-center w-8 h-8 text-xs font-medium text-white bg-gray-700 border-2   rounded-full hover:bg-gray-600 border-gray-800" href="#">+99</a>
</div>
  )
}
