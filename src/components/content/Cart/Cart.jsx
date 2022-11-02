import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
const Cart = () => {
    const { cart, deleteFromCart, cleanCart } = useContext(CartContext)
    const [localCart, setLocalCart] = useState([]);

    useEffect(() => {
        const cartProd = cart.map(product =>
            <div className="products__card__img card w-25" key={product.id}>
                <img className="card-img-top img-fluid" src={product.img} alt=""></img>
                <div className="card-body text-center">
                    <h1 className="card-text">{product.title}</h1>
                    <h4 className="card-text">${product.price}</h4>
                    <p className="card-text">Cantidad: {product.cant}</p>
                    <p className="card-text">Subtotal: ${product.cant * product.price}</p>
                    <button className="btn btn-danger" onClick={() => deleteFromCart(product)}>Borrar del carrito</button>
                </div>
            </div>
        )
        setLocalCart(cartProd);
    }, [cart]);

    if (cart.length !== 0) {
        return (
            <>
                <div className="row">
                    <Link to={'/checkout'}></Link>
                    <section className="products__cards section">{localCart}</section>
                </div>
                <div className="text-center">
                    <button style={{ marginRight: "1rem", marginBottom: "15rem" }} className="btn btn-light" onClick={() => cleanCart()}>VACIAR CARRITO</button>
                    <Link to={'/checkout'} style={{ marginLeft: "1rem" }}><button style={{ marginBottom: "15rem" }} className="btn btn-success">FINALIZAR COMPRA</button></Link>
                </div>
            </>
        )
    } else {
        return (
            <div className="text-center">
                <h1 style={{ padding: "5rem" }}>No existen elementos en el carrito</h1>
                <Link className="btn btn-light border border-dark border-2" to={"/"}>Volver al Home</Link>
            </div>
        )
    }

}

export default Cart;
