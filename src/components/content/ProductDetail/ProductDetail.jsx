import React from 'react';
import ItemQuantitySelector from '../../layouts/ItemQuantitySelector';

const ProductDetail = ({ product }) => {
    return (
        <>
            <section className="section" style={{ paddingBottom: "10rem" }}>
                <div className="products__card__img card">
                    <img className="card-img-top img-fluid" src={product[1].img} alt="" style={{ width: "40rem", borderRadius: "1rem" }}></img>
                    <div className="card-body text-center">
                        <h1 className="card-text">{product[1].title}</h1>
                        <h4 className="card-text">{product[1].info}</h4>
                        <h3 className="card-text">${product[1].price}</h3>
                        <h4 className="card-text">En stock: {product[1].stock}</h4>
                        <ItemQuantitySelector product={product} />
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetail;
