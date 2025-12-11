// src/sections/About.jsx
import "../index.css";

export default function About() {
  return (
    <div className="section">
      <h2 className="section-title">About</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I am a computer science student from Karnataka, focused on building
            clean and performant full-stack web applications.
          </p>
          <p>
            I enjoy working with React, Spring Boot, and modern UI design to
            create real-world projects.
          </p>
        </div>
        <div className="about-card">
          <p>Location: Karnataka, India</p>
          <p>Role: Full-Stack Developer</p>
          <p>Open to: Internships & freelance</p>
        </div>
      </div>
    </div>
  );
}
