import React from "react";
import { NavLink } from "react-router-dom";

function BakeryPreview({name, price, image , bakeryId, onSale, isAvailable, salePrice}) {

  return (
    <>
    <NavLink to={`/bakery/${bakeryId}`}>
    <div className="bakery-preview">
      
         <h3>{name}</h3>
      
     
      <img id="bakery-img" alt={name} src={`http://localhost:1337${image}`}/>
      {onSale?<> <p style={{ textDecoration: "line-through" }}>${price}</p> <p>${salePrice}</p></>: <p>${price}</p>   }
      {isAvailable ? null : <p id="sold-out">Sold Out</p>}
    </div>
    </NavLink>
    </>
  );
}

export default BakeryPreview;