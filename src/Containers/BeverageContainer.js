import React, { useState, useEffect } from "react";
import BeveragePreview from "../Components/BeveragePreview";
import { Route, Switch } from "react-router-dom";
import BeverageInfo from "../Components/BeverageInfo";

function BeverageContainer() {
  const [beverage, setBeverage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/beverages")
      .then((res) => res.json())
      .then((res) => setBeverage(res));
  }, []);

  return (
    <>
      <>
        <Switch>
          <Route
            exact
            path="/beverages"
            render={() => {
              return (
                <div className="container">
                  <h2>Heavenly Delights Bar</h2>
                  {beverage.length === 0 ? (
                    <h1>Loading...</h1>
                  ) : (
                    <div className="beverages-container">
                      {beverage.map((beverage) => (
                        <BeveragePreview
                          key={beverage._id}
                          beverageId={beverage._id}
                          name={beverage.name}
                          price={beverage.price}
                          isAvailable={beverage.isAvailable}
                          onSale={beverage.onSale}
                          salePrice={beverage.salePrice}
                          image={beverage.image.formats.thumbnail.url}
                        />
                      ))}
                    </div>
                  )}
                </div>
              );
            }}
          />
          <Route
            path="/beverages/:id"
            render={({ match }) => {
              let id = match.params.id;
              let foundBeverage = beverage.find((bev) => bev._id === id);
              return (
                <BeverageInfo
                  key={foundBeverage._id}
                  name={foundBeverage.name}
                  desc={foundBeverage.description}
                  price={foundBeverage.price}
                  ml={foundBeverage.milligrams}
                  isAvailable={foundBeverage.isAvailable}
                  onSale={foundBeverage.onSale}
                  salePrice={foundBeverage.salePrice}
                  image={foundBeverage.image.formats.thumbnail.url}
                  closeUp={foundBeverage.close_up.formats.thumbnail.url}
                />
              );
            }}
          />
        </Switch>
      </>
      }
    </>
  );
}

export default BeverageContainer;
