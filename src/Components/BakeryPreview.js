import React from "react";
import { NavLink } from "react-router-dom";

function BakeryPreview({name, price, image , bakeryId, onSale, isAvailable, salePrice}) {

  return (
    <>
    <NavLink to={`/bakery/${bakeryId}`}>
    <div className="bakery-preview">
      
         <h3>{name}</h3>
      
     
      <img id="bakery-img" alt={name} src={`http://localhost:1337${image}`}/>
      {onSale?<div className="price"> <p style={{ textDecoration: "line-through", paddingRight: "15px" }}>${price}</p> <p id="sold-out">${salePrice}</p></div>: <p>${price}</p>   }
      {isAvailable ? null : <p id="sold-out">Sold Out</p>}
    </div>
    </NavLink>
    </>
  );
}

export default BakeryPreview;