import { NavLink } from 'react-router-dom';

export default function NavLinks() {
  const activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <>
      <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Rockets</NavLink>
      <NavLink to="/Missions" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Missions</NavLink>
      <p>|</p>
      <NavLink to="/Profile" style={({ isActive }) => (isActive ? activeStyle : undefined)}>Profile</NavLink>
    </>
  );
}
