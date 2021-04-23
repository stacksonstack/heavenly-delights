import React from "react";
import { NavLink } from "react-router-dom";

function BeveragePreview({name, price, image, beverageId }) {

  return (
    <div className="beverage-preview">
      <NavLink to={`/beverages/${beverageId}`}>
        <h1>{name}</h1>
      </NavLink>
      
      <img id="beverage-img" alt={name} src={`http://localhost:1337${image}`}/>
      <p>${price}</p>
    </div>
  );
}

export default BeveragePreview;