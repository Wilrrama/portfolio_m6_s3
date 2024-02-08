import { tegnologies } from "../../data/tecnologies";
import { StyledTecnologies } from "./styledTecnologie";

const Tecnologie = () => {
  return (
    <>
      <StyledTecnologies>
        <div>
          <h4 id="tecnologias">Tecnologias</h4>
        </div>
        <ul>
          {tegnologies.map((tegnologie) => (
            <li key={tegnologie.id}>
              <figure>
                <img src={tegnologie.img} alt="icone da tecnologia" />
                <figcaption>
                  <em> {tegnologie.nome}</em>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </StyledTecnologies>
    </>
  );
};

export default Tecnologie;
