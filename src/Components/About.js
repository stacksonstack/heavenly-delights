import React from "react";
import { SiInstagram, SiTiktok } from "react-icons/si";

function About() {
  return (
    <>
      <h2>Our Company</h2>
      <p>Quick Blurb About this company</p>
      <div className="contact-btns">
        <a
          href="https://www.instagram.com/heavenlydelightss/"
          target="_blank"
          rel="noreferrer"
        >
          <SiInstagram id="icon-about" />
        </a>
        <a
          href="https://www.tiktok.com/@heavenlydelights"
          target="_blank"
          rel="noreferrer"
        >
          <SiTiktok id="icon-about" />
        </a>
      </div>
    </>
  );
}

export default About;
