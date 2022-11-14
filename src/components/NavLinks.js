import { NavLink } from 'react-router-dom';

const NavLinks = () => (
  <>
    <NavLink to="/">Rockets</NavLink>
    <NavLink to="/Missions">Missions</NavLink>
    <p>|</p>
    <NavLink to="/Profile">Profile</NavLink>
  </>
);

export default NavLinks;
