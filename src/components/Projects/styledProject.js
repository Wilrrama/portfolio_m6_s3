import styled, { keyframes } from "styled-components";

// Define the animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledProjectsTitle = styled.div`
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
  padding: 10px;
`;

export const StyledProjectsNav = styled.nav`
  background-color: #f8f8f8;
  color: #333;
  text-align: center;
  padding: 10px;

  button {
    background-color: #333;
    border: none;
    color: white;
    padding: 10px 20px;
    margin: 5px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;

    &:hover {
      background-color: #45a049;
    }

    &:focus {
      outline: none;
      background-color: #3e8e41;
    }
  }
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
  transition: all 0.3s ease; /* Add transition effect */

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
    transition: transform 0.3s ease; /* Add transition effect */
    animation: ${fadeIn} 0.5s ease; /* Apply animation */

    &:hover {
      transform: scale(1.05); /* Scale up on hover */
    }

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
    width: 25px;
    height: 25px;
  }
`;
