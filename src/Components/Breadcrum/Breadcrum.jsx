import React from "react";
import "./Breadcrum.css";
import arrowIcon from "../Assets/breadcrum_arrow.png";

export const Breadcrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum">
      HOME <img src={arrowIcon} alt="arrow icon" />
      SHOP <img src={arrowIcon} alt="arrow icon" />
      {product.category}
      <img src={arrowIcon} alt="arrow icon" />
      {product.name}
    </div>
  );
};
