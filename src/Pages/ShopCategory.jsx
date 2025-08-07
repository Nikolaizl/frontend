import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import { getCategoryProducts } from "../api/zappos";
import { ShopContext } from "../Context/ShopContext";
import { ClipLoader } from "react-spinners";

export const ShopCategory = (props) => {
  //zappos api integration
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("");
  const [visibleCount, setVisibleCount] = useState(16);

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

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <ClipLoader />
      </div>
    );
  }

  //Sorting logic
  const sortedProducts = [...products].sort((a, b) => {
    const cleanPrice = (price) => {
      if (!price) return 0;
      const cleaned = price.toString().replace(/[^0-9.]/g, "");
      return parseFloat(cleaned) || 0;
    };

    const priceA = cleanPrice(a.price);
    const priceB = cleanPrice(b.price);

    if (sortOption === "price-low") {
      return priceA - priceB;
    } else if (sortOption === "price-high") {
      return priceB - priceA;
    } else if (sortOption === "name-asc") {
      return a.productName.localeCompare(b.productName);
    } else if (sortOption === "name-desc") {
      return b.productName.localeCompare(a.productName);
    }
    return 0;
  });

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing {products.length === 0 ? 0 : 1}-{visibleCount}
          </span>{" "}
          out of {products.length} products
        </p>
        <div className="shopcategory-sort">
          <label htmlFor="sort">Sort by: </label>
          <select
            id="sort"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
          </select>
        </div>
      </div>
      <div className="shopcategory-products">
        {error && <p className="message">{error}</p>}
        {sortedProducts.slice(0, visibleCount).map((item, i) => {
          const showOldPrice = item.price !== item.originalPrice;
          return (
            <Item
              key={i}
              id={item.productId}
              name={item.productName}
              image={`https://m.media-amazon.com/images/I/${item.msaImageId}._AC_SR700,525_.jpg`}
              new_price={item.price}
              old_price={showOldPrice ? item.originalPrice : null}
              category={selectedCategory}
            />
          );
        })}
      </div>
      {visibleCount < sortedProducts.length && (
        <div
          className="shopcategory-loadmore"
          onClick={() => setVisibleCount((prev) => prev + 16)}
        >
          Explore More
        </div>
      )}
    </div>
  );
};

export default ShopCategory;
