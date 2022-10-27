import React from 'react'

function ForYouHeader() {

  return (
    <div className='flex w-full justify-around lg:w-1/2 mx-auto my-6 lg:pb-2'>
      <p className=" bg-green text-white rounded-md text-sm md:text-xl p-2"> For You</p>
      <p className="  text-green rounded-md text-sm md:text-xl p-2">Fruits</p>
      <p className="  text-green rounded-md text-sm md:text-xl p-2">Veggies</p>
      <p className="  text-green rounded-md text-sm md:text-xl p-2">Poultry</p>
    </div>
  )
}

export default ForYouHeader