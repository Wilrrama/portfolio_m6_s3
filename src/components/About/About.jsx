import perfil from "../../assets/images/LinkPerfil.png";
import { StyledAbout, StyledSkills, StyledUser } from "./styledAbout";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <>
      <StyledAbout id="sobre">
        <StyledUser>
          <figure>
            <img src={perfil} alt="Foto do perfil" />
            {/* <figcaption>Wilson </figcaption> */}
          </figure>

          <div>
            <a
              href="https://api.whatsapp.com/send?phone=5519982876099"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <IoLogoWhatsapp />
              </button>
            </a>
            <a
              href="https://github.com/Wilrrama"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <FaGithub />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/wilson-alves-franchi-dos-santos-b3ba3332/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button>
                <FaLinkedin />
              </button>
            </a>
          </div>
        </StyledUser>

        <StyledSkills>
          <h4>Desenvolvedor Full Stack Jr</h4>

          <div>
            <p>
              Possuo formação técnica em hardware e atualmente estou em
              transição de carreira para me tornar um Desenvolvedor Full Stack
              Júnior. Desde a infância, nutro uma paixão pela tecnologia. Minha
              inspiração está em criar programas inovadores que possam impactar
              positivamente a vida das pessoas.
            </p>
          </div>
        </StyledSkills>
      </StyledAbout>
    </>
  );
};

export default About;
