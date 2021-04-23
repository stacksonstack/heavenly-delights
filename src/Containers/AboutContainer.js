import React from "react";
import About from "../Components/About"
import Newsletter from "../Components/Newsletter"


function AboutContainer() {

  return (
    <div className="about-container">
      <div className="about">
      <About />
      </div>
      <div className="newsletter">
   <Newsletter />
      </div>

 
    </div>
  );
}

export default AboutContainer;