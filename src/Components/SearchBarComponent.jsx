import React from 'react'
import { IconMagnifyingGlass } from './IconsCollection'

function SearchBarComponent() {
  return (
    <div className='w-full mx-auto border-2 border-solid border-green rounded-md px-5 py-2 flex items-center content-center md:w-1/4'>
      <label for="search">
        <IconMagnifyingGlass className='text-3xl mr-2 text-green md:text-xl' />
      </label>
      <input className='w-full h-8 px-4 py-2 md:h-4' name="search" id="search" type="text" />
    </div>
  )
}

export default SearchBarComponent
