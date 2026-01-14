import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ProductList from './features/productlist/ProductList'
import CartModal from './features/cart/cartModal'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleopenShowModal = () => {
    setShowModal(true);
  }

  const handleHideshowModal = () => {
    setShowModal(false)
  }

  return (
    <>
    {showModal ? <CartModal handleHideshowModal={handleHideshowModal}/> : null}
    <Header handleHideshowModal={handleopenShowModal}/>
      <main className='max-w-7xl mx-auto px-4'>
          <ProductList />
      </main>
    </>
  )
}

export default App
