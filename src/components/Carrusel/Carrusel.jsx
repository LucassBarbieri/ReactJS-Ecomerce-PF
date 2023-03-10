import React from 'react'
import '../Carrusel/Carrusel.css'
import { Link } from 'react-router-dom'

const Carrusel = ({ id, imagen_carrusel, imagen_detail, titulo, descripcion, especificaciones, price, stock }) => {

    return (

        <>
            <div className="carousel-item active" data-bs-interval="3000">
                <img src={imagen_carrusel} className="d-block w-100" alt={titulo} />
                <div className="carousel-caption d-none d-md-block">
                    {/* <h5>{titulo}</h5> */}
                    {/* <p>{descripcion}</p> */}
                    <p className='btnConteiner'><Link className="btn btn-warning" to={`/item/${id}`}>ADQUIRIR</Link></p>
                </div>
            </div>
        </>

    )
}

export default Carrusel;