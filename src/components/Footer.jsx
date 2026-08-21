import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
     <footer className="footer">
      <div className="footer-container">

        {/* Brand / Description */}
        <div className="footer-column footer-brand">
          <h2>
            <span className="footer-logo">🍴</span> Foodie
          </h2>

          <p>
            Delicious food delivered fast, fresh and hot at your doorstep.
          </p>
        </div>

        {/* Explore */}
        <div className="footer-column">
          <h3>Explore</h3>

          <div className="footer-links">
            <a href="/">Home</a>
            <a href="/categories">Categories</a>
            <a href="/restaurants">Restaurants</a>
            <a href="/cart">Cart</a>
          </div>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <div className="footer-links">
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-conditions">Terms & Conditions</a>
          </div>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>

          <div className="contact-info">
            <p>📍 Pune , India</p>
            <p>📞 +91 70574 91939</p>
            <p>✉️ support@foodie.com</p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright */}
      <div className="footer-bottom">
        <p>© 2026 Foodie. All rights reserved.</p>
      </div>
    </footer>
  );
};


export default Footer;
