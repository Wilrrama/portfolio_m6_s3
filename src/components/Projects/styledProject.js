import styled from "styled-components";

export const StyledProjectsTitle = styled.div`
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
  padding: 10px;
`;

export const StyledProjects = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 10px;
  margin-bottom: 60px;
  background-color: #f8f8f8;
  color: #333;

  .tipo {
    text-align: center;
    font-weight: 700;
  }
  .project__title {
    text-align: center;
    margin-bottom: 3px;
  }

  .link__container {
    display: flex;
    justify-content: center;
    gap: 15px;
  }

  .project__description {
    max-width: 200px;
    text-align: center;
    padding-left: 10px;
  }

  li {
    display: flex;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
    align-items: center;

    h2 {
      margin-bottom: 10px;
    }

    img {
      width: 150px;
      height: 150px;
      border: 1px solid black;
      border-radius: 8px;
    }

    a {
      font-size: 20px;
      margin-top: 10px;
      &:hover {
        color: #007bff;
      }
    }
  }

  .project_tech_container {
    display: flex;
    padding: 5px;
    gap: 5px;
    justify-content: center;
  }

  .project_tech_img {
    width: 30px;
    height: 30px;
  }
`;
