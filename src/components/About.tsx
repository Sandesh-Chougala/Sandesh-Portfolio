import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Lightbulb, Users } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, color: 'blue' },
    { name: 'UI/UX Design', icon: Palette, color: 'purple' },
    { name: 'Problem Solving', icon: Lightbulb, color: 'yellow' },
    { name: 'Team Collaboration', icon: Users, color: 'green' },
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="about">
      <div className="about-container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="about-grid"
        >
          {/* About Content */}
          <motion.div variants={itemVariants} className="about-content">
            <h2 className="about-title">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <p className="about-text">
              I'm a passionate full-stack developer with  creating 
              digital solutions that make a difference. I specialize in modern web technologies 
              and have a keen eye for design and user experience.
            </p>
            
            <p className="about-text">
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community. I believe 
              in continuous learning and staying up-to-date with the latest industry trends.
            </p>

            {/* Skills Grid */}
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  className="skill-item"
                >
                  <skill.icon className={`skill-icon skill-icon-${skill.color}`} />
                  <span className="skill-name">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Profile Image and Stats */}
          <motion.div variants={itemVariants} className="about-visual">
            {/* Profile Image */}
            <div style={{ position: 'relative' }}>
              <div className="profile-image-large">
                SC
              </div>
              
            </div>

            {/* Stats */}
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number blue">6+</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number purple">3+</div>
                <div className="stat-label">Hosted Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number green">100%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
