import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getOrder } from '../../../utils/firebase';

const MyOrders = () => {
    const navigate = useNavigate();
    const searchOrder = React.useRef();
    const uploadForm = (e) => {
        e.preventDefault();
        const dataForm = new FormData(searchOrder.current);
        const data = Object.fromEntries(dataForm);
        getOrder(data.id).then(orden => {
            navigate("/myorders/" + data.id);
        })

    }
    return (
        <div className="text-center">
            <h1 style={{ padding: "2rem 0 2rem 0" }}>Busca tu orden de compra!</h1>
            <form style={{ padding: "3rem 15rem 3rem 15rem", fontSize: "1.5rem" }} onSubmit={uploadForm} ref={searchOrder}>
                <div className="mb-3">
                    <label htmlFor="order-id" className="form-label">Ingresa tu ID:</label>
                    <input type="text" required="required" className="form-control" name="id" />
                </div>
                <button type="submit" className="btn btn-primary">Buscar</button>
            </form>
        </div>
    );
}


const MyOrdersID = () => {
    const [order, setOrder] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getOrder(id).then(order =>
            setOrder(order));
    }, []);
    if (order[1] !== undefined) {
        return (
            <div style={{ padding: "10rem 10rem" }} className="text-center">
                <h3>Hola {order[1].name}, tu pedido realizado el día {order[1].date}, y con un costo total de ${order[1].total_price} ya se encuentra en nuestra base de datos.</h3>
                <h2 style={{ padding: "5rem 0" }}>El ID de tu compra es: "{order[0]}"</h2>
                <Link className="btn btn-light border border-dark border-2" to={"/myorders"}>Volver al buscador</Link>
            </div>
        );
    } else {
        return (
            <div className="text-center">
                <h1 style={{ padding: "5rem" }}>Por favor, introduce un ID válido.</h1>
                <Link className="btn btn-light border border-dark border-2" to={"/myorders"}>Volver al buscador</Link>
            </div>
        );
    }
}

export { MyOrdersID, MyOrders };

