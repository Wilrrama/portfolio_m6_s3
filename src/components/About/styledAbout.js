import styled from "styled-components";

export const StyledAbout = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 120px;
  padding-top: 60px;
  padding-bottom: 20px;
  background-color: #f8f8f8;
  color: #333;

  @media screen and (max-width: 600px) {
    display: flex;
    padding-left: 20px;
    flex-direction: column;
  }
`;

export const StyledUser = styled.div`
  display: flex;
  align-items: center;

  figure {
    margin-right: 20px;

    img {
      min-width: 100px;
      max-width: 100px;
      border-radius: 50%;
      border: 2px solid #333;
    }

    figcaption {
      text-align: center;
      margin-top: 10px;
    }
  }

  div {
    display: flex;
    gap: 10px;

    button {
      font-size: 1.5rem;
      &:hover {
        color: #007bff;
      }
    }
  }
`;

export const StyledSkills = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding-left: 20px;

  h4 {
    margin-bottom: 10px;
  }

  div {
    p {
      max-width: 70%;
      text-align: justify;
    }
  }

  @media screen and (max-width: 600px) {
    div {
      p {
        text-align: center;
        max-width: 90%;
      }
    }
    h4 {
      text-align: center;
    }
  }
`;
