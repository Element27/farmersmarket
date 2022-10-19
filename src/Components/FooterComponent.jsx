import React from 'react'
import { ChatIcon, HeartIcon, HomeIcon, UserIcon } from './IconsCollection'

function FooterComponent() {
  return (
    <div className='flex w-full justify-around lg:w-1/2 mx-auto lg:pb-2'>
      <HomeIcon className=" bg-green text-white rounded-full text-5xl md:text-7xl p-2 lg:text-5xl" />
      <HeartIcon className=" bg-green text-white rounded-full text-5xl md:text-7xl p-2 lg:text-5xl" />
      <ChatIcon className=" bg-green text-white rounded-full text-5xl md:text-7xl p-2 lg:text-5xl" />
      <UserIcon className=" bg-green text-white rounded-full text-5xl md:text-7xl p-2 lg:text-5xl" />
    </div>
  )
}

export default FooterComponent