import React from "react";
import Navbar from "./Navbar";
import "../assets/css/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faMobileAlt,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="ful">
      <div className="hero-section">
        <Navbar />
        <h1>Recharge, Simplified.</h1>
        <p>
          Effortlessly top up your mobile from anywhere in the world, anytime.
        </p>
        <NavLink to="/plan">
          <button className="primary-button">Get Started</button>
        </NavLink>
      </div>
      <div className="benefits-section">
        <h2>Why Choose Us?</h2>
        <div className="benefits-cards">
          <div className="benefit-card">
            <FontAwesomeIcon icon={faCreditCard} size="3x" />
            <h3>Secure Transactions</h3>
            <p>
              Your online mobile recharge transactions are completely secure.
            </p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faMobileAlt} size="3x" />
            <h3>Rewards & Bonuses</h3>
            <p>Earn reward points and get bonus offers anytime, anywhere.</p>
          </div>
          <div className="benefit-card">
            <FontAwesomeIcon icon={faWifi} size="3x" />
            <h3>Global Accessibility</h3>
            <p>Recharge your phone from anywhere in the world with ease.</p>
          </div>
        </div>
      </div>
      <div className="learn-more">
        <h2>Ready to Learn More?</h2>
        <NavLink to="/about">
          <button className="secondary-button">Learn More</button>
        </NavLink>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
