import React, { useState, useEffect } from "react";
import BeveragePreview from "../Components/BeveragePreview"
function BeverageContainer() {
  const [beverage, setBeverage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/beverages")
      .then((res) => res.json())
      .then((res) => setBeverage(res));
  }, []);

  return (
    <>
      <h1>Heavenly Delights Bar</h1>
      <div>
        {beverage.map((beverage) => (
          <BeveragePreview
            key={beverage.id}
            name={beverage.name}
            desc={beverage.description}
            price={beverage.price}
            ml={beverage.milligrams}
            isAvailable={beverage.isAvailable}
            onSale={beverage.onSale}
            salePrice={beverage.salePrice}
            image={beverage.image.formats.thumbnail.url}
          />
        ))}
      </div>
    </>
  );
}

export default BeverageContainer;