import React, { useEffect, useState } from "react";
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
      <div className="d-flex justify-content-center my-5">
        <ClipLoader />
      </div>
    );
  }

  return (
    <div className="container text-center my-5">
      <h1 className="fw-bold">NEW COLLECTIONS</h1>
      <hr className="mx-auto" style={{ width: "200px" }} />
      <div className="row g-4 mt-4">
        {error && <p className="text-danger">{error}</p>}
        {newCollection.slice(45, 53).map((item, i) => {
          const showOldPrice = item.price !== item.originalPrice;

          return (
            <div key={i} className="col-6 col-sm-4 col-md-3 col-lg-3">
              <Item
                id={item.productId}
                name={item.productName}
                image={`https://m.media-amazon.com/images/I/${item.msaImageId}._AC_SR700,525_.jpg`}
                new_price={item.price}
                old_price={showOldPrice ? item.originalPrice : null}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
