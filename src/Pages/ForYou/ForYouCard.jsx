import React from 'react'
import { HeartIcon, IconCartPlus } from '../../Components/IconsCollection'
// import sam from '../../Assets/Products/Rectangle 1(1).png'

function ForYouCard({ imgsrc, price }) {
  return (
    <div className="shadow-full w-[135px] h-[150px] md:w-[180px] md:h-[200px] relative rounded-xl overflow-hidden mx-auto">
      <img src={imgsrc} alt="prod" className="w-full h-full" />

      <div className='w-full flex justify-between items-center absolute bottom-1'>
        <div className="bg-green p-2 mx-2 rounded-full flex justify-center items-center">
          <HeartIcon className="text-white" />
        </div>
        <p className='font-semibold'>$<span> {price}</span></p>
        <div className="bg-green p-2 mx-2 rounded-full flex justify-center items-center">
          <IconCartPlus className="text-white" />
        </div>
      </div>
    </div>
  )
}

export default ForYouCard

