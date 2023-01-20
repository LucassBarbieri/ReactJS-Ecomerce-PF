import React from 'react'
import { Link } from "react-router-dom"

const Cards = ({ id, imagen_carrusel, imagen_detail, titulo, descripcion, especificaciones, price, stock }) => {

    return (
        <>
            <div className="card">
                <img src={imagen_detail} className="card-img-top" alt="Portada" />
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text">{descripcion}</p>
                        <p className='btnConteiner'><Link className="btn btn-primary" to={`/item/${id}`}>ADQUIRIR</Link></p>
                    </div>
            </div>
        </>
    )
}

export default Cards;
