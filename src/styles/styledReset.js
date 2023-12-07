import { createGlobalStyle } from "styled-components";

export const ResetStyles = createGlobalStyle`
 :root {
    --font-family-primary: 'Noto Sans Display', sans-serif;
  }
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Display:ital,wght@0,100;0,500;1,200&display=swap');
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;    
		font-family: var(--font-family-primary); 
  }

  html{
  overflow-x: hidden;  
  }

  body {
    line-height: 1;
    overflow-x: hidden;   
  }

  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  input {
    border-radius: 0;
    border: none;
    background: transparent;
  }

  img {
    max-width: 100%;
  }
`;
