import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Context';
import ItemCount from '../ItemCount/ItemCount';
import '../ItemDetail/ItemDetail.css'


const ItemDetail = ({ productos }) => {

  const { addToCart, getTotalPrice, getItemTotalCount, getQuantity } = useContext(CartContext);

  const [purchase, setPurchase] = useState(false)
  const handleAddToCart = (count) => {
    addToCart(productos, count);
    setPurchase(true)
  }

  return (
    <section className="bg-ligth">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img className="card-img img-fluid" src={productos.imagen_detail} alt="" />
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body">
                <h2>{productos.titulo}</h2>
                <p>$ {productos.price} </p>
                <p>Codigo: {productos.id}</p>
                {productos.stock && <p>stock {productos?.stock - getQuantity(productos)} </p>}
                <h6>Description:</h6>
                <p>{productos.descripcion}
                </p>
                <h6>Specification:</h6>
                <ul className="list-unstyled pb-3">
                  <li>{productos.especificaciones}</li>
                </ul>
                <ul className="list-unstyled pb-3">
                  {!purchase && <ItemCount onAddToCart={handleAddToCart} stock={productos.stock - getQuantity(productos)} initial={1} />}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container-total'>
          <p>Precio total: $ {getTotalPrice()}</p>
          <p>Items totales: {getItemTotalCount()}</p>
          <p><Link to='/cart'><button className='botonesCount'>Ir al carrito</button></Link></p>
      </div>
    </section>

  );
};

export default ItemDetail;