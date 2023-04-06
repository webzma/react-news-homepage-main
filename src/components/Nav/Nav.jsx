import React from 'react';
import './Nav.css';
import logo from '../../assets/images/logo.svg';

function Nav() {
  return(
    <header>
      <nav>
        <img src={logo} alt="Logo" className='logo' />

        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">New</a></li>
          <li><a href="#">Popular</a></li>
          <li><a href="#">Trending</a></li>
          <li><a href="#">Categories</a></li>
        </ul>
      </nav>
    </header>
  );
}

export { Nav };