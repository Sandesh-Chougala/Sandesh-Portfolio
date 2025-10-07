import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import "./Projects.css";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Personal Portfolio",
      description:
        "Designed and developed a personal portfolio website to showcase projects, skills, and achievements in an interactive way",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "CSS"],
      liveUrl: "https://sandesh-chougala-portfolio.netlify.app/",
      githubUrl: "https://github.com/Sandesh-Chougala/Sandesh-Portfolio",
      featured: true,
    },
    {
      id: 2,
      title: "GPTM Frontend",
      description:
        "This is a frontend of GPTM. It have all the Collage Details | Courses | Faculty | Events | Gallery | Contact | Placement /history etc..",
      image: "/api/placeholder/400/300",
      technologies: ["HTML", "JavaScript", "CSS"],
      liveUrl: "https://sandy2007gptm.netlify.app/",
      githubUrl: "https://github.com/Sandesh-Chougala/GPTM-COLLAGE-FRONTEND",
      featured: false,
    },
    {
      id: 3,
      title: "AI Chatbot",
      description:
        "An intelligent chatbot powered by Gemini API with natural language processing and context awareness.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "React", "Flask", "MongoDB"],
      liveUrl: "alert('Coming Soon')",
      githubUrl: "https://github.com/Sandesh-Chougala/AI-Chatbot",
      featured: true,
    },
    {
      id: 4,
      title: "GX Game",
      description:
        "An exciting game built with HTML and JavaScript that saves data in Firebase.",
      image: "/api/placeholder/400/300",
      technologies: ["HTML", "JavaScript", "CSS", "Firebase"],
      liveUrl: "https://gx-game-sandy.netlify.app/menu.html",
      githubUrl: "https://github.com/Sandesh-Chougala/GX-Game",
      featured: true,
    },
    {
      id: 5,
      title: "YT Downloader",
      description:
        "A web application that allows users to download YouTube videos and audios in various formats.",
      image: "/api/placeholder/400/300",
      technologies: ["HTML", "JavaScript", "CSS", "Python", "Flask"],
      liveUrl: "https://github.com/Sandesh-Chougala/Youtube-downloader",
      githubUrl: "https://github.com/Sandesh-Chougala/Youtube-downloader",
      featured: true,
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
    <section id="projects" className="projects">
      <div className="projects-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="projects-header"
        >
          <h2 className="projects-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="projects-description">
            Here are some of my recent projects that showcase my skills and
            experience in web development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="projects-grid"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className={`project-card ${project.featured ? "featured" : ""}`}
            >
              {/* Project Image */}
              <div className="project-image">
                {project.title.charAt(0)}

                {/* Featured Badge */}
                {project.featured && (
                  <div className="featured-badge">Featured</div>
                )}

                {/* Hover Overlay */}
                <div className="project-overlay">
                  <div className="project-overlay-content">
                    <a
                      href={project.liveUrl}
                      className="project-link"
                      aria-label="View live project"
                    >
                      <ExternalLink className="project-link-icon" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="project-link"
                      aria-label="View source code"
                    >
                      <Github className="project-link-icon" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* Technologies */}
                <div className="project-technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="technology-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    className="project-button project-button-primary"
                  >
                    <span>Live Demo</span>
                    <ArrowRight className="project-button-icon" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="project-button project-button-secondary"
                  >
                    <Github className="project-button-icon" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
