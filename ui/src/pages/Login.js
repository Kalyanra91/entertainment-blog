import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import logo from "../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      navigate("/profile");
    } catch (error) {
      setErrors({
        submit: "Login failed. Please check your credentials and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Logo" className="logo" />{" "}
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>

        <form onSubmit={handleSubmit} className="login-form">
          {errors.submit && <div className="error-alert">{errors.submit}</div>}

          <CustomInput
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <CustomInput
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <CustomButton
            type="submit"
            disabled={isLoading}
            className="submit-button"
          >
            {isLoading ? "Signing in..." : "Sign in"}
          </CustomButton>

          <div className="forgot-password">
            <CustomButton
              onClick={() => navigate("/forgot-password")}
              className="link-button"
            >
              Forgot password?
            </CustomButton>
          </div>

          <p className="register-link">
            Don't have an account?{" "}
            <CustomButton
              onClick={() => navigate("/register")}
              className="link-button"
            >
              Sign up
            </CustomButton>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;