import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../Context/Context';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ productos }) => {

  const { addToCart, getTotalPrice, getItemTotalCount } = useContext(CartContext);

  const handleAddToCart = (count) => {
    addToCart(productos, count);
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
                <p>Codigo COD#0{productos.id}</p>
                <p>stock {productos.stock} </p>

                <h6>Description</h6>
                <p>{productos.descripcion}
                </p>
                <h6>Specification</h6>
                <ul className="list-unstyled pb-3">
                  <li>{productos.especificaciones}</li>
                </ul>
                <ul className="list-unstyled pb-3">
                  <ItemCount onAddToCart={handleAddToCart} />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled pb-3">
          <li>Precio total: {getTotalPrice()}</li>
        </ul>
        <ul className="list-unstyled pb-3">
          <li>Items totales: {getItemTotalCount()}</li>
        </ul>
        <ul className="list-unstyled pb-3">
          <Link to='/cart'><button>Ir al carrito</button></Link>
        </ul>
      </div>
    </section>
  );
};

export default ItemDetail;