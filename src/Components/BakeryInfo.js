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
  closeUp
}) {
  return (
    <div className="container">
      <div className="grid-wrapper">
      <div className="bakery-info-div">
        <div className="info-name"><h2>{name}</h2></div>
        <div className="info-desc"><p id="info-desc">{desc}</p></div>
        <div className="info-ml"><p id="info-ml">{ml} ml</p></div>
        <div className="info-price">{onSale ? (
          <>
            {" "}
            <p id="info-price" style={{ textDecoration: "line-through" }}>${price}</p>{" "}
            <p id="info-price">${salePrice}</p>{" "}
          </>
        ) : (
          <p id="info-price">${price}</p>
        )}</div>
        <div className="info-avail">{isAvailable ? null : <p id="info-avail" style={{ color: "rgb(234, 26, 6)" }}>Sold Out</p>}</div>
        <div className="info-img"><img alt={name} src={`http://localhost:1337${image}`} /></div>
        <div className="info-close-up"><img alt={`Close Up Of ${name}`} src={`http://localhost:1337${closeUp}`} /></div>
        
      </div>
      </div>
    </div>
  );
}

export default BakeryInfo;
