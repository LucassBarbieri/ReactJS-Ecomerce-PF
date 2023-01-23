import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/Context'
import '../Cart/Cart.css';
import Loading from '../..//components/Loading/Loading';
import { useEffect } from 'react';

const Cart = () => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const { cart, getTotalPrice, getItemTotalCount, clearCart, removeItem } = useContext(CartContext)

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return cart.length > 0 ? (
      <>
        <div className='container containerCarritoNew'>
          <div className="card">
            <div className="col-md-12 cart">
              <div className='row'>
                {cart.map(item =>
                  <div key={item.id}>
                    <div className="row border-top border-bottom">
                      <div className="row main align-items-center">
                        <div className="col-2">
                          <img className="img-fluid" src={item.imagen_detail} />
                        </div>
                        <div className="col">
                          <div className="row text-muted">{item.titulo}</div>
                          <div className="row">{item.descripcion}</div>
                        </div>
                        <div className="col">$ {item.price}
                          <span className="close">Cant: {item.count}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <hr />

          <div className='container'>

            <div className='row'>
              <h6 className="text-uppercase">Cantidad: {getItemTotalCount()}</h6>
              <h6 className="text-uppercase">Total: ${getTotalPrice()}</h6>
            </div>

            <div className='btnContainer'>
              <button onClick={clearCart} className='btn btnVermas'>Vaciar carrito</button>
              <Link to={'/checkout'}><button className='btn btn-success'>Finalizar compra</button></Link>
            </div>

          </div>
        </div>
      </>
    ) : (
      <div className='container-carritovac'>
        <p className='text-carrito'>Carrito vacio</p>
      </div>
    )
  }
}

export default Cart;