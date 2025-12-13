// src/sections/Projects.jsx
import "../index.css";

const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and responsive CSS.",
    tech: ["React", "CSS"],
    github: "https://github.com/Sandesh-Chougala/Sandesh-Portfolio",
    demo: "https://sandesh-chougala.netlify.app/",
  },
  {
    title: "BMW HUB(E-Commerce Site)",
    description: "BMW Hub it's E-Commerce site built with React and Css.it's also responsive Layout.",
    tech: ["React", "CSS"],
    github: "https://github.com/Sandesh-Chougala/BMW-HUB",
    demo: "https://bmw-hub.netlify.app/",
  },
   {
    title: "Sandy GPT(AI Chatbot)",
    description: "This is AI Chat bot runnes on API key.",
    tech: ["React", "CSS", "Node.JS"],
    github: "https://github.com/Sandesh-Chougala/AI-Chatbot",
    demo: "https://github.com/Sandesh-Chougala/AI-Chatbot",
  },
];

export default function Projects() {
  return (
    <div className="section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.title} className="project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="project-tech">
              {p.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer">
                  Code
                </a>
              )}
              {p.demo && (
                <a href={p.demo} target="_blank" rel="noreferrer">
                  Live
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
