import React from "react";
import { NavLink } from "react-router-dom";

function BakeryPreview({name, price, image , bakeryId}) {

  return (
    <>
    <NavLink to={`/bakery/${bakeryId}`}>
    <div className="bakery-preview">
      
         <h3>{name}</h3>
      
     
      <img id="bakery-img" alt={name} src={`http://localhost:1337${image}`}/>
      <p>${price}</p>
      
    </div>
    </NavLink>
    </>
  );
}

export default BakeryPreview;