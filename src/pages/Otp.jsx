import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Otp.css";
import bgImage from "../assets/login-bg.jpg";
import logo from "../assets/onedao-logo.png";

const Otp = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");

  const inputs = useRef([]);

  const handleChange = (value, index) => {
  if (!/^[0-9]?$/.test(value)) return;

  if (error) {
    setError("");
  }

  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  if (value && index < 5) {
    inputs.current[index + 1].focus();
  }
};

  const handleKeyDown = (e, index) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0
    ) {
      inputs.current[index - 1].focus();
    }
  };

  const verifyOTP = () => {
  const enteredOtp = otp.join("");
  const savedOtp = sessionStorage.getItem("otp");

  if (enteredOtp === savedOtp) {
    // Get registered data
    const registerData = JSON.parse(
      localStorage.getItem("registerData")
    );

    // Save as user
    localStorage.setItem(
      "user",
      JSON.stringify(registerData)
    );

    // Clean up
    localStorage.removeItem("registerData");
    sessionStorage.removeItem("otp");

    alert("Registration Successful");

    navigate("/login");
  } else {
    setError("Invalid OTP");
  }
};

  return (
    <div className="otp-page">
      <div className="dots dots-top"></div>
<div className="dots dots-bottom"></div>
      <div className="otp-card">
        <div
          className="otp-left"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>

        <div className="otp-right">
          <div className="otp-content">
            <div className="logo">
  <img src={logo} alt="OneDAO Logo" className="logo-img" />
  <span className="logo-dark">OneDAO</span>
</div>
            <h1>Email Verification</h1>

            <p>
              Enter the 6-digit OTP sent to your email
            </p>

            <div className="otp-boxes">
              {otp.map((digit, index) => (
                <input
  key={index}
  ref={(el) => (inputs.current[index] = el)}
  type="text"
  maxLength={1}
  value={digit}
  className={error ? "otp-error" : ""}
  onChange={(e) => handleChange(e.target.value, index)}
  onKeyDown={(e) => handleKeyDown(e, index)}
/>
              ))}
            </div>

            {error && (
              <p style={{ color: "red", marginBottom: "20px" }}>
                {error}
              </p>
            )}

            <button onClick={verifyOTP} className="verify-btn">
              Verify OTP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;