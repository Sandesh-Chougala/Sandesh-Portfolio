// src/sections/Hero.jsx
import "../index.css";
import myphoto from "../assets/my-photo.jpeg";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <p className="hero-tag">Full-Stack Developer</p>
        <h1>
          Hi, I'm <span>Sandesh Chougala</span>
        </h1>
        <p className="hero-subtitle">
          I build modern web applications with React and Spring Boot.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-photo-wrapper">
        <div className="hero-photo-border">
          <img
            src={myphoto}
            alt="Sandesh Chougala"
            className="hero-photo"
          />
        </div>
      </div>
    </div>
  );
}
