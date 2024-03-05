import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: rechargeplus@gmail.com</p>
          <p>Phone: +91 123456789</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>Plans</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        {
          <p>
            &copy; {new Date().getFullYear()} Your Recharge Portal. All rights
            reserved.
          </p>
        }
      </div>
      <br></br>

      <footer className="foo">
          <div className="ri">
            <p> &copy; RechargeZone-Zone</p>
            <p>All rights reserved</p>
          </div>
      </footer>
    </footer>
  );
};

export default Footer;
