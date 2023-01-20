import React, { useContext } from 'react'
import { CartContext } from '../Context/Context'

const Cart = () => {

  const { cart, getTotalPrice, getItemTotalCount } = useContext(CartContext)

  return (
    <>
    <div>
      {cart.map(item =>
        <>
        <p>precio unitario: ${item.price}</p>
        <p>total item carro: {getItemTotalCount()}</p>
        <p>precio total carro: ${getTotalPrice()}</p>
        </>
      )}
    </div>
    <p>carrito</p>
    </>
  )
}

export default Cart;