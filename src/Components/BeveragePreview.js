import React from "react";
import { NavLink } from "react-router-dom";

function BeveragePreview({name, price, image, beverageId }) {

  return (
    <>
      <NavLink to={`/beverages/${beverageId}`}>
        <div className="beverage-preview">
        <h3>{name}</h3>
      
      
      <img id="beverage-img" alt={name} src={`http://localhost:1337${image}`}/>
      <p>${price}</p>
    </div>
    </NavLink>
    </>
  );
}

export default BeveragePreview;