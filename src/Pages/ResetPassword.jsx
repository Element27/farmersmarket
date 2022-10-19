import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton } from '../Components/ButtonsComponent'
import HeaderComponent from '../Components/HeaderComponent'

function ResetPassword() {
  const inputStyle = "w-full h-12 my-2 mx-auto px-2 text-soft-black text-xl font-medium w-1/ border-b border-soft-black placeholder:text-soft-black placeholder:text-xl placeholder:font-medium placeholder:pb-0 pt-3"

  return (
    <div>
      <HeaderComponent
        title="Reset Password"
      />
      <form className='w-full mx-auto px-8 py-4 my-4 flex flex-col md:shadow-full md:w-2/3 rounded-md lg:w-1/3'>
        <div className='my-8'>

          <input
            className={inputStyle}
            placeholder='Email'
            type="mail"
          />
        </div>


        <Link to="/passwordConfirmation">
          <PrimaryButton
            title="Reset Password" />
        </Link>

      </form>
    </div>
  )
}

export default ResetPassword