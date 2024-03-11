import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Welcome to HealthOneSolutions</h2>
        <form>
          <div className="form-group">
            <label htmlFor="userId">User ID</label>
            <input
              type="text"
              id="userId"
              name="userId"
              placeholder="Enter your user ID"
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Category</label>
            <select className="form-control" id="role" name="role">
              <option value="DR">Doctor (dr)</option>
              <option value="PT">Patient (pt)</option>
              <option value="AD">Admin (ad)</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit">Login</button>
          <button type="button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
