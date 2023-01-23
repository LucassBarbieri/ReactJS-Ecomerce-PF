import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { db } from '../../firebase'
import { CartContext } from '../Context/Context'
import Loading from '../..//components/Loading/Loading';
import { useEffect } from 'react';
import '../Checkout/Checkout.css'
import { Link } from 'react-router-dom';

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [comprador, setComprador] = useState({})
  const [orderId, setOrderId] = useState('')
  const { cart, getTotalPrice, getItemTotalCount, clearCart } = useContext(CartContext)

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value
    })
  }

  const finalizarCompra = (e) => {
    e.preventDefault()
    if (Object.values(comprador).length !== 3) {
      alert('Todos los campos son requeridos')
    } else {
      const ventas = collection(db, "orders")
      addDoc(ventas, {
        comprador,
        items: cart,
        total: getTotalPrice(),
        date: new Date()
      })
        .then((res) => {
          setOrderId(res.id)
          clearCart()
        })
        .catch((error) => console.log(error))
    }
  }

  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <>
        {orderId ?
          <>
            <div className='container'>
              <div className="mb-3 conteinerOrder">
                <h3>Muchas gracias por su compra!</h3>
                <p>Su numero de order es: </p>
                <button className="btn btn-success">{orderId}</button>
                <hr />
                <Link to={'/'} className='btn btnVermas'>
                  Volver al inicio
                </Link>
              </div>
            </div>
          </>
          :
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
            </div>

            <div className='container containerCarritoNew'>
              <div className="card">
                <div className="col-md-12 cart">
                  <div className='row'>


                    <form onSubmit={finalizarCompra}>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="text-uppercase">Nombre y apelllido:</label>
                        <input type="text" className="form-control" placeholder="Lucas Barbieri" name='name' onChange={datosComprador} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="text-uppercase">N° de contacto:</label>
                        <input type="text" className="form-control" placeholder="1122664022" name='phone' onChange={datosComprador} />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="text-uppercase">E-Mail:</label>
                        <input type="email" className="form-control" placeholder="email@gmail.com" name='email' onChange={datosComprador} />
                      </div>
                      <div className="mb-3">
                        <button className="btn btnVermas" type='submit'>Finalizar compra</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
      </>
    )
  }
}

export default Checkout;