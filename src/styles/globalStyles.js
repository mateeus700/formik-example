import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        outline: 0;
    }

    html, body, #root {
      min-height: 100vh;
      height: 100vh;
      overflow-x: hidden;

      iframe[style="position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; border: none; z-index: 2147483647;"] {
        display: none;
      }
    }

    /* html {
        overflow: initial;
        scroll-behavior: smooth;
    }

    body {
        overflow: initial;
    } */

`;

export default GlobalStyle;
