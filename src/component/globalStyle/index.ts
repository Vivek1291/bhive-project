

import { createGlobalStyle } from 'styled-components';
import { useTheme } from '../../context/themeContext';
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", sans-serif; // 
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    line-height: 1.5;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 16px; 
  }

  p {
    margin-bottom: 16px;
  }

  a {
    text-decoration: none; 
  }

  button {
    cursor: pointer; // Change cursor to pointer for buttons
  }
  img {
    width: 100%;
  }
`;

export default GlobalStyle;


