import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: 0;
    box-shadow: 0 0 0 2px black;
  }

  body{
    background-color: #080808;
    color: #d9d9d9;
    -webkit-font-smoothing: antialiased;
  }
  
  body,input,textarea, button{
    font: 400 1rem Roboto, sans-serif;
  }


`