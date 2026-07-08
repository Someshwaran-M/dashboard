import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import "../styles/Register.css";
import bgImage from "../assets/login-bg.jpg";

const Register = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    setError("");

    if (
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill all fields.");
      return;
    }

    // Email Validation
    // Email Validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(formData.email)) {
  setError("Enter a valid email.");
  return;
}

// Password Validation
const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/;

if (!passwordPattern.test(formData.password)) {
  alert(
    "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one number,one special character."
  );
  return;
}

// Confirm Password Validation
if (formData.password !== formData.confirmPassword) {
  setError("Password and Confirm Password do not match.");
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
    "service_hprxsrn",     // Your Service ID
    "template_w87t1hi",    // Your Template ID
    templateParams,
    "9hJ0am5Xfu6p8EFOx"      // Your Public Key
  );

  localStorage.setItem(
  "registerData",
  JSON.stringify({
    email: formData.email,
    password: formData.password,
  })
);

// Show success message
setSuccess("OTP sent successfully to your email!");

// Navigate after 2 seconds
setTimeout(() => {
  navigate("/otp");
}, 2000);


}catch (error) {
  console.log("EmailJS Error:", error);
  console.log("Status:", error.status);
  console.log("Text:", error.text);

  setError(error.text || "Unable to send OTP.");
}
  };

  return (
    <div className="register-page">
      <div className="register-card">

        <div
          className="register-left"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        ></div>

        <div className="register-right">

          <div className="register-content">

            <h1>Register to Admin Panel</h1>

            <p>Enter your Email ID and Password below</p>

            <form onSubmit={handleRegister}>

              <div className="form-group">

                <label>EMAIL ID</label>

                <input
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  value={formData.email}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>PASSWORD</label>

                <input
                  type="password"
                  name="password"
                  placeholder="Minimum 8 characters"
                  value={formData.password}
                  onChange={handleChange}
                />

              </div>

              <div className="form-group">

                <label>CONFIRM PASSWORD</label>

                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Re-enter password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />

              </div>

              {error && (
                <p className="error">{error}</p>
              )}

              {success && (
                <div className="success-message">
                  ✅ OTP sent successfully to your email!
                </div>
              )}


              <button type="submit">
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