import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }

  body {
    background: #e3e3e3;
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
  }
`;
