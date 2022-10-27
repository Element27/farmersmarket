
import React, { useState } from 'react'



function ChecklistComponent({ product, selection }) {

  const [isClicked, setIsClicked] = useState(false)

  const handleSelection = (e) => {
    const indexOfTarget = selection.indexOf(e.target.value)

    if (indexOfTarget !== -1) {
      selection.splice(indexOfTarget, 1)
    } else {
      selection.push(e.target.value)
    }

    setIsClicked(!isClicked)
    console.log(selection)
  }


  const clickedStyle = "border border-green rounded-md font-lg font-semibold text-green p-2"
  const unclickedStyle = "border border-white font-lg font-semibold text-gray p-2"
  return (
    <button
      value={product}
      className={isClicked ? clickedStyle : unclickedStyle}
      onClick={handleSelection}
    >
      {product}
    </button>
  )
}

export default ChecklistComponent

