import React from 'react'
import { AltSecondaryButton, PrimaryButton } from '../Components/ButtonsComponent'
import FooterComponent from '../Components/FooterComponent'
import HeaderComponent from '../Components/HeaderComponent'

function BuyerRegistration() {
  return (
    <>
      <HeaderComponent title="Buyer Registeration" />
      <div className='px-4 py-8 mb-6'>
        <input type='text' className='w-full h-12 rounded-md my-4 placeholder:text-soft-black placeholder:text-xl placeholder:font-medium placeholder:pb-0 pt-3 border-b-2 px-2' placeholder="Name" />
        <input type="text" className='w-full h-12 rounded-md my-4 placeholder:text-soft-black placeholder:text-xl placeholder:font-medium placeholder:pb-0 pt-3 border-b-2 px-2' placeholder='Username' />
        <input type="text" className='w-full h-12 rounded-md my-4 placeholder:text-soft-black placeholder:text-xl placeholder:font-medium placeholder:pb-0 pt-3 border-b-2 px-2 ' placeholder='Location' />

        <AltSecondaryButton title="Create Shopping List" />

        <PrimaryButton title="Save" />
      </div>

      <div className='fixed bottom-0 w-full pb-2 '>
        <FooterComponent />
      </div>
    </>
  )
}

export default BuyerRegistration