import React from 'react'
import '../Carrusel/Carrusel.css'
import img from '../../assets/img/imagen2.png'

const Carrusel = ({ id, imagen_carrusel, imagen_detail, titulo, descripcion, especificaciones, price, stock }) => {
    return (
        <>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={img} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{titulo}</h5>
                        <p>{descripcion}</p>
                    </div>
                </div>
            </div>
            </>
            )
}

            export default Carrusel;
