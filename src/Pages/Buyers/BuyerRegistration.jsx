import React from 'react'
import { Link } from 'react-router-dom'
import { AltSecondaryButton, PrimaryButton } from '../../Components/ButtonsComponent'
// import FooterComponent from '../Components/FooterComponent'
import HeaderComponent from '../../Components/HeaderComponent'

function BuyerRegistration() {
  return (
    <>
      <HeaderComponent title="Buyer Registeration" />
      <div className='w-full mx-auto px-8 py-4 my-4 flex flex-col md:shadow-full md:w-2/3 rounded-md lg:w-1/3'>
        <input type='text' className='w-full h-12 rounded-md my-4 placeholder:text-soft-black placeholder:text-xl placeholder:font-medium placeholder:pb-0 pt-3 border-b-2 px-2' placeholder="Name" />
        <input type="text" className='w-full h-12 rounded-md my-4 placeholder:text-soft-black placeholder:text-xl placeholder:font-medium placeholder:pb-0 pt-3 border-b-2 px-2' placeholder='Username' />
        <input type="text" className='w-full h-12 rounded-md my-4 placeholder:text-soft-black placeholder:text-xl placeholder:font-medium placeholder:pb-0 pt-3 border-b-2 px-2 ' placeholder='Location' />

        <Link to='/shoppinglist'>
          <AltSecondaryButton title="Create Shopping List" />
        </Link>

        <PrimaryButton title="Save" />
      </div>

      {/* <div className='fixed bottom-0 w-full pb-2 '>
        <FooterComponent />
      </div> */}
    </>
  )
}

export default BuyerRegistration
