// src/sections/Skills.jsx
import "../index.css";
import {
  ReactDark,
  JavaScript,
  Html,
  Css,
  TailwindCssDark,
  JavaDark,
  SpringDark,
  Git,
  GithubDark,
  VsCodeDark,
  Postman,
} from "@skill-icons/react";

const skills = {
  frontend: [
    { name: "React", Icon: ReactDark },
    { name: "JavaScript", Icon: JavaScript },
    { name: "HTML", Icon: Html },
    { name: "CSS", Icon: Css },
    { name: "Tailwind CSS", Icon: TailwindCssDark },
  ],
  backend: [
    { name: "Java", Icon: JavaDark },
    { name: "Spring Boot", Icon: SpringDark },
  ],
  tools: [
    { name: "Git", Icon: Git },
    { name: "GitHub", Icon: GithubDark },
    { name: "VS Code", Icon: VsCodeDark },
    { name: "Postman", Icon: Postman },
  ],
};

export default function Skills() {
  return (
    <div className="section">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skills-card">
            <h3>{category}</h3>
            <div className="skills-list">
              {items.map(({ name, Icon }) => (
                <div key={name} className="skill-item">
                  <Icon className="skill-icon" />
                  <span className="skill-name">{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
