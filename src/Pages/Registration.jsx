import React from 'react'
import { AltSecondaryButton } from '../Components/ButtonsComponent'
import FooterComponent from '../Components/FooterComponent'
import HeaderComponent from '../Components/HeaderComponent'

function Registration() {
  return (
    <>
      <HeaderComponent title="Registration" />

      <div className='w-[90%] bg-green mx-auto px-8 py-4 my-10 flex flex-col md:shadow-full md:w-2/3 rounded-md lg:w-1/3 lg:my-4'>
        <AltSecondaryButton title="Farmer" />
        <AltSecondaryButton title="Buyer" />

      </div>
      <div className='fixed bottom-0 w-full pb-2 '>
        <FooterComponent />
      </div>
    </>
  )
}

export default Registration