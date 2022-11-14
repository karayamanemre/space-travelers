import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/planet.png';
import './styles/Header.css';

export default function header() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <header>
      <div className="logo">
        <img src={logo} className="logo-img" alt="logo" />
        <h1>
          Space Traveler`s Hub
        </h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/Rockets" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Rockets
            </NavLink>
          </li>
          <li>
            <NavLink to="/Missions" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Missions
            </NavLink>
          </li>
          <li>|</li>
          <li>
            <NavLink to="/Profile" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              My Profile
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>

  );
}