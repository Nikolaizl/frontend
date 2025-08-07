import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cartIcon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

export const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { getTotalItems, setSelectedCategory } = useContext(ShopContext);

  const handleClick = (category) => {
    setMenu(category);
    setSelectedCategory(category);
    setShowMobileMenu(false);
  };

  return (
    <nav className="navbar-container shadow-sm px-3 py-3">
      {/* Desktop layout */}
      <div className="navbar-content d-none d-lg-flex justify-content-between align-items-center w-100">
        {/* Left: Logo */}
        <div className="nav-logo d-flex align-items-center gap-2">
          <img src={logo} alt="logo" height="40" />
          <p className="m-0">SHOPPER</p>
        </div>

        {/* Center: Menu */}
        <ul className="nav-menu d-flex gap-4 list-unstyled m-0 p-0">
          {["shop", "mens", "womens", "kids"].map((cat) => (
            <li
              key={cat}
              className="nav-menu-item"
              onClick={() => handleClick(cat)}
            >
              <Link
                to={cat === "shop" ? "/" : `/${cat.slice(0, -1)}`}
                className="text-decoration-none text-dark"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
              {menu === cat && <hr />}
            </li>
          ))}
        </ul>

        {/* Right: Login + Cart */}
        <div className="nav-login-cart d-flex align-items-center gap-4">
          <Link to="/login">
            <button className="btn btn-outline-secondary rounded-pill px-4 py-2">
              Login
            </button>
          </Link>
          <div className="position-relative">
            <Link to="/cart">
              <img src={cartIcon} alt="cart icon" className="cart-icon-img" />
            </Link>
            {getTotalItems() > 0 && (
              <div className="nav-cart-count position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">
                {getTotalItems()}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="d-flex d-lg-none justify-content-between align-items-center w-100">
        {/* Logo */}
        <div className="nav-logo d-flex align-items-center gap-2">
          <img src={logo} alt="logo" height="40" />
          <p className="m-0">SHOPPER</p>
        </div>

        {/* Right: Cart + Login + Menu Button */}
        <div className="d-flex align-items-center gap-3">
          <Link to="/cart" className="position-relative">
            <img src={cartIcon} alt="cart icon" className="cart-icon-img" />
            {getTotalItems() > 0 && (
              <div className="nav-cart-count position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill">
                {getTotalItems()}
              </div>
            )}
          </Link>
          <Link to="/login">
            <button className="btn btn-outline-secondary btn-sm">Login</button>
          </Link>
          <button
            className="border-0 bg-transparent"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <i className="bi bi-list" style={{ fontSize: "2rem" }}></i>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {showMobileMenu && (
        <ul className="nav-menu-mobile list-unstyled mt-3 d-lg-none">
          {["shop", "mens", "womens", "kids"].map((cat) => (
            <li
              key={cat}
              className="nav-menu-item-mobile my-2"
              onClick={() => handleClick(cat)}
            >
              <Link
                to={cat === "shop" ? "/" : `/${cat.slice(0, -1)}`}
                className="text-decoration-none text-dark"
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
