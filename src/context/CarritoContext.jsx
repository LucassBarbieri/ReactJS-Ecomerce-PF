import React, {createContext, useState} from 'react'

export const CarritoContext = createContext('');

export const CarritoContextProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const addCarrito = (productosToAdd, quantity) => {

        const newObj = {...productosToAdd, quantity}

        if(IsInCart(newObj.id)){
            carrito.map(el => {
                if(el.id === newObj.id){
                    el.quantity += newObj.quantity
                }
                return(el)
            })
        }else {
            setCarrito([...carrito, newObj])
        }
        
    }
     
    const IsInCart = (id) => {
        return carrito.some(el => el.id === id)
    }

    return (
        <CarritoContext.Provider value={{productos, carrito, addCarrito}}>
            {children}
        </CarritoContext.Provider>
    )
}

export default CarritoContextProvider;