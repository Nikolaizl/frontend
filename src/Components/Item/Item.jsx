import React, { useContext } from "react";
import "./Item.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export const Item = (props) => {
  const { setSelectedProduct } = useContext(ShopContext);

  return (
    <div
      className="item"
      onClick={() => {
        setSelectedProduct({
          id: props.id,
          name: props.name,
          image: props.image,
          new_price: props.new_price,
          old_price: props.old_price,
          category: props.category || "Unknown",
        });
        window.scrollTo(0, 0);
      }}
    >
      <Link to={`/product/${props.id}`}>
        <img src={props.image} alt="" />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">{props.new_price}</div>
        <div className="item-price-old">{props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;
