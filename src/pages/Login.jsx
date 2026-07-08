import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import bgImage from "../assets/login-bg.jpg";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
  e.preventDefault();

  setError("");

  const user = JSON.parse(localStorage.getItem("user"));

  console.log("Saved User:", user);
  console.log("Entered:", formData);

  if (!user) {
    setError("No registered user found.");
    return;
  }

  if (
    formData.email.trim() === user.email.trim() &&
    formData.password === user.password
  ) {
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  } else {
    setError("Invalid Email or Password");
  }
};

  return (
    <div className="login-page">
      <div className="login-card">
        <div
          className="login-left"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        <div className="login-right">
          <div className="login-content">
            <h1>Log In to Admin Panel</h1>

            <p>Enter your email id and password below</p>

            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label>EMAIL ID</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email id"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label>PASSWORD</label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>

              {error && (
                <p
                  style={{
                    color: "red",
                    marginBottom: "15px",
                  }}
                >
                  {error}
                </p>
              )}

              <button type="submit">
                Log In
              </button>
            </form>

            <div className="register">
              <span>Don't have an account?</span>

              <Link to="/register"> Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;