import React, {useContext} from 'react'
import NavBar from '../components/NavBar'
import { StoreContext } from '../context-reducer/StoreContext'
import BasketProduct from '../components/BasketProduct'

const Basket = () => {
  const {products, total} = useContext(StoreContext);
  return (
    <>
      <NavBar />
      <div className="pointer-events-auto w-11/12 justify-items-stretch ml-18">
          <div className="">
            <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
              <div className="mt-8">
                <h3>Your Basket</h3>
                <div className="flow-root">
                  <ul role="list" className="-my-6 divide-y divide-gray-200">
                    {products.map((product, i) => 
                      <BasketProduct 
                      key={i} item={product}/>
                    )}
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Basket