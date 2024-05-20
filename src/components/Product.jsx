import React, { useContext } from 'react'
import { StoreContext } from '../context-reducer/StoreContext.tsx'

const Product = ({item}) => {
  const { addToBasket } = useContext(StoreContext);
  const handleAdd = () => {
      addToBasket(item);
  }

  return (
    
    <a href='#' class="group">
        <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img src={item.image} alt="Scarf"class="h-full w-full object-cover object-center group-hover:opacity-75" />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">{item.name}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
        <button type="button" class="w-full text-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" onClick={handleAdd}>
        Add to Basket
      </button>
    </a>
  )
}

export default Product