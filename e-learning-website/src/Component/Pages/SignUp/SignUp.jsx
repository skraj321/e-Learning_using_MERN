import React, { useState } from "react";
import { Container, TextField, Button, Typography, Link } from "@mui/material";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate=useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    setEmailError(isValid ? "" : "Invalid email address");
    return isValid;
  };

  const validatePassword = () => {
    if (formData.password !== formData.confirmPassword) {
      setPasswordError("Passwords do not match");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail() || !validatePassword()) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3800/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Sign up failed");
      }

      const data = await response.json();
      
      console.log(data);
      
      alert("Sign up successful!");
      navigate("/sign-in");
      
    } catch (error) {
      console.error("Error signing up:", error.message);
      alert("Error signing up. Please try again later.");
    }
  };

  return (
    <div className="signup-img">
      <div className="sign-container">
    <Container maxWidth="xs" className="signup-container">
      <Typography component="h1" variant="h5" className="signup-title">
        Sign up
      </Typography>
      <form onSubmit={handleSubmit} className="signup-form">
        <TextField
          margin="normal"
          required
          fullWidth
          id="username"
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          value={formData.username}
          onChange={handleChange}
          className="signup-textfield"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          error={emailError !== ""}
          helperText={emailError}
          className="signup-textfield"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="new-password"
          value={formData.password}
          onChange={handleChange}
          error={passwordError !== ""}
          helperText={passwordError}
          className="signup-textfield"
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          autoComplete="new-password"
          value={formData.confirmPassword}
          onChange={handleChange}
          error={passwordError !== ""}
          helperText={passwordError}
          className="signup-textfield"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          className="signup-submit-btn"
        >
          Sign Up
        </Button>
        <Typography variant="body2" align="center" className="signup-link">
          Already have an account?{"\u00A0"} 
          
          <Link href="/sign-in" variant="body2">
              Sign in
          </Link>
        </Typography>
      </form>
    </Container>  
    </div>
    </div>
  );
};

export default SignUp;
