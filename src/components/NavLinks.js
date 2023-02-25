import { NavLink } from 'react-router-dom';

export default function NavLinks() {
  const activeStyle = {
    textDecoration: 'underline',
  };
  return (
    <div className="text-sm sm:text-xl flex gap-2">
      <NavLink
        to="/"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Rockets
      </NavLink>
      <NavLink
        to="/Missions"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Missions
      </NavLink>
      <NavLink
        to="/Profile"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        Profile
      </NavLink>
    </div>
  );
}
