import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth";
import "./SignIn.css"



const SignIn = () => {

  
  const [formData, setFormData] = useState({
    email: "", 
    password: "",
    rememberMe: false,
  });
  const [auth,setAuth]=useAuth();

  const navigate=useNavigate();
  const [errors, setErrors] = useState({
    email: "", 
    password: "",
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: "", password: "" }; 
    if (!formData.email) { 
      newErrors.email = "Email is required"; 
      valid = false;
    }

    // Password strength check
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!formData.password || !passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 6 characters with at least one uppercase and one lowercase letter";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
      
        const response = await fetch("http://localhost:3800/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify(formData),
          
        });

        if (!response.ok) {
          throw new Error("Login failed");
        }

        // Assuming the response contains some data like a success message or user details
        const data = await response.json();
  
        // Handle successful login response
       
        console.log(data);
        
        alert("Login successful!");
        setAuth({
          ...auth,
          user: data.user,
          token: data.token
        });
        localStorage.setItem("token",data.token);
        localStorage.setItem("id",data.id);
        localStorage.setItem("role",data.role);
        if(localStorage.getItem("role")==0){
          navigate("/");
        }else{
        navigate("/admin")
        }
      } catch (error) {
        console.error("Error logging in:", error.message);
        // Handle error appropriately, e.g., show error message to the user
        alert("Error logging in. Please try again later.");
      }
    } else {
      console.log("Login failed");
    }
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === "rememberMe" ? checked : value,
    });
  };

  return (
    <div className="signIn-container">
      <div className="sign-container1">
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: "400px",
        margin: " 50px auto",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundColor: "white",
        textAlign: "center",
      }}
    >
      <h2>Sign In</h2>
      <TextField
        fullWidth
        label="Email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange}
        error={Boolean(errors.email)} 
        helperText={errors.email} 
        margin="normal"
      />
      <TextField
        fullWidth
        type="password"
        label="Password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        error={Boolean(errors.password)}
        helperText={errors.password}
        margin="normal"
        sx={{ mt: 2 }}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.rememberMe}
            onChange={handleChange}
            name="rememberMe"
            color="primary"
          />
        }
        label="Remember Me"
        sx={{ mt: 1, textAlign: "left" }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 2 }}
      >
        Login
      </Button>
      <Box sx={{ mt: 2, textAlign: "center" }}>
        
        <Box mt={1}>
          <Link href="/sign-up" variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Box>
      </Box>
    </Box>
    </div>
    </div>
  );
};

export default SignIn;
