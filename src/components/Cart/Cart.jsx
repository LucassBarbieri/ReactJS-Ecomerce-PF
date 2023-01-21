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
            {/* <button>Eliminar</button> */}
          </>
        )}

        <p>total item carro: {getItemTotalCount()}</p>
        <p>precio total carro: ${getTotalPrice()}</p>
        <p><Link to={'/checkout'}>Comprar</Link></p>
      </div>
    </>
  )
}

export default Cart;