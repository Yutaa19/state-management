import { useEffect, useState } from "react"
import axios from 'axios'
import { useDispatch } from "react-redux"
import { addItemToCart } from "../cart/cartSlice"

const ProductList = () => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(false)
    const dispacth = useDispatch()

    useEffect(() => {
        setLoading(true)
        axios.get('https://fakestoreapi.com/products')
          .then((res) => {
            setProduct(res.data)
          }).catch((err) => {
            console.error(err)
          }).finally(() => {
            setLoading(false)
          })
    }, [])

    const handleBuy = () => {
      dispacth(addItemToCart())
    }

    console.log(product)
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
        {product.map((datas) => {
          return(
            <div key={datas.id} className="bg-white rounded-xl border shadow p-4">
              <div className="group relative w-[80%] h-[350px] mx-auto overflow-hidden">
                <img 
                src={datas.image} 
                alt={datas.title} 
                className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 ease-in-out"/>
              </div>
              <div className="flex flex-col gap-6 mt-8">
                <button type="button" className="bg-blue-700 text-white hover:bg-blue-800 rounded-xl text-sm py-3 px-8"
                onClick={() => handleBuy}>
                    Buy Now
                </button>
                <h3 className="font-bold text-black">{datas.title}</h3>
                <h3 className="text-black">$ {datas.price}</h3>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default ProductList