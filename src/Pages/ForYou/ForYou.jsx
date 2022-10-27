import React from 'react'
import FooterComponent from '../../Components/FooterComponent'
import ForYouCards from './ForYouCards'
import ForYouHeader from './ForYouHeader'

function ForYou() {
  return (
    <>
      <ForYouHeader />
      <div className='flex flex-wrap gap-4 w-11/12 mx-auto mb-10'
      >
        <ForYouCards />
      </div>
      <FooterComponent />
    </>
  )
}

export default ForYou