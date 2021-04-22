import React from "react";

function BeverageInfo({name, desc, ml, onSale, price, salePrice, isAvailable, image }) {

  return (
    <div>
      <h1>{name}</h1>
      <p>{desc}</p>
      <p>{ml} ml</p>
      {onSale? <> <p style={{textDecoration:'line-through'}}>${price}</p> <p>${salePrice}</p> </>: <p>${price}</p>}
      {isAvailable ? null : <p>Currently Unavailable</p> }
      <img alt={name} src={`http://localhost:1337${image}`}/>
    </div>
  );
}

export default BeverageInfo;