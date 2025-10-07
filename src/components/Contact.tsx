import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import "./Contact.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("https://formspree.io/f/xldpwezp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sandeshchougala205@gmail.com",
      href: "mailto:sandeshchougala205@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 6360428201",
      href: "tel:+916360428201",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Belagavi, India",
      href: "https://maps.google.com/?q=Belagavi+India",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="contact-header"
        >
          <h2 className="contact-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="contact-description">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's discuss how we can work together to bring your ideas to
            life.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="contact-grid"
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants} className="contact-info">
            <div>
              <h3 className="contact-section-title">Let's Connect</h3>
              <p className="contact-description-text">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Details */}
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  variants={itemVariants}
                  className="contact-item"
                >
                  <div className="contact-icon">
                    <info.icon className="contact-icon-svg" />
                  </div>
                  <div className="contact-item-content">
                    <div className="contact-item-label">{info.label}</div>
                    <div className="contact-item-value">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="social-links">
              <h4 className="social-title">Follow Me</h4>
              <div className="social-grid">
                <a
                  href="https://github.com/Sandesh-Chougala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <span className="social-text">G</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sandesh-chougala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <span className="social-text">L</span>
                </a>
                <a
                  href="https://twitter.com/sandesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter"
                >
                  <span className="social-text">T</span>
                </a>
                <a
                  href="https://www.instagram.com/mr___sandy____________/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Instagram"
                >
                  <span className="social-text">I</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="contact-form-container"
          >
            <h3 className="form-title">Send a Message</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="success-message"
              >
                <CheckCircle className="success-icon" />
                <h4 className="success-title">Message Sent!</h4>
                <p className="success-text">
                  Thank you for your message. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="form-input form-textarea"
                    placeholder="Tell me about your project or just say hello!"
                  />
                </div>

                <button type="submit" className="form-submit">
                  <Send className="form-submit-icon" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
