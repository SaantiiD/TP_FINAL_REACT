import React from 'react';
import NavBarLogo from './navbar_components/NavBarLogo';
import NavBarCollapse from './navbar_components/NavBarCollapse';
import NavBarList from './navbar_components/NavBarList';

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <NavBarLogo />
          <NavBarCollapse />
          <NavBarList />
        </div>
      </nav>
    </>
  );
}

export default NavBar;
