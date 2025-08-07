import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import "./Item.css";

export const Item = (props) => {
  const { setSelectedProduct } = useContext(ShopContext);

  const handleClick = () => {
    setSelectedProduct({
      id: props.id,
      name: props.name,
      image: props.image,
      new_price: props.new_price,
      old_price: props.old_price,
      category: props.category || "Unknown",
    });
    window.scrollTo(0, 0);
  };

  return (
    <div className="item-wrapper mb-4" onClick={handleClick}>
      <Link to={`/product/${props.id}`} className="text-decoration-none">
        <div className="custom-card">
          <img src={props.image} alt={props.name} className="custom-card-img" />
          <div className="custom-card-body">
            <p className="mb-2 text-dark">{props.name}</p>
            <div className="d-flex gap-2">
              <div className="text-dark fw-semibold">${props.new_price}</div>
              <div className="text-muted text-decoration-line-through">
                ${props.old_price}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
