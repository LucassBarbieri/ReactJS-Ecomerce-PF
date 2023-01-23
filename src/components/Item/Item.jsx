import React from 'react'
import { Link } from "react-router-dom"
// import useFirebase from '../../hook/useFirebase'
import '../Item/Item.css'

const Item = ({ id, imagen_carrusel, imagen_detail, titulo, descripcion, especificaciones, price, stock }) => {

    return (
        <>
            <div className="card bg-dark text-white">
                <img src={imagen_detail} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title text-white">{titulo}</h5>
                    <p className="card-text">{descripcion}</p>
                    <p className="card-text"><Link className="btn btnVermas" to={`/item/${id}`}>Ver mas...</Link></p>
                </div>
            </div>
        </>
    )
}

export default Item;