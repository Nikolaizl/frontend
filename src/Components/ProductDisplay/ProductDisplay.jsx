import React, { useContext } from "react";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

export const ProductDisplay = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      {/* LEFT SECTION */}
      <div className="productdisplay-left">
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product.image}
            alt={product.name}
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <p className="brand">Brand: {product.brand}</p>

        {/* PRICES */}
        <div className="productdisplay-right-prices">
          {product.old_price && product.old_price !== product.price && (
            <div className="productdisplay-right-price-old">
              ${product.old_price}
            </div>
          )}
          <div className="productdisplay-right-price-new">${product.price}</div>
        </div>

        {/* SIZES */}
        {product.sizes && product.sizes.length > 0 && (
          <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              {product.sizes.map((size, index) => (
                <div key={index}>{size}</div>
              ))}
            </div>
          </div>
        )}

        {/* ADD TO CART */}
        <button
          onClick={() => {
            addToCart({
              id: product.id,
              name: product.name,
              image: product.image,
              price: product.price,
            });
          }}
        >
          ADD TO CART
        </button>

        {/* CATEGORY */}
        <p className="productdisplay-right-category">
          <span>Category:</span> {product.category}
        </p>
        <p className="productdisplay-right-category">
          <span>Brand:</span> {product.brand}
        </p>
      </div>
    </div>
  );
};
