import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul className="nav" id="nav">
        <NavLink exact to="/" >
          <li> Home</li>
        </NavLink>
        <NavLink activeStyle={{color:'#F49090'}} to="/bakery" >
          <li> Bakery</li>
        </NavLink>
        <NavLink activeStyle={{color:'#F49090'}} to="/beverages">
          <li> Beverages</li>
        </NavLink>
        <NavLink activeStyle={{color:'#F49090'}} to="/about">
          <li> About Us</li>
        </NavLink>
      </ul>
    </>
  );
}

export default Navbar;
