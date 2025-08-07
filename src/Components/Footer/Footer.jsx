import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/logo_big.png";
import instagramIcon from "../Assets/instagram_icon.png";
import pinterestIcon from "../Assets/pintester_icon.png";
import whatsappIcon from "../Assets/whatsapp_icon.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="logo" />
        <p>SHOPPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icons">
        <div className="footer-icons-container">
          <a href="https://www.instagram.com/">
            <img src={instagramIcon} alt="instagram icon" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.pinterest.com/">
            <img src={pinterestIcon} alt="pinterest icon" />
          </a>
        </div>
        <div className="footer-icons-container">
          <a href="https://www.whatsapp.com/">
            <img src={whatsappIcon} alt="whatsapp icon" />
          </a>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright &copy; {year} - All Right Reserved.</p>
      </div>
    </div>
  );
}
