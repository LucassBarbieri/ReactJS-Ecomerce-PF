import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState([])
    const [contador, setContador] = useState(0)

    const isInCart = (id) => cart.find(item=> item.id === id);

    const addToCart = (item, count) => {
        if (isInCart(item.id)){
            setCart(cart.map((productos)=>{
                setContador(contador + count)
                return productos.id === item.id ? { ...productos, count: (productos.count += count)} : productos;
                })
            );
        } else {
            setCart([...cart, {...item, count}]);
            setContador(contador + count)
        }
    }

    const clearCart = () => {
        setCart([]);
    }

    const removeItem = (idToRemove) => {
        let newCart = cart.filter((itemInCart) => itemInCart.id !== idToRemove);
        setCart(newCart);
    }

    const getTotalPrice = () => {
        return cart.reduce((prev,act) => prev + act.count * act.price, 0)
    }

    const getItemTotalCount = () => {
        let total = 0;
        cart.forEach(itemInCart=>{
            total = total + itemInCart.count
        });
        return total;
    }

    return (
        <>
            <CartContext.Provider value={{ cart, addToCart, clearCart, removeItem, getTotalPrice, getItemTotalCount, contador }}>
                {children}
            </CartContext.Provider>
        </>
    )

}

export default CartProvider;
