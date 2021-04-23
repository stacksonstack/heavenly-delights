import React from "react";
import { NavLink } from "react-router-dom";

function BakeryPreview({name, price, image , bakeryId}) {

  return (
    <div className="bakery-preview">
      <NavLink to={`/bakery/${bakeryId}`}>
         <h1>{name}</h1>
      </NavLink>
     
      <img id="bakery-img" alt={name} src={`http://localhost:1337${image}`}/>
      <p>${price}</p>
    </div>
  );
}

export default BakeryPreview;