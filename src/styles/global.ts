import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:focus {
    border: none;
    outline: none;
}

body {
    background-color: ${(props) => props.theme["gray-100"]};
    font-family: 'Inter', sans-serif;
}

`;
