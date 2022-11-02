import React from 'react';
import { Link } from 'react-router-dom';
const Error404 = () => {
    return (
        <>
            <div className="text-center">
                <h1 style={{ padding: "5rem" }}>La página solicitada no esta disponible</h1>
                <Link className="btn btn-light border border-dark border-2" to={"/"}>Volver al Home</Link>
            </div>
        </>
    );
}

export default Error404;
