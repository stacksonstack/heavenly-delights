import React, { useState, useEffect } from "react";
import BakeryPreview from "../Components/BakeryPreview";
import { Route, Switch } from "react-router-dom";
import BakeryInfo from "../Components/BakeryInfo";

function BakeryContainer(props) {
  const [bakery, setBakery] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/bakeries")
      .then((res) => res.json())
      .then((res) => setBakery(res));
  }, []);

  return (
    <>
      {bakery.length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <Switch>
            <Route
              exact
              path="/bakery"
              render={() => {
                return (
                  <div className="container">
                    <h2>Heavenly Delights Bakery</h2>
                    <div className="bakery-container">
                      {bakery.map((bakedGood) => (
                        <BakeryPreview
                          key={bakedGood._id}
                          bakeryId={bakedGood._id}
                          name={bakedGood.name}
                          price={bakedGood.price}
                          isAvailable={bakedGood.isAvailable}
                          onSale={bakedGood.onSale}
                          salePrice={bakedGood.salePrice}
                          image={bakedGood.image.formats.thumbnail.url}
                        />
                      ))}
                    </div>
                  </div>
                );
              }}
            />
            <Route
              path="/bakery/:id"
              render={({ match }) => {
                let id = match.params.id;
                let foundBakedGood = bakery.find(
                  (bakedGood) => bakedGood._id === id
                );
                return (
                  <BakeryInfo
                    key={foundBakedGood._id}
                    name={foundBakedGood.name}
                    desc={foundBakedGood.description}
                    price={foundBakedGood.price}
                    ml={foundBakedGood.milligrams}
                    isAvailable={foundBakedGood.isAvailable}
                    onSale={foundBakedGood.onSale}
                    salePrice={foundBakedGood.salePrice}
                    image={foundBakedGood.image.formats.thumbnail.url}
                    closeUp= {foundBakedGood.close_up.formats.thumbnail.url}
                  />
                );
              }}
            />
          </Switch>
        </>
      )}
    </>
  );
}

export default BakeryContainer;
