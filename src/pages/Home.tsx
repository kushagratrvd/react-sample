"use client"

import type React from "react"
import { useNavigate } from "react-router-dom"

const Home: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div className="page-container">
      <div className="mobile-container">
        <div className="content-wrapper">
          <div className="text-section">
            <h1 className="welcome-title">Welcome to PopX</h1>
            <p className="lorem-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>

          <div className="button-section">
            <button className="create-account-btn" onClick={() => navigate("/signup")}>
              Create Account
            </button>
            <button className="login-btn" onClick={() => navigate("/login")}>
              Already Registered? Login
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
