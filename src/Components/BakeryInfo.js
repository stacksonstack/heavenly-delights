import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function BakeryInfo({
  name,
  desc,
  price,
  ml,
  isAvailable,
  onSale,
  salePrice,
  image,
  closeUp,
}) {
  return (
    <div className="grid-wrapper">
      <div className="bakery-info-div">
        <div className="info-name">
          <h2>{name}</h2>
        </div>
        <div className="info-desc">
          <p id="info-desc">{desc}</p>
        </div>
        <div className="info-ml">
          <p id="info-ml">{ml} ml</p>
        </div>
        <div className="info-price">
          {onSale ? (
            <div className="price-full-info">
              {" "}
              <p
                id="info-price"
                style={{ textDecoration: "line-through", paddingRight: "10px" }}
              >
                ${price}
              </p>{" "}
              <p id="info-price" style={{ color: "rgb(234, 26, 6)" }}>
                ${salePrice}
              </p>{" "}
            </div>
          ) : (
            <p id="info-price">${price}</p>
          )}
        </div>
        <div className="info-avail">
          {isAvailable ? null : (
            <p id="info-avail" style={{ color: "rgb(234, 26, 6)" }}>
              Sold Out
            </p>
          )}
        </div>
        <div className="info-img">
          <Carousel>
            <div>
              <img alt={name} src={`http://localhost:1337${image}`} />
            </div>
            <div>
              <img
                alt={`Close Up Of ${name}`}
                src={`http://localhost:1337${closeUp}`}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default BakeryInfo;
