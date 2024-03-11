import React from "react";
import "../assets/css/Navbar.css";
import { Link, NavLink } from "react-router-dom";

const CustomNavBar = () => {
  return (
    <div style={{ backgroundColor: "#00DD00" }}>
      <nav className="main-navigation">
        <ul className="nav-list">
          <li className="nav-item">
            <div className="nav-link">
              <NavLink to="/home">
                <div style={{ color: "black" }}>Home</div>
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <NavLink to="/about">
                <div style={{ color: "black" }}>About</div>
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <NavLink to="/plans">
                <div style={{ color: "black" }}>Plans</div>
              </NavLink>
            </div>
          </li>
          <li className="nav-item">
            <div className="nav-link">
              <NavLink to="/addons">
                <div style={{ color: "black" }}>AddOns</div>
              </NavLink>
            </div>
          </li>

          <li className="nav-item nav-item-right">
            <div className="sidebar">
              <div className="dropdown">
                <div className="dropbtn" style={{ color: "black" }}>
                  User
                </div>
                <div className="dropdown-content">
                  {/* <Link to="/profile">Profile</Link> */}
                  <Link to="/">Logout</Link>
                  {/* <Link to="/Dash">Dashboard</Link> */}
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CustomNavBar;
