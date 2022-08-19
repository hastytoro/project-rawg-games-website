import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    &::-webkit-scrollbar {
      width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: darkgray;
    }
    &::-webkit-scrollbar-track {
      background: white;
    }  
  }

  body {
  /* font-family: 'Abril Fatface', cursive; */
  /* font-family: 'IBM Plex Sans', sans-serif; */
  /* font-family: 'Inter', sans-serif; */
  /* font-family: 'JetBrains Mono', monospace; */
  /* font-family: 'Lato', sans-serif; */
  /* font-family: 'Lobster Two', cursive; */
  /* font-family: 'Montserrat', sans-serif; */
  /* font-family: 'Nunito', sans-serif; */
  /* font-family: 'Poppins', sans-serif; */
  /* font-family: 'Roboto', sans-serif; */
  /* font-family: 'Roboto Mono', monospace; */
  font-family: 'Rubik', sans-serif;
  /* font-family: 'Rubik Mono One', sans-serif; */
  /* font-family: 'Space Grotesk', sans-serif; */
  /* font-family: 'Space Mono', monospace; */
  /* font-family: 'Trispace', sans-serif; */
  /* font-family: 'Work Sans', sans-serif; */
  }
  h2 {
    /* font-family: 'IBM Plex Sans', sans-serif; */
    color: #333;
    font-size: 2.5rem;
    font-weight: lighter;
  }
  h3 {
    color: #333;
    font-size: 1.2rem;
    padding: 1.5rem 0rem;
  }
  p {
    color: #696969;
    font-size: 1.2rem;
    line-height: 200%;
  }
  a {
    color: #333;
    text-decoration: none;
  }
  img {
    display: block;
    border: none;
    border-radius: 2px;
  }
`;

export default GlobalStyle;
