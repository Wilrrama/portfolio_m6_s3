import { projects } from "../../data/projects";
import { StyledProjects, StyledProjectsTitle } from "./styledProject";
import { GrDeploy } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      <StyledProjectsTitle>
        <h4>Principais Projetos</h4>
      </StyledProjectsTitle>
      <StyledProjects>
        {projects.map((project) => (
          <li key={project.id} id="projetos">
            <div>
              <h4 className="project__title">{project.nome}</h4>
              <img src={project.img} alt="imagem do projeto" />
              <p className="tipo">{project.tipo}</p>
            </div>
            <div>
              <p className="project__description">{project.descrição}</p>
              <div className="link__container">
                <a href={project.git} target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a
                  href={project.deploy}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrDeploy />
                </a>
              </div>
              <div className="project_tech_container">
                {project.tech.map((tech, index) => (
                  <img
                    key={index}
                    className="project_tech_img"
                    src={tech}
                    alt={`imagem da tecnologia utilizada neste projeto - ${index}`}
                  />
                ))}
              </div>
            </div>
          </li>
        ))}
      </StyledProjects>
    </>
  );
};

export default Projects;
