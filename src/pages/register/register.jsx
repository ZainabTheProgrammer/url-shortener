import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email }));
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className="error">{error}</p>}

          <button type="submit" className="signup-btn">Register</button>
        </form>

        <p className="redirect-text">
          Already have an account?{" "}
          <Link to="/login" className="redirect-link">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
