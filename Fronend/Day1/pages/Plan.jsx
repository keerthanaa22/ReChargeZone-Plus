import CustomNavBar from "./Navbar";
import "../assets/css/Plan.css"; // Update with card and button styles
import { NavLink } from "react-router-dom";
import Footer from "./Footer";

const Plan = () => {
  return (
    <div style={{ padding: "20px", marginLeft: "-25px" }}>
      <div className="plwh">
        <CustomNavBar />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <section style={{ padding: "20px" }}>
          <h2>Choose your Operator</h2>
          <div className="card-container">
            <NavLink to="/jio">
              <div className="operator-card">
                <h3>Jio</h3>
                {/* Add a brief description about Jio (optional) */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button className="operator-button">Select Jio</button>
                </div>
              </div>
            </NavLink>
            <NavLink to="/jio">
              <div className="operator-card">
                <h3>Airtel</h3>
                {/* Add a brief description about Airtel (optional) */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button className="operator-button">Select Airtel</button>
                </div>
              </div>
            </NavLink>
            <NavLink to="/jio">
              <div className="operator-card">
                <h3>Vi</h3>
                {/* Add a brief description about Vi (optional) */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button className="operator-button">Select Vi</button>
                </div>
              </div>
            </NavLink>
            <NavLink to="/jio">
              <div className="operator-card">
                <h3>BSNL</h3>
                {/* Add a brief description about BSNL (optional) */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <button className="operator-button">Select BSNL</button>
                </div>
              </div>
            </NavLink>
          </div>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Plan;
