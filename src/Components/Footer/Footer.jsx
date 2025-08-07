import React from "react";
import footerLogo from "../Assets/logo_big.png";
import instagramIcon from "../Assets/instagram_icon.png";
import pinterestIcon from "../Assets/pintester_icon.png";
import whatsappIcon from "../Assets/whatsapp_icon.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="container text-center py-5">
      <div className="d-flex flex-column align-items-center gap-3">
        {/* Logo and Brand */}
        <div className="d-flex align-items-center gap-3">
          <img src={footerLogo} alt="logo" height="50" />
          <p className="h2 fw-bold mb-0 text-dark">SHOPPER</p>
        </div>

        {/* Navigation Links */}
        <ul className="list-unstyled d-flex gap-4 fs-5 mb-0">
          <li>
            <a href="#" className="text-decoration-none text-dark">
              Company
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none text-dark">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none text-dark">
              Offices
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none text-dark">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-decoration-none text-dark">
              Contact
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="d-flex gap-3">
          <a
            href="https://www.instagram.com/"
            className="bg-light border p-2 rounded"
          >
            <img src={instagramIcon} alt="instagram" height="24" />
          </a>
          <a
            href="https://www.pinterest.com/"
            className="bg-light border p-2 rounded"
          >
            <img src={pinterestIcon} alt="pinterest" height="24" />
          </a>
          <a
            href="https://www.whatsapp.com/"
            className="bg-light border p-2 rounded"
          >
            <img src={whatsappIcon} alt="whatsapp" height="24" />
          </a>
        </div>
      </div>

      {/* Divider & Copyright */}
      <div className="mt-5">
        <hr
          className="mx-auto"
          style={{
            width: "80%",
            height: "3px",
            backgroundColor: "#c7c7c7",
            border: "none",
            borderRadius: "10px",
          }}
        />
        <p className="mt-3 text-dark fs-5">
          Copyright &copy; {year} - All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
