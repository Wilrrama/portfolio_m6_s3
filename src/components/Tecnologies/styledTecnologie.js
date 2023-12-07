import styled from "styled-components";

export const StyledTecnologies = styled.div`
  background-color: #f8f8f8;
  color: #333;
  padding: 20px;

  div {
    text-align: center;
    margin-bottom: 20px;
    h4 {
    }
  }

  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-left: 3%;
    margin-right: 3%;
    li {
      display: inline-block;
      margin-right: 20px;
      figure {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        img {
          width: 50px;
          height: auto;
        }

        figcaption {
          text-align: center;
          margin-top: 5px;
        }
      }
    }
  }
`;
