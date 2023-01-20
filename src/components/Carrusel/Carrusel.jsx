import React from 'react'
import '../Carrusel/Carrusel.css'

const Carrusel = ({ id, imagen_carrusel, imagen_detail, titulo, descripcion, especificaciones, price, stock }) => {
    return (
        <div className="carousel-item active" data-bs-interval="3000">
            <img src={imagen_carrusel} className="d-block w-100" alt={titulo} />
            <div className="carousel-caption d-none d-md-block">
                <h5>{titulo}</h5>
                <p>{descripcion}</p>
            </div>
        </div>

    )
}

export default Carrusel;