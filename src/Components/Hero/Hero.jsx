import React from "react";
import "./Hero.css";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import heroImg from "../Assets/hero_image.png";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hand-icon">
            <p>New</p>
            <img src={handIcon} alt="waving hand" />
          </div>
          <p>Collections</p>
          <p>for Everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="arrow icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImg} alt="female fashion model" />
      </div>
    </div>
  );
};

export default Hero;
