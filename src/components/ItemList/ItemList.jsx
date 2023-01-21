import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'
import Carrusel from '../Carrusel/Carrusel';
import useFirebase from '../../hook/useFirebase';
import { Link } from 'react-router-dom';

const ItemList = ({  }) => {

  const { productos } = useFirebase()

  return (
    <>
      <div>
        <h1>Item list container</h1>
        {productos.map(({ id, titulo }) => (
          <Link to={`/item/${id}`}>
            <h1>{titulo}</h1>
          </Link>
        ))}
      </div>

      <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {productos.map((item) => (<Carrusel
            key={item.id}
            id={item.id}
            titulo={item.titulo}
            descripcion={item.descripcion}
            especificaciones={item.especificaciones}
            imagen_carrusel={item.imagen_carrusel}
            imagen_detail={item.imagen_detail}
            price={item.price}
            stock={item.stock}
          />))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className='conteinercard'>
        {productos.map((item) => (<Item
          key={item.id}
          id={item.id}
          titulo={item.titulo}
          descripcion={item.descripcion}
          especificaciones={item.especificaciones}
          imagen_carrusel={item.imagen_carrusel}
          imagen_detail={item.imagen_detail}
          price={item.price}
          stock={item.stock}
        />))}
      </div>
    </>

  );
};


export default ItemList;