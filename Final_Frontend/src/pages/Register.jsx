import React, { useState } from "react";
import "../assets/css/Register.css";
import { Link, NavLink, useNavigate } from "react-router-dom";

import axios from "axios";
function Register() {
  const api_url = "http://localhost:8080";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email: email,
        password: password,
        mobile: mobile,
        username: username,
      };
      console.log(body);
      let response = await axios.post(`${api_url}/api/v1/auth/register`, body);
      const token = response.data.token;
      sessionStorage.setItem("token", token);

      if (email === "admin@gmail.com") {
        sessionStorage.setItem("isAdmin", "true");
        navigate("/dashboard");
      } else {
        navigate("/home");
      }
      navigate("/");

      console.log("Login successful:", response.data);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <section>
      <div className="md:w-1/3 max-w-sm">
        <img
          src="https://img.freepik.com/free-vector/computer-login-concept-illustration_114360-7862.jpg?t=st=1709970405~exp=1709974005~hmac=74f1cad62ec4974938e44c02593ff43dc32aeb8b2450b056b9577897e4e79505&w=996"
          alt="Sample image"
          height={"300px"}
          width={"550px"}
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center md:text-left"></div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            <b className="breg">Register</b>
          </p>
        </div>
        <br></br>
        <div>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
          <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <br></br>
          <br></br>

          <div className="text-center md:text-left">
            <button
              // color="primary"
              className="sub"
              type="submit"
              onClick={(e) => {
                handleSubmit(e);
              }}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
