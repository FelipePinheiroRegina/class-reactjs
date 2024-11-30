import { createGlobalStyle } from 'styled-components'

export const GlobalsStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body, input, button, textarea {
        font-size: 1.6rem;
        background-color: ${props => props.theme.background};
    } 
`