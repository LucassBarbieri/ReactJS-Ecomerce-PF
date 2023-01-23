import React, { useState } from 'react'
import '../ItemCount/ItemCount.css'
// import { Link } from 'react-router-dom';

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

            <div className='botonesCount-container'>
                <button key={count >= 1} onClick={() => agregar()} className="btn btn-primary">
                    <strong>+</strong>
                </button>
                <div className="btn btnCounterNumber text-uppercase">
                    <strong>{count}</strong>
                </div>
                <button key={count} onClick={() => restar()} className="btn btn-primary">
                    <strong>-</strong>
                </button>
                <button onClick={() => { onAddToCart(count); }} className="btn btnVermas">
                    <strong>Agregar al carrito</strong>
                </button>
            </div>
        </>
            :
            <button className="btn btnVermas">
                <strong>Sin stock actualmente</strong>
            </button>
        }
        </>
    )
}

export default ItemCount