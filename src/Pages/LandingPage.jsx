import React from 'react'
import { PrimaryButton, SecondaryButton } from '../Components/ButtonsComponent'
import logo from "../logo.jpg"
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className=' bg-hero bg-cover bg-no-repeat bg-opacity-100'>
      <div className="p-4 backdrop-blur-sm backdrop-brightness-50">
        <p className='text-right text-white text-lg font-normal mx-3 my-4 md:mx-8 '>Skip</p>
        <div className='w-[90%] mx-auto my-8'>

          {/* hero div */}
          <div className='md:flex md:justify-between w-full md:items-center md:h-5/6'>
            {/* hero text div */}
            <div className='md:px-8  md:w-[47.5%]'>
              <h1
                className='
          font-bold text-3xl text-green text-left
          md:text-5xl lg:text-7xl drop-shadow-lg
          '>Welcome to <br /> Farmer's Market</h1>

              {/* hero button div */}
              <div className='hidden md:flex md:flex-col w-full justify-between'>
                <Link to="/signup">
                  <PrimaryButton
                    title="Create New Account"
                  />
                </Link>

                <Link to="/login">
                  <SecondaryButton
                    title="Already Have an Account"
                  />
                </Link>
              </div>
            </div>

            {/* image */}
            <img
              src={logo}
              alt="fruits"
              className='rounded-full w-full mx-auto my-4 md:mx-0 md:my-8 md:w-[47.5%]'
            />
          </div>

          <div className='md:hidden'>
            <Link to="/signup">
              <PrimaryButton
                title="Create New Account"
              />
            </Link>

            <Link to="/login">
              <SecondaryButton
                title="Already Have an Account"
              />
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default LandingPage