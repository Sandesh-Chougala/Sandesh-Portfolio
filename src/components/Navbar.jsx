// src/components/Navbar.jsx
import { useState } from "react";
import "../index.css";

const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80; // offset for navbar
    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="nav-logo">Sandesh.dev</div>

        <nav className={`nav-links ${open ? "nav-open" : ""}`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="nav-link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          className="nav-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
