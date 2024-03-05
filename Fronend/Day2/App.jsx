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
import AddP from "./pages/Addp";
import PaymentPage from "./pages/PaymentPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/reg" element={<Register />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/about" element={<About />} />
        <Route path="/jio" element={<Jio />} />
        <Route path="/addp" element={<AddP />} />
        <Route path="/pay" element={<PaymentPage />} />
        {/*
        <Route path="/usergroup" element={<UserGroup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/adminLogin" element={<ALogin />} />
        */}
      </Routes>
    </Router>
  );
};

export default App;
