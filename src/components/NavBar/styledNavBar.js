import styled from "styled-components";

export const StyledNav = styled.header`
  background-color: #333;
  color: #fff;
  padding: 18px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;

  h3 {
  }

  div {
    display: flex;
    gap: 25px;

    button {
      background: none;
      border: none;
      color: #fff;
      font-size: 1rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
