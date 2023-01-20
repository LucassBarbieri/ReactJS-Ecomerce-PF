import React, { useContext } from 'react'
import { CartContext } from '../Context/Context'

function Cart() {

  const { cart, getTotalPrice, getTotalItemCount } = useContext(CartContext)

  return (
    <>
    <div>
      {cart.map(item =>
        <>
        <p>{item.price}</p>
        <p>total item carro {getTotalItemCount()}</p>
        <p>precio total carro {getTotalPrice()}</p>
        </>
      )}
    </div>
    <p>carrito</p>
    </>
  )
}

export default Cart