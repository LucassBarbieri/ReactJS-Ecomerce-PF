import React from 'react'
import { Link } from "react-router-dom"
import ItemCount from '../ItemCount/ItemCount'

const Cards = ({ id, imagen_carrusel, imagen_detail, titulo, descripcion, especificaciones, precio, stock }) => {
    
    return (
        <div className="carousel-item active" data-bs-interval="10000">
            <img src={imagen_carrusel} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>{titulo}</h5>
                <p>{descripcion}</p>
                <p><Link className="btn btn-primary" to={`/item/${id}`}>ADQUIRIR</Link></p>
                <p><ItemCount/></p>
            </div>
        </div>
    )
}

export default Cards