import React from 'react'
// import { IconBars, IconMagnifyingGlass } from './IconsCollection'

function BannerHeader({ title, icon }) {
  return (
    <div className=' lg:h-24 grid border-b border-green'>
      {/* <div className='flex justify-between'>
        <IconBars className="text-green my-2 md:text-xl" />
        <IconMagnifyingGlass className="text-green my-2 md:text-xl" />
      </div> */}


      <div className='w-full flex items-center justify-between px-2 md:w-1/3 mx-auto'>
        <h2 className='text-2xl font-semibold '>{title}</h2>
        <div className='text-3xl font-semibold'>{icon}</div>
      </div>
    </div>
  )
}

export default BannerHeader