// src/sections/Contact.jsx
import { useState } from "react";
import "../index.css";

export default function Contact() {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    setStatus({ state: "submitting", message: "" });

    try {
      const res = await fetch("https://formspree.io/f/mkgdpryj", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: data,
      });

      if (res.ok) {
        setStatus({ state: "success", message: "Message sent successfully!" });
        form.reset();
      } else {
        setStatus({
          state: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      setStatus({
        state: "error",
        message: "Network error. Please try again later.",
      });
    }
  };

  return (
    <div className="section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            rows="4"
            name="message"
            placeholder="Message"
            required
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={status.state === "submitting"}
          >
            {status.state === "submitting" ? "Sending..." : "Send Message"}
          </button>

          {status.message && (
            <p
              className={
                status.state === "success"
                  ? "contact-status success"
                  : status.state === "error"
                  ? "contact-status error"
                  : "contact-status"
              }
            >
              {status.message}
            </p>
          )}
        </form>

        <div className="contact-info">
          <p>Email: sandeshchougala205@gmail.com</p>
          <p>Location: Karnataka, India</p>
          <div className="contact-links">
            <a href="https://github.com/Sandesh-Chougala" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sandesh-chougala/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
