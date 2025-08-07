import React from "react";

const DescriptionBox = ({ description }) => {
  return (
    <div className="container my-5">
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <span className="nav-link active fw-semibold">Description</span>
        </li>
      </ul>
      <div className="border p-4 mt-3 bg-light">
        {description ? (
          <div dangerouslySetInnerHTML={{ __html: description }} />
        ) : (
          <p className="text-muted">
            No description available for this product.
          </p>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
