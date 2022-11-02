import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../../context/CartContext';

const CartWidget = () => {
    const { cart } = useContext(CartContext)

    let productsCant = cart.reduce((a, b) => a + b.cant, 0);
    let productsPrice = cart.reduce((a, b) => a + b.cant * b.price, 0);

    return (
        <li style={{ margin: "0 1rem" }}>
            <Link to={'/cart'}>
                <button className="btn btn-outline-light" >
                    <i className="bi-cart-fill me-1" ><span className="">x{productsCant} - </span></i>
                    <span>${productsPrice}</span>
                </button>
            </Link>
        </li>
    );
}

export default CartWidget;
