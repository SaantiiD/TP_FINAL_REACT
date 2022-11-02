import { React, createContext, useState } from 'react';

const CartContext = createContext();
const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (prod, cant) => {
        const aux = cart;
        let index = aux.findIndex(product => product.id === prod[0]);
        if (index !== -1) {
            aux[index].cant = cant;
        }
        else {
            const id = prod[0];
            const data = prod[1];
            const prodCart = { id, ...data, cant: cant }
            aux.push(prodCart)
        }
        setCart(structuredClone(aux));
    }

    const deleteFromCart = (prod) => {
        const aux = cart;
        let index = aux.findIndex(product => product.id === prod.id);
        aux.splice(index, 1);
        setCart(structuredClone(aux));

    }

    const cleanCart = () => {
        setCart([]);
    }

    return (
        <>
            <CartContext.Provider value={{ cart, addToCart, deleteFromCart, cleanCart }}>
                {props.children}
            </CartContext.Provider>
        </>
    );
}

export { CartContext, CartProvider };
