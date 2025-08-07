import React from "react";
import "./Breadcrum.css";
import arrowIcon from "../Assets/breadcrum_arrow.png";
import { Container } from "react-bootstrap";

export const Breadcrum = ({ product }) => {
  return (
    <Container className="my-4">
      <div className="breadcrum">
        HOME <img src={arrowIcon} alt="arrow icon" />
        SHOP <img src={arrowIcon} alt="arrow icon" />
        {product.category || "Category"}{" "}
        <img src={arrowIcon} alt="arrow icon" />
        {product.name || "Product"}
      </div>
    </Container>
  );
};
