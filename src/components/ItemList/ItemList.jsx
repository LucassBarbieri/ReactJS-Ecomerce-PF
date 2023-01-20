import React from 'react'
import Item from '../Item/Item'
import '../ItemList/ItemList.css'

const ItemList = ({ productos }) => {
  return (
    <>
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


export default ItemList