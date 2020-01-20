import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
      <div className="navbar-brand">
        <h1>GitHub Search</h1>
        <ul className='navbar-nav'>
          <li className='navbar-item'>
            <NavLink to="/" className='nav-link'>Главная</NavLink>
          </li>
          <li className='navbar-item'>
            <NavLink to="/about" className='nav-link'>Информация</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default NavBar;