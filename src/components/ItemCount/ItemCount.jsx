import React, { useState } from 'react'

function ItemCount(stock) {
    
    const {initialValue, addCarrito, item} = stock;
    const {count, setCount} = useState(initialValue);
    const {stock} = item

    const sumar = () => {
        if (count < stock){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const producto = {
        ...item,
        cantidad:count
    }

    return (
        <div>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <button onClick={()=> addCarrito(producto)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount
