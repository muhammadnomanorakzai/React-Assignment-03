import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail]     = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


   useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);
  
  const handleRegister = (e) => {
    e.preventDefault();

    // Save data in localStorage
    const user = { username, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Registration Successful! Please login.");
    setUsername("");
    setEmail("");
    setPassword("");

    navigate("/Login"); // Redirect to login
  };

  return (
    <div className="main-div">
      <div className="login-container">
        <div className="logo">
          <h3>Sign Up</h3>
        </div>
        <div className="imput-fields">
          <form onSubmit={handleRegister}>
            <div className="username">
              <label>UserName</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="email">
              <label>Email</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="password">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="register-btn">
              <button type="submit">Register</button>
            </div>
          </form>
          <div className="links">
            <p>
              Already have an account? <Link to="/Login">Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
