import React from 'react'


import apple from '../../Assets/Products/Rectangle 1(1).png'
import oranges from '../../Assets/Products/Rectangle 1.png'
import pepper from '../../Assets/Products/Rectangle 2.png'
import apples from '../../Assets/Products/Rectangle 3.png'
import carrots from '../../Assets/Products/Rectangle 4.png'
import tomatoes from '../../Assets/Products/Rectangle 5.png'
import strawberryb from '../../Assets/Products/Rectangle 6.png'
import strawberrys from '../../Assets/Products/Rectangle 8.png'
import redapples from '../../Assets/Products/Rectangle 9.png'
import strawberrybs from '../../Assets/Products/Rectangle 10.png'
import onion from '../../Assets/Products/Rectangle 31.png'
import tomatoess from '../../Assets/Products/Rectangle 32.png'
import corn from '../../Assets/Products/Rectangle 33.png'
import carrotss from '../../Assets/Products/Rectangle 34.png'
import orangess from '../../Assets/Products/Rectangle 34f.png'
import cucumber from '../../Assets/Products/Rectangle 35.png'
import ForYouCard from './ForYouCard'



function ForYouCards() {
  const forYouDisplay = [
    {
      name: "apple",
      product: `${apple}`,
      price: "4:00"
    },
    {
      name: "oranges",
      product: `${oranges}`,
      price: "4:00"
    },
    {
      name: "pepper",
      product: `${pepper}`,
      price: "4:00"
    },
    {
      name: "apples",
      product: `${apples}`,
      price: "4:00"
    },
    {
      name: "carrots",
      product: `${carrots}`,
      price: "4:00"
    },
    {
      name: "tomatoes",
      product: `${tomatoes}`,
      price: "4:00"
    },
    {
      name: "strawberryb",
      product: `${strawberryb}`,
      price: "4:00"
    },
    {
      name: "strawberrys",
      product: `${strawberrys}`,
      price: "4:00"
    },
    {
      name: "redapples",
      product: `${redapples}`,
      price: "4:00"
    },
    {
      name: "strawberrybs",
      product: `${strawberrybs}`,
      price: "4:00"
    },
    {
      name: "cucumber",
      product: `${cucumber}`,
      price: "4:00"
    },
    {
      name: "onion",
      product: `${onion}`,
      price: "4:00"
    },
    {
      name: "tomatoess",
      product: `${tomatoess}`,
      price: "4:00"
    },
    {
      name: "corn",
      product: `${corn}`,
      price: "4:00"
    },
    {
      name: "carrotss",
      product: `${carrotss}`,
      price: "4:00"
    },
    {
      name: "orangess",
      product: `${orangess}`,
      price: "4:00"
    },



  ]
  return (

    forYouDisplay.map((prod, index) => {
      console.log(prod)
      return <ForYouCard key={index} imgsrc={prod.product} price={prod.price} />
    })
  )
}

export default ForYouCards