import React, { useState } from "react";
import "../assets/css/Register.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signUp } from "../services/auth";

const Register = () => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const [signupData, setSignupData] = useState({
    newUsername: "",
    newPassword: "",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    e.preventDefault();
    try {
      if (password === confirmPassword) {
        const response = await signUp({ name, email, password });
        if (response.status === 202) {
          navigate("/");
        }
      } else {
        setConfirmPasswordError("Your confirm password does not match");
      }
    } catch (error) {
      console.error("Error: ", error);
    }

    if (!name) {
      setErrorMessage("Please enter your name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Contact number validation: Ensure that the contact number contains only numbers
    const contactRegex = /^\d+$/;
    if (!contactRegex.test(contact)) {
      setErrorMessage("Please enter a valid contact number.");
      return;
    }

    // Password validation: Ensure that the password has a minimum length
    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters long.");
      return;
    }

    const formData = {
      name: name,
      email: email,
      password: password,
      // Add other form fields as needed
    };

    signUp(formData)
      .then((res) => {
        // Handle successful sign-up
        setName("");
        setEmail("");
        setPassword("");
        navigate("/");
      })
      .catch((err) => {
        // Handle sign-up error
        setName("");
        setEmail("");
        setPassword("");
        console.log(err);
      });
  };

  return (
    <div className="l">
      <div className="App">
        <h1 className="fib">Welcome to RechargeZone-Plus!!</h1>
        <br></br>
        <br></br>
        <div className="container">
          <form id="loginForm" onSubmit={handleSignup}>
            <div className="reggg">
              <h2
                className="lo"
                style={{ marginRight: 600, marginBottom: 100 }}
              ></h2>
            </div>
            <label htmlFor="username">Username</label>
            <br />

            <input
              className="mn"
              type="text"
              id="Username"
              name="Username"
              value={signupData.Username}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your Username"
              required
            />
            <br></br>
            <br></br>
            <label htmlFor="username">Mobile Number</label>
            <br />

            <input
              className="mn"
              type="text"
              id="mobilenumber"
              name="mobilenumber"
              value={signupData.mobilenumber}
              onChange={(e) => setContact(e.target.value)}
              placeholder="Enter your mobile number"
              required
            />
            <br></br>
            <br></br>

            <label htmlFor="password">Password</label>
            <br />

            <input
              className="ps"
              type="password"
              id="password"
              name="password"
              value={signupData.password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <br></br>
            <br></br>
            <label htmlFor="username">Email</label>
            <br />

            <input
              className="mn"
              type="text"
              id="email"
              name="email"
              value={signupData.email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your Email"
            />

            <br></br>
            <br></br>

            <button
              style={{ width: 100, height: 50, color: "blue" }}
              className="bt"
              type="button"
              onClick={handleSignup}
            >
              <NavLink to="/">Register</NavLink>
            </button>
            <br></br>
            <br></br>
            <h3 style={{ fontSize: 20 }} className="dt">
              Already have an account?<NavLink to="/">Login</NavLink>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
