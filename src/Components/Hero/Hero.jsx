import React from "react";
import "./Hero.css";
import handIcon from "../Assets/hand_icon.png";
import arrowIcon from "../Assets/arrow.png";
import heroImg from "../Assets/hero_image.png";

export const Hero = () => {
  return (
    <section className="hero-section d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-between px-4 px-lg-5 py-5">
      {/* Left Side */}
      <div className="text-center text-lg-start">
        <h2 className="text-dark fs-4 fw-semibold">NEW ARRIVALS ONLY</h2>

        <div className="mt-3">
          <div className="d-flex justify-content-center justify-content-lg-start align-items-center gap-3 mb-2">
            <p className="fw-bold display-1 mb-0 text-dark">New</p>
            <img src={handIcon} alt="waving hand" style={{ width: "80px" }} />
          </div>
          <p className="fw-bold display-1 text-dark mb-0">Collections</p>
          <p className="fw-bold display-1 text-dark">for Everyone</p>
        </div>

        <div
          className="d-inline-flex align-items-center gap-3 bg-danger text-white px-4 py-3 rounded-pill mt-4 fs-5 fw-medium"
          style={{ width: "fit-content" }}
        >
          <span>Latest Collection</span>
          <img src={arrowIcon} alt="arrow icon" height="24" />
        </div>
      </div>

      {/* Right Side */}
      <div className="mt-5 mt-lg-0 d-flex justify-content-center align-items-center">
        <img src={heroImg} alt="female fashion model" className="img-fluid" />
      </div>
    </section>
  );
};

export default Hero;
