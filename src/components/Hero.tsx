import React from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import "./Hero.css";

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background"></div>

      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="profile-image"
          >
            <img className="profile-img" src="/my.jpg" alt="Profile" />
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-title"
          >
            Sandesh Chougala
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-subtitle"
          >
            Full Stack Developer & UI/UX Designer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="hero-description"
          >
            I create beautiful, functional, and user-centered digital
            experiences that bring ideas to life. Passionate about clean code,
            innovative design, and continuous learning.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="hero-buttons"
          >
            <button onClick={scrollToAbout} className="hero-button-primary">
              Learn More About Me
            </button>

            <button className="hero-button-secondary">
              <Download className="w-5 h-5" />
              Download Resume
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
