import React from 'react';
import logo from '../assets/planet.png';
import NavLinks from './NavLinks';

const Header = () => (
  <div className="fixed top-0 left-0 w-full z-50">
    <header className="bg-blue-900 text-white p-4">
      <div className="flex items-center justify-between container mx-auto">
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10  mr-2 sm:w-14 sm:h-14"
          />
          <h1 className="font-bold text-lg sm:text-2xl">Space Traveler</h1>
        </div>
        <NavLinks />
      </div>
    </header>
  </div>
);

export default Header;
