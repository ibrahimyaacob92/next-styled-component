import { createGlobalStyle, css } from "styled-components";

// create gblobal style doesnt support css styling
const globalCSS = css`
  html {
    padding: 0;
    margin: 0;
  }

  body {
    background: lightgray;
    padding: 0;
    margin: 0;
  }
`;

const GlobalStyle = createGlobalStyle`${globalCSS}`;

export default GlobalStyle;
