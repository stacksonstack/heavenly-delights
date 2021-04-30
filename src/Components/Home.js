import React from "react";
import { SiInstagram, SiTiktok } from "react-icons/si";
import { useHistory } from "react-router-dom";

function Home() {
  const history = useHistory();
  const navigateTo = () => history.push("/bakery");

  return (
    <div className="home-container">
      <div className="home">
      <div className="home-title"><h1 id="home-title">Heavenly Delights</h1></div>
      <div className="home-img"><img alt="heavenly delights logo" src="/images/logoFontless.png" id="logo"/></div>
      {/* <img alt="heavenly delights logo" src="/images/logo.png" id="logo"/> */}
      {/*BEST VERSION <img alt="heavenly delights logo" src="/images/logo9.png" id="logo"/> */}
      <div className="home-text"><b><p id="home-text">United By The Flower That Unites Us All</p></b></div>
      <div className="home-btn"><button onClick={navigateTo}>Check Out Our Menu</button></div>
      <div className="home-contact"><div class="contact-btns">
      <a
        href="https://www.instagram.com/heavenlydelightss/"
        target="_blank"
        rel="noreferrer"
      >
        <SiInstagram id="icon"/>
      </a>
      <a href="https://www.tiktok.com/@heavenlydelights" target="_blank" rel="noreferrer">
        <SiTiktok id="icon"/>
      </a>
      {/* https://icons8.com/icons/set/tiktok */}
      {/* https://react-icons.github.io/react-icons/icons?name=im */}
    </div></div>
    </div>
    </div>
    
  );
}

export default Home;
