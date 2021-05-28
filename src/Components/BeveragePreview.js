import React from "react";
import { NavLink } from "react-router-dom";

function BeveragePreview({
  name,
  price,
  image,
  beverageId,
  onSale,
  salePrice,
  isAvailable,
}) {
  return (
    <>
      <NavLink to={`/beverages/${beverageId}`}>
        <div className="beverage-preview">
          <h3>{name}</h3>

          {/* <img
            id="beverage-img"
            alt={name}
            src={`https://heavenly-delights-api.herokuapp.com${image}`}
          /> */}
          <img
                alt={name}
                src={`/images/Screen Shot 2021-05-20 at 7.48.53 PM.png`}
              />
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

export default BeveragePreview;
