import CustomNavBar from "./Navbar";
import React from "react";
import Popularp from "./Popular";
import Annualp from "./AnnualPlan";

export default function Jio() {
  const [selectedPlan, setSelectedPlan] = React.useState("popular"); // Initial state

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <>
      <div>
        <CustomNavBar />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", gap: 20, marginTop: "20px" }}>
          <button
            className="plan-button"
            style={{
              backgroundColor: selectedPlan === "popular" ? "#007bff" : "#fff",
            }} // Button styling based on selection
            onClick={() => handlePlanChange("popular")}
          >
            Popular Plans
          </button>
          <button
            className="plan-button"
            style={{
              backgroundColor: selectedPlan === "annual" ? "#007bff" : "#fff",
            }} // Button styling based on selection
            onClick={() => handlePlanChange("annual")}
          >
            Annual Plans
          </button>
        </div>
      </div>
      <div>
        {selectedPlan === "popular" && <Popularp />}
        {selectedPlan === "annual" && <Annualp />}
      </div>
    </>
  );
}
