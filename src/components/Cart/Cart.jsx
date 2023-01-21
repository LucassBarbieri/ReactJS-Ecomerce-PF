import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/Context'

const Cart = () => {

  const { cart, getTotalPrice, getItemTotalCount } = useContext(CartContext)

  return (
    <>
    <div>
      {cart.map(item =>
        <>
        <p>titulo{item.titulo}</p>
        <p>descripcion: {item.descripcion}</p>
        <p>total item carro: {getItemTotalCount()}</p>
        <p>precio total carro: ${getTotalPrice()}</p>
        {/* <button>Eliminar</button> */}
        <Link to={'/checkout'}>Comprar</Link>
        </>
      )}
    </div>
    </>
  )
}

export default Cart;