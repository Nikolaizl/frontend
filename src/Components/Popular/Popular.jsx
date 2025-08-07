import React, { useEffect, useState } from "react";
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
      <div className="d-flex justify-content-center my-5">
        <ClipLoader />
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold">POPULAR in MEN</h1>
      <hr className="mx-auto w-25" />
      <div className="row g-4 justify-content-center">
        {error && <p className="text-danger text-center">{error}</p>}
        {popular.slice(28, 32).map((item, i) => {
          const showOldPrice = item.price !== item.originalPrice;

          return (
            <div className="col-6 col-md-3" key={i}>
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
