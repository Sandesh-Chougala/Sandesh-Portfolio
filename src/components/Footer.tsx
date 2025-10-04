import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/Sandesh-Chougala/', color: 'hover:text-gray-900 dark:hover:text-white' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/sandesh-chougala/', color: 'hover:text-blue-600' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/sandesh', color: 'hover:text-blue-400' },
    { name: 'Email', icon: Mail, href: 'mailto:sandeshchougala205@gmail.com', color: 'hover:text-red-500' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Brand Section */}
            <div className="footer-brand">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="footer-logo">
                  John Doe
                </h3>
                <p className="footer-description">
                  Full Stack Developer passionate about creating beautiful, 
                  functional, and user-centered digital experiences.
                </p>
                
                {/* Social Links */}
                <div className="footer-social">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target={social.name === 'Email' ? '_self' : '_blank'}
                      rel={social.name === 'Email' ? '' : 'noopener noreferrer'}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="social-icon"
                      aria-label={social.name}
                    >
                      <social.icon className="social-icon-svg" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="footer-section-title">Quick Links</h4>
                <div className="footer-links">
                  {quickLinks.map((link) => (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href.replace('#', ''))}
                      className="footer-link"
                    >
                      {link.name}
                    </button>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="footer-section-title">Get In Touch</h4>
                <div className="footer-contact">
                  <p>sandeshchougala205@gmail.com</p>
                  <p>+91 6360428201</p>
                  <p>Belagavi, India</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-copyright">
              <span>© {currentYear} Sandesh. Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="heart-icon" />
              </motion.div>
              <span>and React</span>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
