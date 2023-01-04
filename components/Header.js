import React from 'react'
import Image from 'next/image'
import instagram from "../assets/instagram.png";
import arrowdown from "../assets/arrowdown.png";
import search from "../assets/search.png";
import home from "../assets/home.png";
import message from "../assets/message.png";
import upload from "../assets/upload.png";
import explore from "../assets/discover.png";
import heart from "../assets/hearth.png";
import profile from "../assets/profile.jpg";

const header = () => {
  return (
    <div className='border-b shadow-sm bg-white 
    sticky top-0 z-10'>
      <div className='flex justify-between items-center 
      h-16 px-2 max-w-5xl mx-auto'>
        <div className="flex">
          <div className="w-28 h-full flex">
            <Image src={instagram} />
          </div>
          <div className="h-3 w-3 mt-2">
            <Image src={arrowdown} />
          </div>
        </div>
        <div className=' hidden w-72 sm:flex relative
        mx-4'>
          <div className=' absolute flex items-center 
          w-3 h-full ml-2'>
            <Image src={search} />
          </div>
          <input type="text" placeholder='Search' className='h-9 w-full rounded-md bg-[#efefef] pl-8 outline-0' />
        </div>
        <div className='flex space-x-5'>
          <div className='Btn hidden sm:flex'>
            <Image src={home} />
          </div>
          <div className='Btn hidden sm:flex relative'>
            <Image src={message} />
            <div className='absolute flex -top-1 left-3.5
            items-center justify-center bg-red-500 text-white
            rounded-full w-4 h-4 text-xs'>1</div>
          </div>
          <div className='Btn'>
            <Image src={upload} />
          </div>
          <div className='Btn hidden sm:flex'>
            <Image src={explore} />
          </div>
          <div className='Btn hidden sm:flex'>
            <Image src={heart} />
          </div>
          <div className='flex' >
            <div className='Btn mr-5'>
              <Image src={profile} className="rounded-full"/>
            </div>
            <button className='cursor-pointer text-[#0095f6]
            font-semibold whitespace-nowrap'>
            Sign out</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default header