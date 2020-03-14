import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dogs">Dogs</NavLink>
      {/* <NavLink to="/activities">Daily Activities</NavLink> */}
     </div>
  );
};

export default NavBar;