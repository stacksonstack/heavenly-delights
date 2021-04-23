import React from "react";
import Contact from "../Components/Contact";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const navigateTo = () => history.push("/bakery");

  return (
    <div className="home">
      <h1>Heavenly Delights</h1>
      <p>United By The Flower That Unites Us All</p>
      <button onClick={navigateTo}>Check Out Our Menu</button>
      <Contact />
    </div>
  );
}

export default Home;
