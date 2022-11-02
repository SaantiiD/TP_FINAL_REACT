import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLogo = () => {
    return (
        <>
            <Link className="navbar-brand" to='/'>
                <img className="logo" src="https://firebasestorage.googleapis.com/v0/b/proyecto-final-react-767c1.appspot.com/o/img%2Flogo.png?alt=media&token=8901a93e-93e7-46ea-9e1a-5652e450a63e" alt="Logo" />
            </Link>
        </>
    );
}

export default NavBarLogo;
