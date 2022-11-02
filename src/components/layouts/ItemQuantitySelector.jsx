import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const ItemQuantitySelector = ({ product }) => {
    const { addToCart } = useContext(CartContext);
    const [cant, setCant] = useState(1);
    function productCant(operation) {
        if (operation === "+") {
            if (cant < product[1].stock) {
                setCant(cant + 1);
            }
        } else {
            if (cant > 1) {
                setCant(cant - 1);
            }
        }
    }
    return (
        <>
            <button onClick={() => productCant("-")} className="btn btn-primary" style={{ padding: ".5rem" }}>-</button>
            <h4 className="btn-light" style={{ display: "inline", padding: "1rem" }}>{cant}</h4>
            <button onClick={() => productCant("+")} className="btn btn-primary" style={{ padding: ".5rem" }}>+</button>
            <button className="btn btn-dark border border-dark border-2" onClick={() => addToCart(product, cant)} style={{ marginLeft: "1rem" }}>Agregar al carrito</button>
        </>
    );
}

export default ItemQuantitySelector;
