import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../../../utils/firebase';
import CartWidget from './CartWidget';

const NavBarList = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        getCategories().then(categories => {
            const cat = categories.map(category =>
                <li className="nav-item" key={category[0]}>
                    <Link to={`/category/${category[1].category}`} className="nav-link">
                        {category[1].title}
                    </Link>
                </li>
            )
            setCategories(cat);
        })
    }, []);
    return (
        <>
            <div className="collapse navbar-collapse navbar-dark justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    {categories}
                    <CartWidget />
                </ul>
            </div>
        </>
    );
}

export default NavBarList;
