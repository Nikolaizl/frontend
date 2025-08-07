import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./ProductDisplay.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid productdisplay-main-img"
          />
        </div>

        {/* RIGHT INFO */}
        <div className="col-md-6">
          <h1 className="mb-3">{product.name}</h1>
          <p className="text-muted mb-2">Brand: {product.brand}</p>

          {/* Prices */}
          <div className="d-flex gap-4 align-items-center mb-4">
            {product.old_price && product.old_price !== product.price && (
              <div className="text-muted text-decoration-line-through fs-5">
                ${product.old_price}
              </div>
            )}
            <div className="text-danger fw-bold fs-4">${product.price}</div>
          </div>

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mb-4">
              <h5 className="text-secondary fw-semibold mb-3">Select Size</h5>
              <div className="d-flex flex-wrap gap-3">
                {product.sizes.map((size, index) => (
                  <div key={index} className="size-box">
                    {size}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Button */}
          <button
            className="btn btn-danger px-4 py-2 mb-4"
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
              })
            }
          >
            ADD TO CART
          </button>

          {/* Category Info */}
          <p className="mb-1">
            <span className="fw-semibold">Category:</span> {product.category}
          </p>
          <p>
            <span className="fw-semibold">Brand:</span> {product.brand}
          </p>
        </div>
      </div>
    </div>
  );
};
