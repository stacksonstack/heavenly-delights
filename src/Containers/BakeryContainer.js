import React, { useState, useEffect } from "react";
import BakeryPreview from "../Components/BakeryPreview";
import { Route, Switch } from "react-router-dom";
import BakeryInfo from "../Components/BakeryInfo";

function BakeryContainer() {
  const [bakery, setBakery] = useState([]);

  useEffect(() => {
    async function fetchData(){ 
      let response = await fetch("https://heavenly-delights-api.herokuapp.com/bakeries")
      let data = await response.json()
      setBakery(data)
    }
    fetchData()
  }, []);
  return (
    <>
    
      <>
        <Switch>
          <Route
            exact
            path="/bakery"
            render={() => {
              return (
                <div className="container">
                  <h2>Heavenly Delights Bakery</h2>
                  {bakery.length === 0 ? (
                    <h1>Loading...</h1>
                  ) : (
                    <div className="bakery-container">
                      {console.log(bakery)}
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
                  )}
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
                <>
                   <div className="container">
                {bakery.length === 0 ? (
                    <h1>Loading...</h1>
                  ) : (
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
                  closeUp={foundBakedGood.close_up.formats.thumbnail.url}
                />)}</div>
                </>
              );
            }}
          />
        </Switch>
      </>
    </>
  );
}

export default BakeryContainer;
