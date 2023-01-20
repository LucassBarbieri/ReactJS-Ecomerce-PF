import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'
import Carrusel from '../Carrusel/Carrusel';

const ItemList = ({ productos }) => {
  return (
    <>
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
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
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


export default ItemList;