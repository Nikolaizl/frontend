import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import { getCategoryProducts } from "../../api/zappos";
import { ClipLoader } from "react-spinners";

export default function NewCollections() {
  const [newCollection, setNewCollection] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchNewCollection() {
      setLoading(true);
      setError(null);

      try {
        const data = await getCategoryProducts("Clothing", ["Men", "Women"]);
        setNewCollection(data);
      } catch (err) {
        setError("Failed to load products");
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    fetchNewCollection();
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "50px auto 50px auto",
        }}
      >
        <ClipLoader />
      </div>
    );
  }

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {loading && <p className="message">Loading products...</p>}
        {error && <p className="message">{error}</p>}
        {newCollection.slice(45, 53).map((item, i) => {
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
