import React, { useState, useEffect } from "react";
import BakeryPreview from "../Components/BakeryPreview";

function BakeryContainer() {
  const [bakery, setBakery] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/bakeries")
      .then((res) => res.json())
      .then((res) => setBakery(res));
  }, []);

  return (
    <>
      <h1>Heavenly Delights Bakery</h1>
      <div>
        {bakery.map((bakedGood) => (
          <BakeryPreview
            key={bakedGood.id}
            name={bakedGood.name}
            desc={bakedGood.description}
            price={bakedGood.price}
            ml={bakedGood.milligrams}
            isAvailable={bakedGood.isAvailable}
            onSale={bakedGood.onSale}
            salePrice={bakedGood.salePrice}
            image={bakedGood.image.url}
          />
        ))}
      </div>
    </>
  );
}

export default BakeryContainer;
