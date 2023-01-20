import React, { useState } from 'react'

const ItemCount = ({onAddToCart}) => {

    const [count, setCount] = useState(1);
    const agregar = () => setCount(count + 1);
    const restar = () => setCount(count - 1);

    return (
        <>
            <h1>Cantidad: {count}</h1>
            <button onClick={() => agregar()}>Agregar</button>
            <button onClick={() => restar()}>Restar</button>
            <button onClick={() => {onAddToCart(count);}}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount

