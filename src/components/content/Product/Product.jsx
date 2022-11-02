import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductDetail from '../ProductDetail/ProductDetail';
import { getProduct } from '../../../utils/firebase';

const Product = () => {
    const [product, setProduct] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        getProduct(id).then(prod =>
            setProduct(prod))
    }, []);

    if (product.length !== 0) {
        if (product[1] !== undefined) {
            return (
                <ProductDetail product={product} />
            )
        }
        else {
            return (
                <div className="text-center">
                    <h1 style={{ padding: "5rem" }}>No se encuentra el producto solicitado.</h1>
                    <Link className="btn btn-light border border-dark border-2" to={"/"}>Volver al Home</Link>
                </div>
            );
        }
    }
}

export default Product;
