import { useEffect, useState } from "react";
import TechnologyCard from "../components/TechnologyCard";
import { SiSpring, SiPostgresql } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaGit, FaDocker } from "react-icons/fa";
import "../assets/CSS/Projects.css";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
};

export default function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  const tecnologias = [
    { name: "HTML", Icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", Icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", Icon: FaJs, color: "#F7DF1E" },
    { name: "React", Icon: FaReact, color: "#61DAFB" },
    { name: "Java", Icon: FaJava, color: "#007396" },
    { name: "Spring", Icon: SiSpring, color: "#6DB33F" },
    { name: "Git", Icon: FaGit, color: "#F05032" },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
    { name: "Docker", Icon: FaDocker, color: "#2496ED" },
  ];

  useEffect(() => {
    fetch("https://api.github.com/users/VitorHDMarinho/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data.filter((r: Repo) => r.description));
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="projects">
      {/* Grid de tecnologias */}
      <div className="cards-tecnologias">
        <h2 className="technologies-title">Principais Tecnologias</h2>
        <div className="technologies-grid">
          {tecnologias.map((tech, index) => (
            <TechnologyCard
              key={index}
              name={tech.name}
              Icon={tech.Icon}
              color={tech.color}
            />
          ))}
        </div>
      </div>

      {/* Div onde os cards do GitHub vão aparecer */}
      <div className="cards-projects">
        <h2>Meus Projetos</h2>
        <div className="cards-git">
        {loading ? (
          <p>Carregando projetos...</p>
        ) : (
          repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.homepage || repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <h3 className="project-title">{repo.name}</h3>
              <p className="project-description">{repo.description}</p>
            </a>
          ))
        )}
        </div>
      </div>
    </div>
  );
}
