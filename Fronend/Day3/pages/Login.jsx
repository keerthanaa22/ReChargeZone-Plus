import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { signIn } from "../services/auth";
import "../assets/css/Login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password should be at least 6 characters long.");
      return;
    }

    try {
      const form = {
        email: email,
        password: password,
      };

      const response = await signIn(form); // Assuming signIn returns a Promise
      // sessionStorage.setItem("token", response.data.token); // Store token in sessionStorage (or a more secure alternative)
      setEmail("");
      setPassword("");
      navigate("/home");
    } catch (err) {
      console.error(err); // Log the error for debugging
      setErrorMessage(
        "Login failed. Please check your credentials or try again later."
      ); // User-friendly error message
    }
  };

  return (
    <div className="l">
      <div className="App">
        <h1 className="fib">RechargeZone-Plus</h1>
        <br></br>
        <br></br>
        <br></br>
        <div className="container">
          <form
            id="loginForm"
            onSubmit={handleLogin}
            style={{ marginRight: 300 }}
          >
            <h2 className="lo" style={{ marginRight: 10 }}>
              Log in to unlock a world of digital experiences!!
            </h2>
            <br></br>
            <label htmlFor="email">Email</label>
            <br />

            <input
              className="eee"
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
            <br></br>
            <br></br>

            <label htmlFor="password">Password</label>
            <br />

            <input
              className="ppp"
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Enter your password"
            />
            <br></br>
            <br></br>

            <button
              style={{ width: 100, height: 40, color: "bluev" }}
              type="submit"
            >
              <NavLink to="/home">Login</NavLink>
            </button>
            <div style={{ marginTop: 10, marginLeft: 20, color: "blue" }}>
              <NavLink to="/admin" className="adm">
                (Admin)
              </NavLink>
            </div>
            <br></br>
            <h3 style={{ fontSize: 20 }} className="dt">
              Don't have an account?<br></br>
              <NavLink to="/reg" className="reg">
                Register
              </NavLink>
            </h3>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
