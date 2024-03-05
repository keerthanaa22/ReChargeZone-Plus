// src/components/PaymentPage.jsx
import React, { useState } from "react";
import "../assets/css/Payment.css";
import CustomNavBar from "./Navbar";
import Footer from "./Footer";

const PaymentPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentStatus, setPaymentStatus] = useState(null);

  const processPayment = () => {
    // Simulate a successful payment for demonstration purposes
    setPaymentStatus({ success: true, transactionId: "123456" });
  };

  return (
    <div className="payfull">
      <CustomNavBar />

      <div className="payment-container">
        <h1 className="portal-title">Mobile Recharge Portal</h1>

        <form className="payment-form">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your phone number"
            required
          />

          <label htmlFor="amount">Recharge Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter recharge amount"
            required
          />

          <button
            type="button"
            onClick={processPayment}
            className="payment-button"
          >
            Proceed to Payment
          </button>
        </form>

        {paymentStatus && (
          <div
            className={`payment-status ${
              paymentStatus.success ? "success" : "failure"
            }`}
          >
            {paymentStatus.success ? (
              <p>
                Payment successful! Transaction ID:{" "}
                {paymentStatus.transactionId}
              </p>
            ) : (
              <p>Payment failed. Reason: {paymentStatus.error}</p>
            )}
          </div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default PaymentPage;
