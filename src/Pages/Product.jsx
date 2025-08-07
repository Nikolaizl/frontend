import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Breadcrum } from "../Components/Breadcrum/Breadcrum";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import { getProductDetails, getCategoryProducts } from "../api/zappos";
import { ClipLoader } from "react-spinners";
import { Container, Row, Col, Alert } from "react-bootstrap";

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
      <div className="d-flex justify-content-center my-5">
        <ClipLoader />
      </div>
    );
  }

  if (error) {
    return (
      <Container className="my-4">
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="my-4">
        <Alert variant="warning" className="text-center">
          No product found.
        </Alert>
      </Container>
    );
  }

  return (
    <Container className="my-4">
      <Row>
        <Col>
          <Breadcrum product={product} />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProductDisplay product={product} />
        </Col>
      </Row>
      <Row>
        <Col>
          <DescriptionBox description={product.description} />
        </Col>
      </Row>

      {/* Related Products */}
      {/* <Row className="mt-4">
        <Col>
          <RelatedProducts products={relatedProducts} />
        </Col>
      </Row> */}
    </Container>
  );
};

export default Product;
