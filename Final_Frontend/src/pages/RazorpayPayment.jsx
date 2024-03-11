import React, { useState } from "react";
import CustomNavBar from "./Navbar";

const PaymentPage = () => {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter the amount");
    } else {
      alert(amount);
    }
    setLoading(true);
    try {
      const options = {
        key: "rzp_test_cauugbeTpuheUu",
        key_secret: "YoKUhKDAn2ghDA0KLIorcaoC",
        amount: amount * 100,
        currency: "INR",
        name: "Your Company Name",
        description: "Payment for Product",
        image: "https://your-company-logo-url.png",
        handler: function (response) {
          // Handle successful payment
          console.log("Payment successful:", response);
          alert("Payment successful!");
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        theme: {
          color: "#007bff",
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="raznav">
      <CustomNavBar />
    <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "700px",
      background: "linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)",
      width: "1300px",
    }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginBottom: "20px",
          maxWidth: "400px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#007bff", marginBottom: "30px" }}>
          Secure Payment Gateway
        </h2>
        <p style={{ marginBottom: "20px" }}>Enter the Amount:</p>
        <input
          type="text"
          placeholder="Enter the Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "18px",
            border: "2px solid #007bff",
            borderRadius: "5px",
            width: "100%",
            outline: "none",
            boxShadow: "none",
            transition: "border-color 0.3s",
            marginBottom: "20px",
          }}
        />
        <button
          onClick={handlePayment}
          disabled={loading}
          style={{
            padding: "12px 24px",
            fontSize: "20px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
    </div>
  );
};

export default PaymentPage;
