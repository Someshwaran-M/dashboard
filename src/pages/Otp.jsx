import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Otp.css";
import bgImage from "../assets/login-bg.jpg";
import logo from "../assets/onedao-logo.png";
import Swal from "sweetalert2";

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
  
    const registerData = JSON.parse(
      localStorage.getItem("registerData")
    );


    localStorage.setItem(
      "user",
      JSON.stringify(registerData)
    );

    localStorage.removeItem("registerData");
    sessionStorage.removeItem("otp");

Swal.fire({
  icon: "success",
  title: "Registration Successful!",
  text: "Please login to continue.",
  confirmButtonColor: "#4f46e5",
  confirmButtonText: "Go to Login",
  allowOutsideClick: false,
  allowEscapeKey: false,
}).then((result) => {
  if (result.isConfirmed) {
    navigate("/login");
  }
});
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
            <h2>Email Verification</h2>

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
  <p style={{ marginBottom: "20px", color:"#ef4444",
    fontsize:"14px",
    fontweight:"600",
    
    }}>
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