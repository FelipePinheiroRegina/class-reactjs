import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    :focus {
        outline: none;

        box-shadow: 0 0 0 1px ${props => props.theme.blue};
    }

    body, input, button {
        font-size: 1.6rem;
        background-color: ${props => props.theme['base-background']};
        font-family: "Nunito", sans-serif;
    }
`