import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function AddAddons() {
  const api_url = "http://localhost:8080";
  const navigate = useNavigate();
  const [addonId, setAddonId] = useState(0);
  const [addonName, setAddonName] = useState("");
  const [addonDetails, setAddonDetails] = useState("");
  const [addonPrice, setAddonPrice] = useState(0);
  const [addonValidity, setAddonValidity] = useState("");

  const handleSubmit = async () => {
    try {
      const body = {
        addonId: addonId,
        addonName: addonName,
        addonDetails: addonDetails,
        addonPrice: addonPrice,
        addonValidity: addonValidity,
      };
      const token = sessionStorage.getItem("token");
      const response = await axios.post(
        "http://localhost:8080/api/addon",
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      navigate("/addons");
    } catch (error) {
      console.error("Error adding addon:", error);
    }
  };

  return (
    <div style={{ marginTop: "-200px" }}>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
        <div className="md:w-1/3 max-w-sm">
          <p>Add On Pack:</p>
          <input
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.25rem",
              marginBottom: "1rem",
            }}
            type="number"
            placeholder="Addon Id"
            // value={addonId}
            onChange={(e) => setAddonId(e.target.value)}
          />
          <input
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.25rem",
              marginBottom: "1rem",
            }}
            type="text"
            placeholder="Addon Name"
            value={addonName}
            onChange={(e) => setAddonName(e.target.value)}
          />
          <input
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.25rem",
              marginBottom: "1rem",
            }}
            type="text"
            placeholder="Addon Details"
            value={addonDetails}
            onChange={(e) => setAddonDetails(e.target.value)}
          />
          <input
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.25rem",
              marginBottom: "1rem",
            }}
            type="number"
            placeholder="Addon Price"
            // value={addonPrice}
            onChange={(e) => setAddonPrice(e.target.value)}
          />
          <input
            style={{
              width: "100%",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "0.25rem",
              marginBottom: "1rem",
            }}
            type="text"
            placeholder="Addon Validity"
            value={addonValidity}
            onChange={(e) => setAddonValidity(e.target.value)}
          />

          <div className="text-center md:text-left">
            <button
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "#1E40AF",
                color: "#FFF",
                borderRadius: "0.25rem",
                cursor: "pointer",
              }}
              type="submit"
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddAddons;
