import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="newsletter container text-center my-5 py-5 bg-light rounded">
      <h1 className="fw-bold mb-3">Get Exclusive Offers on Your Email</h1>
      <p className="mb-4">Subscribe to our newsletter and stay updated</p>
      <form className="row justify-content-center">
        <div className="col-10 col-sm-8 col-md-6 col-lg-4 d-flex">
          <input
            type="email"
            className="form-control me-2"
            placeholder="Your Email"
          />
          <button type="submit" className="btn btn-dark">
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
}
