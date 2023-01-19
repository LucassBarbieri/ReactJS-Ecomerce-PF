import React from 'react'
import Item from '../Cards/Cards'

const ItemList = ({ productos }) => {
  return (
    <div>

      <div id="carouselExampleDark" class="carousel carousel-dark slide">

        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">

          {productos.map((i) => (<Item
            key={i.id}
            id={i.id}
            titulo={i.titulo}
            descripcion={i.descripcion}
            especificaciones={i.especificaciones}
            imagen_carrusel={i.imagen_carrusel}
            imagen_detail={i.imagen_detail}
            precio={i.precio}
            stock={i.stock}
          />))}

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>

      </div>
      
    </div>


  );
};


export default ItemList