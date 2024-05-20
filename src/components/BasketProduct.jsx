import { useContext } from "react"
import { StoreContext } from "../context-reducer/StoreContext"

const BasketProduct = ({item}) => {
    const {removeFromBasket} = useContext(StoreContext);
    const handleRemove = () => {
        removeFromBasket(item);
    }

  return (
    <>
        <li className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={item.image} alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." className="h-full w-full object-cover object-center" />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href="#">{item.name}</a>
                            </h3>
                            <p className="ml-4">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty 1</p>

                          <div className="flex">
                            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500" onClick={handleRemove}>Remove</button>
                          </div>
                        </div>
                      </div>
                    </li>

    </>
  )
}

export default BasketProduct