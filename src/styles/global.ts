import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme["background"]};
        color: ${props => props.theme["base-text"]};
        -webkit-font-smoothing: antialiased;
    }

    span, p, a {
        font-family: 'Roboto', sans-serif;
        line-height: 130%;
    } 

    h1, h2 {
        font-family: 'Baloo 2', sans-serif ;
        font-weight: 130%;
    }
`