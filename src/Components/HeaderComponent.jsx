import React from 'react'
import { useNavigate } from 'react-router-dom';

const HeaderComponent = ({ title }) => {
  const navigate = useNavigate();
  return (
    <div className='h-36 bg-green py-4 px-8 text-center flex flex-col justify-between'>
      <p
        className='text-left text-white text-lg font-normal  cursor-pointer'
        onClick={() => navigate(-1)}>Back</p>
      <h1 className=' text-3xl text-white text-center'>{title}</h1>

    </div>
  )
}

export default HeaderComponent