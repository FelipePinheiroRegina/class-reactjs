import styled from 'styled-components'

export const InputContainer = styled.input`
    border: none;
    
    font-size: 1rem;
    color: ${props => props.theme['gray-100']};
    background-color: ${props => props.theme['gray-900']};
    padding: 1rem;

    border-radius: 6px;

    &::placeholder {
        color: ${props => props.theme['gray-500']};
    }
`