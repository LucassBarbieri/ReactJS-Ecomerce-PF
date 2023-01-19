import React, { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ productos }) => {

  const { item } = productos;
  const [cantidad, setCantidad] = useState(0);

  function handleAgregar() {
    setCantidad(cantidad + 1);
  }

  function handleRestar() {
    if (cantidad > 0) {
      setCantidad(cantidad - 1);
    }
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
                <p>$ {productos.precio} </p>
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
                  <ItemCount stock={item.stock} cantidad={cantidad} handleAgregar={handleAgregar} handleRestar={handleRestar} />

                  {/* <button onClick={() => addCarrito(productos)}>Carrito</button> */}

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItemDetail;