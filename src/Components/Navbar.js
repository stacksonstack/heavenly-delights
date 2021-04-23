import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul className="nav" id="nav">
        <NavLink exact to="/">
          <li> Home</li>
        </NavLink>
        <NavLink to="/bakery">
          <li> Bakery</li>
        </NavLink>
        <NavLink to="/beverages">
          <li> Beverages</li>
        </NavLink>
        <NavLink to="/about">
          <li> About Us</li>
        </NavLink>
      </ul>
    </>
  );
}

export default Navbar;
