import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const AddOns = () => {
  const [addons, setAddons] = useState([]);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const getData = async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/v1/user/getaddons",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data);
      setAddons(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    getData(token);
  }, []);

  const Popup = ({ onClose }) => {
    return (
      <div>
        <div>
          <div>
            <div>
              <h1>dskao</h1>
            </div>
            <div>
              <h1>dsl</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px 0",
          marginTop: "-300px",
        }}
      >
        <Navbar />
      </div>
      <div>
        {isPopupOpen && <Popup onClose={closePopup} />}
        <section style={{ padding: "20px" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {addons.map((addon, index) => (
              <div
                key={index}
                style={{
                  margin: "10px",
                  borderRadius: "5px",
                  boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
                }}
              >
                <div
                  style={{
                    backgroundColor: "black",
                    color: "#fff",
                    padding: "10px",
                    textAlign: "center",
                  }}
                >
                  {addon.addonName}
                </div>
                <div style={{ padding: "20px" }}>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: "bold",
                      marginBottom: "10px",
                    }}
                  >
                    ₹{addon.addonPrice}
                  </div>
                  <div style={{ fontSize: "16px", marginBottom: "20px" }}>
                    Details:
                    <br />
                    <span>{addon.addonDetails}</span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <div>
                      <NavLink to="/pay">
                        <button
                          style={{
                            padding: "10px 20px",
                            borderRadius: "5px",
                            cursor: "pointer",
                            transition: "background-color 0.3s",
                            backgroundColor: "black",
                            color: "#fff",
                            border: "none",
                          }}
                        >
                          Recharge
                        </button>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        style={{
                          padding: "10px 20px",
                          borderRadius: "5px",
                          cursor: "pointer",
                          transition: "background-color 0.3s",
                          backgroundColor: "black",
                          color: "#fff",
                          border: "none",
                          marginLeft: "10px",
                        }}
                        onClick={() => {
                          sessionStorage.setItem(
                            "invoice_addon",
                            JSON.stringify(addon)
                          );
                          openPopup();
                        }}
                      >
                        View details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AddOns;
