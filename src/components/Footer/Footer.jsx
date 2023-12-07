import { StyledFooter } from "./styledFooter";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <StyledFooter>
        <div>
          <h3>Wilson</h3>
          <h4>
            <a href="mailto:wilrrama@hotmail.com">wilrrama@hotmail.com</a>
          </h4>
        </div>
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
      </StyledFooter>
    </>
  );
};

export default Footer;
