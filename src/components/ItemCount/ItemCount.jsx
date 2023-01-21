import React, { useState } from 'react'
import '../ItemCount/ItemCount.css'

const ItemCount = ({ initial, stock, onAddToCart }) => {

    const [count, setCount] = useState(initial);

    const agregar = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const restar = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <>{stock > 0 ? <>
            <h1 className='count-title'>Cantidad: {count}</h1>
            <div className='botonesCount-container'>
                <button key={count >= 1} onClick={() => agregar()} className='botonesCount'><strong>Agregar</strong></button>
                <button key={count} onClick={() => restar()} className='botonesCount'><strong>Restar</strong></button>
                <button onClick={() => { onAddToCart(count); }} className='botonesCount'><strong>Agregar al carrito</strong></button>
            </div>
        </>
            : <p>Lo sentimos no hay stock disponible</p>
        }
        </>
    )
}

export default ItemCount