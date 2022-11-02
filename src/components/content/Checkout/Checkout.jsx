import React, { useContext, useState } from 'react';
import { CartContext } from '../../../context/CartContext';
import { createOrder, updateProduct, getProduct } from "./../../../utils/firebase";
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
    const navigate = useNavigate();
    const [emailValid, setEmailValid] = useState('');
    const handleChange = event => {
        setEmailValid(event.target.value);
    };
    const { cart, cleanCart } = useContext(CartContext);
    const orderInfo = React.useRef();
    const totalPrice = cart.reduce((a, b) => a + b.price * b.cant, 0);
    const uploadForm = (e) => {
        e.preventDefault();
        const dataForm = new FormData(orderInfo.current);
        const data = Object.fromEntries(dataForm);
        createOrder(totalPrice, data).then(id => {
            navigate("/myorders/" + id);
        });

        cart.map(prod => {
            getProduct(prod.id).then(product => {
                const prodi = product[1];
                prodi.stock -= prod.cant;
                updateProduct(prod.id, prodi);
                cleanCart();
            })
        })
    }
    if (cart.length !== 0) {
        return (
            <>
                <h1 className="text-center" style={{ padding: "3rem 0" }}>Por favor, completa tus datos para continuar con la compra.</h1>
                <form style={{ padding: " 1rem 10rem", fontSize: "1.2rem" }} onSubmit={uploadForm} ref={orderInfo}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" required="required" className="form-control" name="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="last_name" className="form-label">Apellido</label>
                        <input type="text" required="required" className="form-control" name="last_name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="dni" className="form-label">DNI</label>
                        <input type="number" required="required" className="form-control" name="dni" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input type="email" required="required" className="form-control" name="email" onChange={handleChange} value={emailValid} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Repeti el E-mail</label>
                        <input type="email" required="required" className="form-control" name="email" pattern={emailValid} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="address" className="form-label">Direccion</label>
                        <input type="text" required="required" className="form-control" name="address" />
                    </div>
                    <button type="submit" className="btn btn-primary">Finalizar compra</button>
                </form>
            </>);
    }
    else {
        return (
            <div className="text-center">
                <h1 style={{ padding: "5rem" }}>No existen elementos en el carrito</h1>
                <Link className="btn btn-light border border-dark border-2" to={"/"}>Volver al Home</Link>
            </div>
        );
    }

}

export default Checkout;
