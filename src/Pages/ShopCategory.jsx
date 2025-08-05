import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import dropdownIcon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item";
import { getCategoryProducts } from "../api/zappos";
import { ShopContext } from "../Context/ShopContext";

export const ShopCategory = (props) => {
  //zappos api integration
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { selectedCategory } = useContext(ShopContext);

  useEffect(() => {
    const genderMap = {
      mens: ["Men"],
      womens: ["Women"],
      kids: ["Girls", "Boys"],
    };

    async function fetchProducts() {
      setProducts([]);
      setLoading(true);
      setError(null);
      try {
        const data = await getCategoryProducts(
          "Clothing",
          genderMap[selectedCategory]
        );
        console.log("API Response:", data);
        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, [selectedCategory]);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing {products.length === 0 ? 0 : 1}-
            {products.length < 16 ? products.length : 16}
          </span>{" "}
          out of {products.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdownIcon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {loading && <p className="message">Loading products...</p>}
        {error && <p className="message">{error}</p>}
        {products.slice(0, 16).map((item, i) => {
          const showOldPrice = item.price !== item.originalPrice;

          return (
            <Item
              key={i}
              id={item.productId}
              name={item.productName}
              image={`https://m.media-amazon.com/images/I/${item.msaImageId}._AC_SR700,525_.jpg`}
              new_price={item.price}
              old_price={showOldPrice ? item.originalPrice : null}
            />
          );
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
