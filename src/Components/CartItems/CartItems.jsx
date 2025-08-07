import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../Assets/cart_cross_icon.png";

export const CartItems = () => {
  const { cartItems, removeFromCart, getTotalAmount } = useContext(ShopContext);

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven’t added anything yet.</p>
        <a href="/shop" className="cart-empty-btn">
          Start Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      {cartItems.map((item) => (
        <div key={item.id} className="cartitems-format-main cartitems-format">
          <img
            src={item.image}
            alt={item.name}
            className="carticon-product-icon"
          />
          <p>{item.name}</p>
          <p>${item.price.toFixed(2)}</p>
          <button className="cartitems-quantity">{item.quantity}</button>
          <p>${(item.price * item.quantity).toFixed(2)}</p>
          <img
            className="cartitems-remove-icon"
            onClick={() => removeFromCart(item.id)}
            src={removeIcon}
            alt="remove"
          />
        </div>
      ))}
      <hr />

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, enter it here!</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="Promo Code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
