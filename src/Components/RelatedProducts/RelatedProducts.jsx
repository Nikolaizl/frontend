import React from "react";
import Item from "../Item/Item";
import "./RelatedProducts.css";

const RelatedProducts = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No related products found.</p>;
  }

  return (
    <div className="relatedproducts">
      <h2>Related Products</h2>
      <div className="relatedproducts-list">
        {products.map((prod) => (
          <Item
            key={prod.productId}
            id={prod.productId}
            name={prod.productName}
            image={
              prod.defaultImageUrl
                ? `https://www.zappos.com${prod.defaultImageUrl}`
                : "/placeholder.png"
            }
            new_price={prod.price?.currentPrice || ""}
            old_price={prod.price?.originalPrice || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
