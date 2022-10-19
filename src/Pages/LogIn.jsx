import React from 'react'
import { Link } from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from '../Components/ButtonsComponent'
import HeaderComponent from '../Components/HeaderComponent'

function LogIn() {

  const inputStyle = "w-full h-12 my-2 mx-auto px-2 text-soft-black text-xl font-medium w-1/ border-b border-soft-black placeholder:text-soft-black placeholder:text-xl placeholder:font-medium placeholder:pb-0 pt-3"

  return (
    <div>
      <HeaderComponent
        title="Login to your Account " />
      <form className='w-full mx-auto px-8 py-4 my-4 flex flex-col md:shadow-full md:w-2/3 rounded-md lg:w-1/3'>

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

        <Link to="/resetpassword" className='flex my-4'>
          <h4 className='text-xs font-bold text-red mx-2'>Forgot Password</h4>
        </Link>

        <PrimaryButton
          title="Sign in" />

        <h4 className='text-base text-center font-bold text-red'>or</h4>

        <SecondaryButton
          title="Log In With Facebook" />
      </form>
    </div>
  )
}

export default LogIn