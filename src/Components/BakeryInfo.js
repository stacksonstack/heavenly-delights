import React from "react";

function BakeryInfo({
  name,
  desc,
  price,
  ml,
  isAvailable,
  onSale,
  salePrice,
  image,
}) {
  return (
    <div className="container">
      <div className="bakery-info-div">
        <h2>{name}</h2>
        <p>{desc}</p>
        <p>{ml} ml</p>
        {onSale ? (
          <>
            {" "}
            <p style={{ textDecoration: "line-through" }}>${price}</p>{" "}
            <p>${salePrice}</p>{" "}
          </>
        ) : (
          <p>${price}</p>
        )}
        {isAvailable ? null : <p>Currently Unavailable</p>}
        <img alt={name} src={`http://localhost:1337${image}`} />
      </div>
    </div>
  );
}

export default BakeryInfo;
