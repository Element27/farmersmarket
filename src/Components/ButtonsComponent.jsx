import React from 'react'



const PrimaryButton = ({ title }) => {
  const primary = "w-full text-lg px-5 py-1 my-4 mx-auto bg-green text-white border rounded-md hover:bg-white hover:text-green hover:border border-green border-solid  md:text-sm lg:text-lg"
  return (
    <button
      className={primary}>{title}</button>
  )
}

const secondary = "w-full text-lg px-5 py-1  my-4 mx-auto bg-white text-green rounded-md border border-green border-solid hover:bg-green hover:text-white  md:text-sm lg:text-lg"

const SecondaryButton = ({ title }) => {
  return (
    <button
      className={secondary}
    >{title}</button>
  )
}


export { PrimaryButton, SecondaryButton }