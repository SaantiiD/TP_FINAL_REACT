import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../../utils/firebase';
const Home = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then(categories => {
            const cat = categories.map(category =>
                <div className="card-body padding-main" key={category[0]}>
                    <div className={"text-center mb-4 main-cards " + category[1].category}>
                        <h3 className="display-4">
                            {category[1].title}
                        </h3>
                        <p className="lead">
                            {category[1].info}
                        </p>
                        <Link className="btn btn-dark border border-dark border-2" to={"/category/" + category[1].category}>Ver más</Link>
                    </div>
                </div>
            )
            setCategories(cat);
        })
    }, []);

    return (
        <section className="categories__cards section">
            <div>
                {categories}
            </div>
        </section>
    );
}

export default Home;
