import React from 'react'
import { IoLogoInstagram, IoLogoYoutube, IoLogoTiktok } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className=' select-none bottom-0 left-0 right-0 h-14 md:h-20 shadow-lg rounded-full bg-slate-950 fixed m-5 p-5 px-10 flex items-center justify-between'>
        <div className='gap-4 flex'>
          <a target='_blank' href='https://instagram.com/jurnalsmatcr_'>
            <IoLogoInstagram className='text-white size-6 md:size-8 cursor-pointer transition-all duration-300 hover:-translate-y-2' />
          </a>
          <a target='_blank' href='https://tiktok.com/jurnalistiksmatcr_'>
            <IoLogoTiktok className='text-white size-6 md:size-8 cursor-pointer transition-all duration-300 hover:-translate-y-2' />
          </a>
          <a target='_blank' href='https://www.youtube.com/@jurnalistiksmatarakanitaci3905'>
            <IoLogoYoutube className='text-white size-6 md:size-8 cursor-pointer transition-all duration-300 hover:-translate-y-2' />
          </a>
        </div>
        <div className='gap-4 flex text-white items-center'>
          <span className='p-1 rounded-full font-semibold duration-300 transition-all hover:opacity-80 text-white'>
            Made with love❤️
          </span>
        </div>
    </div>
  )
}

export default Footer