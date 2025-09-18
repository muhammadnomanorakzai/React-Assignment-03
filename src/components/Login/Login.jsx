import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

   useEffect(() => {
    setEmail("");
    setPassword("");
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
   
    // Get registered user
    const registeredUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      registeredUser &&
      registeredUser.email === email &&
      registeredUser.password === password
    ) {
      // Set currentUser to show logged-in state
      localStorage.setItem("currentUser", JSON.stringify(registeredUser));
      alert("Login successful!");
     
    setEmail("");
    setPassword("");
      navigate("/");
    } else {
      alert("Invalid email or password!");
       setPassword("");
    }
  };

  return (
    <div className="main-div">
      <div className="login-container">
        <div className="logo">
          <h3>Sign In</h3>
        </div>
        <div className="imput-fields">
          <form onSubmit={handleLogin}>
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
            <div className="login-btn">
              <button type="submit">Login</button>
            </div>
          </form>
          <div className="links">
            <p>
              Don’t have an account? <Link to="/Register">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
