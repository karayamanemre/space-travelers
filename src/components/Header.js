import React from 'react';
import './styles/Header.css';
import logo from '../assets/planet.png';
import NavLinks from './NavLinks';

const Header = () => (
  <header>
    <div className="logo">
      <img src={logo} alt="logo" className="logo-img"/>
      <h1>Space Traveler's Hub</h1>
    </div>
    <nav>
      <NavLinks />
    </nav>
  </header>
);

export default Header;