import React, { useState } from "react";
import axios from "axios";
import logo from "./iitlogo.png"; // Ensure this path correctly points to your logo file
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/register",
        { fullName, email, password }
      );
      console.log("Registration Successful:", response.data);
      history('/home');
      // Optionally, redirect to login page after successful registration
      // window.location.href = '/login';
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const navigateToLogin = () => {
    // Replace this with your actual logic to navigate, assuming react-router-dom is being used
    // history.push('/login');
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#003366",
      }}
    >
      <header
        style={{
          margin: "0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          color: "white",
          padding: "10px 20px",
          backgroundColor: "#0055b7",
          fontSize: "20px",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{ width: "50px", marginRight: "10px" }}
        />
        INDIAN INSTITUTE OF TECHNOLOGY KHARAGPUR
      </header>
      <div
        style={{
          backgroundColor: "#0055b7",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginTop: "170px",
        }}
      >
        <h2 style={{ color: "#ffffff" }}>Register</h2>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "300px",
            gap: "10px",
          }}
        >
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px",
              border: "none",
              borderRadius: "4px",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#007acc",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Register
          </button>
          <button
            onClick={navigateToLogin}
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "#0055b7",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
              marginTop: "10px",
            }}
          >
            Already have an account?{" "}
            <Link to="/login" style={{ color: "white" }}>
              Log in
            </Link>
          </button>
        </form>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </div>
    </div>
  );
};

export default Register;
