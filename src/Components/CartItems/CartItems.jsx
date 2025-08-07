import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import removeIcon from "../Assets/cart_cross_icon.png";
import "./CartItems.css"; // still needed for minimal custom styles

export const CartItems = () => {
  const { cartItems, removeFromCart, getTotalAmount } = useContext(ShopContext);

  if (cartItems.length === 0) {
    return (
      <div className="text-center p-5">
        <h2>Your cart is empty</h2>
        <p>Looks like you haven’t added anything yet.</p>
        <a href="/" className="btn btn-dark mt-3">
          Start Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <div className="table-responsive">
        <table className="table align-middle text-center">
          <thead className="table-light">
            <tr>
              <th>Product</th>
              <th>Title</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="product-img"
                  />
                </td>
                <td>{item.name}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <span className="border px-2 py-1 d-inline-block">
                    {item.quantity}
                  </span>
                </td>
                <td>${(item.price * item.quantity).toFixed(2)}</td>
                <td>
                  <img
                    src={removeIcon}
                    alt="remove"
                    className="remove-icon"
                    onClick={() => removeFromCart(item.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="row gy-4 justify-content-between align-items-start mt-4">
        {/* Cart Totals */}
        <div className="col-lg-5">
          <h4>Cart Totals</h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between">
              <span>Subtotal</span>
              <strong>${getTotalAmount()}</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Shipping Fee</span>
              <strong>Free</strong>
            </li>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong>${getTotalAmount()}</strong>
            </li>
          </ul>
          <button className="btn btn-danger w-100">PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo Code */}
        <div className="col-lg-6">
          <p>If you have a promo code, enter it here!</p>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Promo Code"
            />
            <button className="btn btn-dark">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
