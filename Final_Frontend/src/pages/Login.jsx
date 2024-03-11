import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login() {
  const api_url = "http://localhost:8080";
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const body = {
        email: email,
        password: password,
      };
      console.log(body);
      let response = await axios.post(`${api_url}/api/v1/auth/login`, body);
      const token = response.data.token;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("email", email);
      sessionStorage.setItem("isLoggedIn", "true");
      sessionStorage.setItem("isAdmin", "true");
      navigate("/home");
      if (email === "admin@gmail.com") {
        navigate("/dash");
      } else {
        navigate("/home");
      }

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
          height={"400px"}
          width={"800px"}
        />
      </div>
      <hr></hr>
      <div className="md:w-1/3 max-w-sm">
        <div className="my-5 flex items-center justify-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          Login
          <br></br>
        </div>
        <div>
          <br></br>

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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>
        </div>
        <div className="mt-4 flex justify-center font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            {/* <input className="mr-1" type="checkbox" /> */}
            {/* <span>Remember Me</span> */}
          </label>
        </div>
        <div className="text-center md:text-left">
          <button
            className="logs"
            type="submit"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don't have an account?{" "}
          <a
            className="text-red-600 hover:underline hover:underline-offset-4"
            href="/reg"
          >
            Register
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;
