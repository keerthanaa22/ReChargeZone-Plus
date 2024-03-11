import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Admin from "./pages/admin";
import About from "./pages/About";
import Plan from "./pages/Plan";
import Jio from "./pages/Jio";
import PaymentPage from "./pages/RazorpayPayment";
import Dashboard from "./pages/DashBoard";
import AddPlans from "./pages/AddPlans";
import AddAddons from "./pages/AddAddons";
import AddOns from "./pages/AddOns";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/reg" element={<Register />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route path="/plans" element={<Plan />} />
        <Route path="/about" element={<About />} />
        <Route path="/jio" element={<Jio />} />
        <Route path="/addplans" element={<AddPlans />} />
        <Route path="/pay" element={<PaymentPage />} />
        <Route path="/Dash" element={<Dashboard />} />
        <Route path="/addaddons" element={<AddAddons />} />
        <Route path="/addons" element={<AddOns />} />
        {/*
        <Route path="/usergroup" element={<UserGroup />} />
        <Route path="/adminLogin" element={<ALogin />} />
        */}
      </Routes>
    </Router>
  );
};

export default App;
