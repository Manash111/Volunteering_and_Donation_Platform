import React, { useState } from "react";
import { Heart, User, Building2 } from "lucide-react";
import "../index.css";

function SignUp() {
  const [userType, setUserType] = useState("volunteer");

  return (
    <div className="signup-page">
      <div className="auth-container">
        <div className="auth-header">
          <div className="logo">
            <Heart size={24} />
            <span>VolunteerConnect</span>
          </div>
          <h1>Create an Account</h1>
          <p>Join our community and start making a difference</p>
        </div>

        <div className="user-type-toggle">
          <button
            className={`type-btn ${userType === "volunteer" ? "active" : ""}`}
            onClick={() => setUserType("volunteer")}
          >
            <User size={20} />
            Volunteer
          </button>
          <button
            className={`type-btn ${userType === "ngo" ? "active" : ""}`}
            onClick={() => setUserType("ngo")}
          >
            <Building2 size={20} />
            NGO
          </button>
        </div>

        <form className="auth-form">
          {userType === "volunteer" ? (
            <>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
              </div>
              <div className="form-group">
                <label htmlFor="interests">Areas of Interest</label>
                <select id="interests" multiple>
                  <option value="environment">Environment</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="community">Community Service</option>
                </select>
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="orgName">Organization Name</label>
                <input type="text" id="orgName" required />
              </div>
              <div className="form-group">
                <label htmlFor="orgEmail">Organization Email</label>
                <input type="email" id="orgEmail" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" required />
              </div>
              <div className="form-group">
                <label htmlFor="description">Organization Description</label>
                <textarea id="description" rows={4} required></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="website">Website (Optional)</label>
                <input type="url" id="website" />
              </div>
            </>
          )}
          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
