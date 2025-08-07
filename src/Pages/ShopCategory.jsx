import React, { useContext, useEffect, useState } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import { getCategoryProducts } from "../api/zappos";
import { ShopContext } from "../Context/ShopContext";
import { ClipLoader } from "react-spinners";
import { Container, Row, Col, Button } from "react-bootstrap";

export const ShopCategory = (props) => {
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

  const sortedProducts = [...products].sort((a, b) => {
    const cleanPrice = (price) => {
      if (!price) return 0;
      const cleaned = price.toString().replace(/[^0-9.]/g, "");
      return parseFloat(cleaned) || 0;
    };

    const priceA = cleanPrice(a.price);
    const priceB = cleanPrice(b.price);

    if (sortOption === "price-low") return priceA - priceB;
    if (sortOption === "price-high") return priceB - priceA;
    if (sortOption === "name-asc")
      return a.productName.localeCompare(b.productName);
    if (sortOption === "name-desc")
      return b.productName.localeCompare(a.productName);
    return 0;
  });

  if (loading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <ClipLoader />
      </div>
    );
  }

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <Container>
        <div className="shopcategory-indexSort d-flex justify-content-between align-items-center mb-4">
          <p>
            <span>
              Showing {products.length === 0 ? 0 : 1}-{visibleCount}
            </span>{" "}
            out of {products.length} products
          </p>
          <div className="shopcategory-sort d-flex align-items-center gap-2">
            <label htmlFor="sort">Sort by:</label>
            <select
              id="sort"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="form-select"
            >
              <option value="">Default</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
        </div>

        <Row className="gx-5 gy-5">
          {error && <p className="message">{error}</p>}
          {sortedProducts.slice(0, visibleCount).map((item, i) => {
            const showOldPrice = item.price !== item.originalPrice;
            return (
              <Col key={i} xs={12} sm={6} md={4} lg={3}>
                <Item
                  id={item.productId}
                  name={item.productName}
                  image={`https://m.media-amazon.com/images/I/${item.msaImageId}._AC_SR700,525_.jpg`}
                  new_price={item.price}
                  old_price={showOldPrice ? item.originalPrice : null}
                  category={selectedCategory}
                />
              </Col>
            );
          })}
        </Row>

        {visibleCount < sortedProducts.length && (
          <div className="text-center mt-5">
            <Button
              variant="light"
              className="shopcategory-loadmore"
              onClick={() => setVisibleCount((prev) => prev + 16)}
            >
              Explore More
            </Button>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ShopCategory;
