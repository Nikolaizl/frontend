import React from "react";
import "./DescriptionBox.css";

export const DescriptionBox = ({ description }) => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
      </div>
      <div className="descriptionbox-description">
        {description ? (
          <div dangerouslySetInnerHTML={{ __html: description }}></div>
        ) : (
          <p>No description available for this product.</p>
        )}
      </div>
    </div>
  );
};

export default DescriptionBox;
