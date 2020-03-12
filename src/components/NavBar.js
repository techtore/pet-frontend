import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/api/v1/dogs">Dogs</NavLink>
      <NavLink to="/daily_activities">Daily Activities</NavLink>
     </div>
  );
};

export default NavBar;