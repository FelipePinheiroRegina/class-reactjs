import styled from 'styled-components'

export const InputContainer = styled.input`
    width: 100%;
    
    font-size: 1.6rem;
    padding: 1.2rem 1.6rem;

    color: ${props => props.theme['base-text']};
    background-color: ${props => props.theme['base-input']};
    border: 1px solid ${props => props.theme['base-border']};
    border-radius: 6px;

    &::placeholder {
        color: ${props => props.theme['base-label']};
    }
`