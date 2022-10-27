import React from 'react';
// import BannerHeader from '../../Components/BannerHeader';
import HeaderComponent from '../../Components/HeaderComponent';
// import { IconPlus } from '../../Components/IconsCollection';
import ChecklistComponent from './ChecklistComponent';
import { PrimaryButton } from '../../Components/ButtonsComponent';
import { Link } from 'react-router-dom';

function ShoppingList() {

  const allProducts = [
    "Apple",
    "Almond",
    "Appricot",
    "Banana",
    "Beans",
    "Beetroot",
    "Blackberry",
    "Blueberry",
    "Brocolli",
    "Cabbage",
    "Cassava",
    "Carrot",
    "Celery",
    "Chicken",
    "Chili",
    "Corn",
    "Cucumber",
    "Egg",
    "Egg Plant"
  ]

  let selection = []
  // let isClicked = false;

  // let activeClass = []

  // const handleSelection = (e) => {
  //   const indexOfTarget = selection.indexOf(e.target.value)

  //   if (indexOfTarget !== -1) {
  //     selection.splice(indexOfTarget, 1)
  //   } else {
  //     selection.push(e.target.value)
  //   }

  //   isClicked = !isClicked
  //   console.log(selection)
  // }


  const checkSelection = () => {
    if (selection.length >= 3) {
      alert("your selection has been saved successfully")
    } else {
      alert("select at least 3")
    }
    console.log(selection)
  }

  return (
    <div>
      {/* <BannerHeader title="Shopping List" icon={<IconPlus />} /> */}
      <HeaderComponent title="Shopping List" />
      <div
        className='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-left w-11/12 mt-10 mx-auto'>
        {allProducts.map((product, index) => {
          return <ChecklistComponent
            key={index}
            product={product}
            selection={selection}
          />
        })}
      </div>
      <div className="w-1/4 mx-auto mt-4 lg:relative lg:top-10"
        onClick={checkSelection}>
        <Link to="/foryou">
          <PrimaryButton type="submit" title="Save" />
        </Link>
      </div>

    </div>
  )

}
export default ShoppingList




