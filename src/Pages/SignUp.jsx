import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from '../Components/ButtonsComponent'
import HeaderComponent from '../Components/HeaderComponent'

function SignUp() {
  const inputStyle = "w-full h-12 my-2 mx-auto px-2 text-soft-black text-xl font-medium w-1/ border-b border-soft-black placeholder:text-soft-black placeholder:text-xl placeholder:font-medium placeholder:pb-0 pt-3"
  return (
    <div>
      <HeaderComponent
        title="Create New Account"
      />
      <form className='w-full bg-white mx-auto px-8 py-4 my-4 flex flex-col md:shadow-full md:w-2/3 rounded-md lg:w-1/3 backdrop-blur-sm backdrop-brightness-50'>

        <input
          className={inputStyle}
          placeholder='Name'
          type="text"
        />

        <input
          className={inputStyle}
          placeholder='Email'
          type="mail"
        />

        <input
          className={inputStyle}
          placeholder='Password'
          type="password"
        />

        <div className='flex my-4'>
          <input
            className='mx-4'
            type="checkbox"
          />
          <h4 className='text-xs font-bold text-red'>Keep me logged in</h4>
        </div>

        <Link to='/registration'>
          <PrimaryButton
            title="Sign Up" />
        </Link>

        <h4 className='text-base text-center font-bold text-red'>or</h4>

        <Link to=''>
          <SecondaryButton
            title="Sign Up With Facebook" />
        </Link>
      </form>
    </div>
  )
}

export default SignUp
