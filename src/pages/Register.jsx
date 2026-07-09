import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../styles/Register.css";
import bgImage from "../assets/login-bg.jpg";
import logo from "../assets/onedao-logo.png";

const Register = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");
  const [passwordError, setPasswordError] = useState("");
const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
  const { name, value } = e.target;

  const updatedData = {
    ...formData,
    [name]: value,
  };

  setFormData(updatedData);

  // Clear email error while typing
  if (name === "email") {
    setError("");
  }

  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  // Password validation
  if (name === "password") {
    if (value && !passwordPattern.test(value)) {
      setPasswordError(
        "Password must be at least 8 characters and contain uppercase, lowercase, number and special character."
      );
    } else {
      setPasswordError("");
    }

    // Check confirm password if already entered
    if (
      updatedData.confirmPassword &&
      value !== updatedData.confirmPassword
    ) {
      setConfirmPasswordError(
        "Password and Confirm Password do not match."
      );
    } else {
      setConfirmPasswordError("");
    }
  }

  // Confirm Password validation
  if (name === "confirmPassword") {
    if (value && value !== updatedData.password) {
      setConfirmPasswordError(
        "Password and Confirm Password do not match."
      );
    } else {
      setConfirmPasswordError("");
    }
  }
};

  const handleRegister = async (e) => {
  e.preventDefault();

  // Clear previous errors
  setError("");
  setPasswordError("");
  setConfirmPasswordError("");

  // Empty fields validation
  if (
    !formData.email ||
    !formData.password ||
    !formData.confirmPassword
  ) {
    setError("Please fill all fields.");
    return;
  }

  // Email Validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(formData.email)) {
    setError("Enter a valid email.");
    return;
  }

  // Password Validation
  const passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

  if (!passwordPattern.test(formData.password)) {
    setPasswordError(
      "Password must be at least 8 characters and contain one uppercase letter, one lowercase letter, one number, and one special character."
    );
    return;
  }

  // Confirm Password Validation
  if (formData.password !== formData.confirmPassword) {
    setConfirmPasswordError("Password and Confirm Password do not match.");
    return;
  }

  try {
    const otp = Math.floor(100000 + Math.random() * 900000);

    sessionStorage.setItem("otp", otp);

    const templateParams = {
      email: formData.email,
      passcode: otp,
      time: "15 minutes",
    };

    await emailjs.send(
      "service_hprxsrn",
      "template_w87t1hi",
      templateParams,
      "9hJ0am5Xfu6p8EFOx"
    );

    localStorage.setItem(
      "registerData",
      JSON.stringify({
        email: formData.email,
        password: formData.password,
      })
    );

    setSuccess("OTP sent successfully to your email!");

    setTimeout(() => {
      navigate("/otp");
    }, 2000);
  } catch (error) {
    console.log("EmailJS Error:", error);
    console.log("Status:", error.status);
    console.log("Text:", error.text);

    setError(error.text || "Unable to send OTP.");
  }
};
 
return (
  <div className="register-page">
    <div className="dots dots-top"></div>
    <div className="dots dots-bottom"></div>

    <div className="register-card">
      <div
        className="register-left"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      ></div>

      <div className="register-right">
        <div className="register-content">
          <div className="logo">
            <img src={logo} alt="OneDAO Logo" className="logo-img" />
            <span className="logo-dark">OneDAO</span>
          </div>

          <h2>Register to Admin Panel</h2>
          

          <form onSubmit={handleRegister}>

            {/* Email */}
            <div className="form-group">
              <div className="label-row">
                <label>Email ID</label>

                {error === "Enter a valid email." && (
                  <span className="field-error">Invalid Email</span>
                )}
              </div>

              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className={error === "Enter a valid email." ? "input-error" : ""}
              />
            </div>

            {/* Password */}
            <div className="form-group">
              <div className="label-row">
                <label>Password</label>

                {passwordError && (
                  <span className="field-error">Invalid Password</span>
                )}
              </div>

              <input
                type="password"
                name="password"
                placeholder="Minimum 8 characters"
                value={formData.password}
                onChange={handleChange}
                className={passwordError ? "input-error" : ""}
              />

              {passwordError && (
                <div className="password-hint">
                  <strong>Password must contain:</strong>

                  <ul>
                    <li>✓ At least 8 characters</li>
                    <li>✓ One uppercase letter (A-Z)</li>
                    <li>✓ One lowercase letter (a-z)</li>
                    <li>✓ One number (0-9)</li>
                    <li>✓ One special character (@, #, $, %, &, etc.)</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div className="form-group">
              <div className="label-row">
                <label>Confirm Password</label>

                {confirmPasswordError && (
                  <span className="field-error">
                    Passwords do not match
                  </span>
                )}
              </div>

              <input
                type="password"
                name="confirmPassword"
                placeholder="Re-enter password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={confirmPasswordError ? "input-error" : ""}
              />
            </div>

            {/* General Error */}
            {error && error !== "Enter a valid email." && (
              <p className="error">{error}</p>
            )}

            {/* Success */}
            {success && (
              <div className="success-message">
                ✅ OTP sent successfully to your email!
              </div>
            )}

            <button type="submit" className="register-btn">
              Send OTP
            </button>
          </form>

          <div className="bottom-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Register;