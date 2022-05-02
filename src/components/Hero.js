import React from "react";
import heroMobileImg from "../assets/images/hero-img-mobile.png";
import heroTabletImg from "../assets/images/hero-img-tablet.png";
import heroDesktopImg from "../assets/images/hero-img-desktop.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__image">
        <img className="hero__img-m" src={heroMobileImg} alt="" />
        <img className="hero__img-t" src={heroTabletImg} alt="" />
        <img className="hero__img-d" src={heroDesktopImg} alt="" />
      </div>
      <h1>
        Group Chat <br />
        for Everyone
      </h1>
      <p className="hero__p">
        Meet makes it easy to connect with others face-to-face virtually and
        collaborate across any device.
      </p>
      <div className="hero__btns">
        <button className="hero__download-btn">
          Download
          <span className="hero__btn__app-version">v1.3</span>
        </button>
        <button className="hero__what-is-it">What is it?</button>
      </div>
    </div>
  );
}
