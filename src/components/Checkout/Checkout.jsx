import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/Context'

const Checkout = () => {

  const { cart, getTotalPrice, getItemTotalCount } = useContext(CartContext)

  return (
    <>
      <div class="container-fluid">

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


        <form action="">
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre y apelllido:</label>
            <input type="email" className="form-control" placeholder="Lucas Barbieri" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">N° de contacto:</label>
            <input type="email" className="form-control" placeholder="1122664022" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlInput1" class="form-label">E-Mail:</label>
            <input type="email" className="form-control" placeholder="email@gmail.com" />
          </div>
          <div className="mb-3">
            <Link to={'/checkoutOk'}>Finalizar</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Checkout;