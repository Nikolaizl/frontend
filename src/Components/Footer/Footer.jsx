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
          <img src={instagramIcon} alt="instagram icon" />
        </div>
        <div className="footer-icons-container">
          <img src={pinterestIcon} alt="pinterest icon" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsappIcon} alt="whatsapp icon" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright &copy; {year} - All Right Reserved.</p>
      </div>
    </div>
  );
}
