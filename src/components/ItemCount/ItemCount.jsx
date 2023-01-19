import React, { useState } from 'react'

function ItemCount({ props }) {

    const { stock, cantidad, handleAgregar, handleRestar } = props;

    const { initialValue, addCarrito, item } = props;
    const { count, setCount } = useState(initialValue);
    // const { stock } = item

    // const handleAgregar = () => {
    //     if (count < stock) {
    //         setCount(count + 1)
    //     }
    // }

    // const handleRestar = () => {
    //     if (count > 1) {
    //         setCount(count - 1)
    //     }
    // }

    const producto = {
        ...item,
        cantidad: count
    }

    return (
        <div>
            <p>Stock: {stock}</p>
            <p>Cantidad Seleccionada: {cantidad}</p>
            <button onClick={handleRestar}>-</button>
            <button onClick={handleAgregar}>+</button>
        </div>
    );
}

export default ItemCount;
