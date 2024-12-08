import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: none;
        box-shadow: 0 0 0 3px ${props => props.theme['green-300']};
    }

    html, body, input, button {
        font-family: 'Roboto', sans-serif;
        background: ${props => props.theme['gray-800']};
        color: ${props => props.theme.white};
    }
`