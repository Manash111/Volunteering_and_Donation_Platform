import React from "react";
import { Heart } from "lucide-react";

function Login() {
  return (
    <div className="login-page">
      <div className="auth-container">
        <div className="auth-header">
          <div className="logo">
            <Heart size={24} />
            <span>VolunteerConnect</span>
          </div>
          <h1>Welcome Back</h1>
          <p>Log in to your NGO account</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Organization Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <a href="/forgot-password" className="forgot-password">
              Forgot password?
            </a>
          </div>
          <button type="submit" className="submit-btn">
            Log In
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
