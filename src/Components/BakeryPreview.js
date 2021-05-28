import React from "react";
import { NavLink } from "react-router-dom";

function BakeryPreview({
  name,
  price,
  image,
  bakeryId,
  onSale,
  isAvailable,
  salePrice,
}) {
  return (
    <>
      <NavLink to={`/bakery/${bakeryId}`}>
        <div className="bakery-preview">
          <h3>{name}</h3>

          {/* <img
            id="bakery-img"
            alt={name}
            src={`https://heavenly-delights-api.herokuapp.com${image}`}
          /> */}
          <img alt={name} src={`/images/Screen Shot 2021-05-20 at 7.49.08 PM.png`} />
          {onSale ? (
            <div className="price">
              {" "}
              <p
                style={{ textDecoration: "line-through", paddingRight: "15px" }}
              >
                ${price}
              </p>{" "}
              <p id="sold-out">${salePrice}</p>
            </div>
          ) : (
            <p>${price}</p>
          )}
          {isAvailable ? null : <p id="sold-out">Sold Out</p>}
        </div>
      </NavLink>
    </>
  );
}

export default BakeryPreview;
