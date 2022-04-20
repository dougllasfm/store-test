import { createGlobalStyle } from "styled-components";
import texture from "../assets/bg-texture.png";

export default createGlobalStyle`
  html,
  body {
    background: var(--primary);
    background-image: url(${texture});
    font-family: 'Poppins', sans-serif;
    color: var(--white);
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  :root {
    --primary: #11101d;
    --secondary: #4bb5ff;
    --green: #27AE60;
    --darkGray: #525C67;
    --gray: #ededed;
    --white: #FFFFFF;
  }
`;
