import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../Components/Breadcrum/Breadcrum";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { DescriptionBox } from "../Components/DescriptionBox/DescriptionBox";
import { getProductDetails } from "../api/zappos";
import { getCategoryProducts } from "../api/zappos";
import { ClipLoader } from "react-spinners";

export const Product = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      setError(null);
      try {
        const data = await getProductDetails(productId);
        setProduct(data);

        if (data.categoryFacet) {
          const related = await getCategoryProducts(data.categoryFacet, [
            data.gender,
          ]);
          setRelatedProducts(related.slice(0, 4));
        }
      } catch (err) {
        setError("Failed to load product details.");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [productId]);

  if (loading) {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
      >
        <ClipLoader />
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>No product found.</p>;
  }

  return (
    <div>
      <Breadcrum product={product} />
      <ProductDisplay product={product} />
      <DescriptionBox description={product.description} />
      {/* <RelatedProducts products={relatedProducts} /> */}
    </div>
  );
};

export default Product;
