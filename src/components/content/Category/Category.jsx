import React, { useState, useEffect, useContext } from 'react';
import { ReorderContext } from '../../../context/ReorderContext';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from '../../../utils/firebase';

const Category = () => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const { reorder, toggleReorder } = useContext(ReorderContext);

    const boton = reorder ? "ORDENAR POR PRECIO 🔽" : "ORDENAR POR PRECIO 🔼";
    useEffect(() => {
        getProducts().then(products => {
            const filteredProducts = products.filter(product => product[1].category === id && product[1].stock >= 1);
            if (reorder ? filteredProducts.sort((a, b) => (a[1].price > b[1].price) ? 1 : ((b[1].price > a[1].price) ? -1 : 0)) : filteredProducts.sort((a, b) => (a[1].price < b[1].price) ? 1 : ((b[1].price < a[1].price) ? -1 : 0)));
            const productCard = filteredProducts.map(product =>
                <div className="products__card__img card w-25" key={product[0]}>
                    <img className="card-img-top img-fluid rounded-top border border-dark" src={product[1].img} alt=""></img>
                    <div className="card-body">
                        <h1 className="card-text">{product[1].title}</h1>
                        <h3 className="card-text text-center">${product[1].price}</h3>
                        <div className="text-center">
                            <Link className="btn btn-dark border border-dark border-2" to={"/product/" + product[0]}>Ver producto</Link>
                        </div>
                    </div>
                </div>
            )
            setProducts(productCard);
        })
    }, [id, reorder]);
    return (
        <>
            <div className="row">
                <button className="btn btn-success" onClick={() => toggleReorder()}>{boton}</button>
            </div>
            <section className="products__cards section">
                {products}
            </section>
        </>
    );
}

export default Category;
