import React from "react";
import exclusiveImg from "../Assets/exclusive_image.png";
import "./Offers.css";

export default function Offers() {
  return (
    <div className="offers container my-5 py-5 bg-light rounded">
      <div className="row align-items-center">
        {/* Left Section */}
        <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
          <h1 className="fw-bold">Exclusive</h1>
          <h1 className="fw-bold">Offers for You</h1>
          <p className="text-muted">ONLY ON BEST SELLERS PRODUCTS</p>
          <button className="btn btn-dark mt-2">Check Now</button>
        </div>

        {/* Right Section */}
        <div className="col-md-6 text-center">
          <img
            src={exclusiveImg}
            alt="female model"
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>
      </div>
    </div>
  );
}
