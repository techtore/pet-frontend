import React from 'react';
import { NavLink } from 'react-router-dom';

const links = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'purple',
  color: 'white'
}


const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" style={links}>Home</NavLink>
      <NavLink to="/dogs" style={links}>Dogs</NavLink>
      {/* <NavLink to="/activities">Daily Activities</NavLink> */}
     </div>
  );
};

export default NavBar;