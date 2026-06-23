import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/home.css";

function Home() {
  const [hoveredButton, setHoveredButton] = useState("");

  return (
    <div className="home-container">
      <div className="home-left-section">
        <h1 className="home-title">Welcome to my portfolio</h1>
        <h3 className="home-title2">Mo Develops</h3>

        <div className="home-hex-grid">
          <div className="home-hex-wrapper">
            <Link
              to="/projects"
              className="home-hex-button"
              style={{ animationDelay: "0s" }}
              onMouseEnter={() => setHoveredButton("projects")}
              onMouseLeave={() => setHoveredButton("")}
            >
              <span className="home-hex-text">Projects</span>
            </Link>
          </div>

          <div className="home-hex-wrapper">
            <Link
              to="/services"
              className="home-hex-button"
              style={{ animationDelay: "1s" }}
              onMouseEnter={() => setHoveredButton("services")}
              onMouseLeave={() => setHoveredButton("")}
            >
              <span className="home-hex-text">Services</span>
            </Link>
          </div>

          <div className="home-hex-wrapper">
            <Link
              to="/contact"
              className="home-hex-button"
              style={{ animationDelay: "2s" }}
              onMouseEnter={() => setHoveredButton("contact")}
              onMouseLeave={() => setHoveredButton("")}
            >
              <span className="home-hex-text">Contact</span>
            </Link>
          </div>
        </div>

        <div className="home-subtitle-container">
          {hoveredButton === "projects" && (
            <p className="home-subtitle-text">view my projects</p>
          )}
          {hoveredButton === "services" && (
            <p className="home-subtitle-text">view my services</p>
          )}
          {hoveredButton === "contact" && (
            <p className="home-subtitle-text">contact me</p>
          )}
        </div>
      </div>

      <div className="home-right-section">
        <div className="home-links-card">
          <a
            href="https://github.com/keciramounir97"
            target="_blank"
            rel="noopener noreferrer"
            className="home-sidebar-link"
          >
            view my github →
          </a>
          <hr className="home-divider" />
          <Link to="/trusted-clients" className="home-sidebar-link">
            view my recent clients →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
