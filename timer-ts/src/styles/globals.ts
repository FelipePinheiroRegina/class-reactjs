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
        box-shadow: 0 0 0 2px ${props => props.theme['green-500']};
    }

    body {
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-100']};
    }

    body, input, button, textarea {
        font-size: 1.6rem;
        line-height: 160%;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }
`