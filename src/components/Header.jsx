import { FiShoppingCart } from "react-icons/fi"
import { useSelector } from "react-redux"
import { selectCartTotalItems } from "../features/cart/cartSlice"

const Header = ({ handleopenShowModal }) => {

  const cartTotalItem = useSelector(selectCartTotalItems)
  console.log(cartTotalItem)
  return (
    <header className='bg-blue-700 '>
        <div className='max-w-7xl mx-auto px-4'>
            <div className='flex items-center justify-between h-20'>
                <h1 className="text-3xl font-bold text-gray-300">Simple E-Commerse</h1>
                <button type="button"
                className="relative rounded-full bg-blue-700 p-2 text-gray-100 cursor-pointer" onClick={handleopenShowModal}>
                    <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-600 text-sm text-white flex items-center justify-center ">
                        {cartTotalItem}
                    </span>
                    <FiShoppingCart className="h-6 w-6"/>
                </button>
            </div>

        </div>
    </header>
  )
}

export default Header