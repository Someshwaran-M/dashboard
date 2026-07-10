import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import bgImage from "../assets/login-bg.jpg";
import logo from "../assets/onedao-logo.png";

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

  const user = JSON.parse(localStorage.getItem("user") || "null");

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
      <div className="dots dots-top"></div>
<div className="dots dots-bottom"></div>
      <div className="login-card">
        <div
  className="login-left"
  style={{
    backgroundImage: `url(${bgImage})`,
    
  }}
></div>

        <div className="login-right">
          <div className="login-content">

  <div className="logo">
  <img src={logo} alt="OneDAO Logo" className="logo-img" />
  <span className="logo-dark">OneDAO</span>
</div>

  <h2>Login to Admin Panel</h2>

  <form onSubmit={handleLogin}>

    <div className="form-group">
  <div className="label-row">
    <label>Email ID</label>

    {error && (
      <span className="field-error">
        Invalid Email
      </span>
    )}
  </div>

  <input
    type="email"
    autoComplete="off"
    name="email"
    placeholder="email@domain.com"
    value={formData.email}
    onChange={handleChange}
    className={error ? "input-error" : ""}
  />
</div>

    <div className="form-group">
  <div className="label-row">
    <label>Password</label>

    {error && (
      <span className="field-error">
        Invalid Password
      </span>
    )}
  </div>

  <input
    type="password"
    autoComplete="off"
    name="password"
    placeholder="••••••••••••"
    value={formData.password}
    onChange={handleChange}
    className={error ? "input-error" : ""}
  />
</div>

    <div className="login-options">
      <Link to="/forgot-password" className="forgot">
        Forgot password?
      </Link>
    </div>

    <button className="login-btn" type="submit">
      Login
    </button>

    <div className="divider">
    <span>OR</span>
  </div>

    <div className="google-login">
  <button type="button" className="google-btn">
    <img
      src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
      alt="Google"
    />
    Continue with Google
  </button>

  
</div>

  </form>

  <div className="bottom-text">
    Don't have an account?
    <Link to="/register"> Register</Link>
  </div>
  </div>
</div>
</div>
    </div>
  );
};

export default Login;