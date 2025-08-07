import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import { getCategoryProducts } from "../../api/zappos";
import { ClipLoader } from "react-spinners";

export default function Popular() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPopular() {
      setLoading(true);
      setError(null);

      try {
        const data = await getCategoryProducts("Clothing", ["Men"]);
        setPopular(data);
      } catch (err) {
        setError("Failed to load products");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPopular();
  }, []);

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <ClipLoader />
      </div>
    );
  }

  return (
    <div className="popular">
      <h1>POPULAR in MEN</h1>
      <hr />
      <div className="popular-item">
        {loading && <p className="message">Loading products...</p>}
        {error && <p className="message">{error}</p>}
        {popular.slice(28, 32).map((item, i) => {
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
    </div>
  );
}
