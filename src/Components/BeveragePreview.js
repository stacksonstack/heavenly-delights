import React from "react";
import { NavLink } from "react-router-dom";

function BeveragePreview({name, price, image, beverageId, onSale, salePrice , isAvailable}) {

  return (
    <>
      <NavLink to={`/beverages/${beverageId}`}>
        <div className="beverage-preview">
        <h3>{name}</h3>
      
      
      <img id="beverage-img" alt={name} src={`http://localhost:1337${image}`}/>
      {onSale?<> <p style={{ textDecoration: "line-through" }}>${price}</p> <p>${salePrice}</p></>: <p>${price}</p>}
      {isAvailable ? null : <p id="sold-out">Sold Out</p>}
    </div>
    </NavLink>
    </>
  );
}

export default BeveragePreview;