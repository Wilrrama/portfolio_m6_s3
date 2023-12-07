import styled from "styled-components";

export const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    text-align: center;
  }

  h4 {
    &:hover {
      color: #007bff;
    }
  }

  button {
    font-size: 1.5rem;
    color: #fff;
    margin: 0 10px;

    &:hover {
      color: #007bff;
    }
  }
`;
