import styled from 'styled-components'

export const SearchFormContainer = styled.form`
    width: 100%;
    max-width: 70rem;
    margin: auto;

    display: flex;
    align-items: center;
    gap: 1rem;

    > input {
        flex: 1;
        border: none;
        padding: 1rem;
        color: ${props => props.theme['gray-300']};
        background-color: ${props => props.theme['gray-900']};
        border-radius: 6px;
        font-size: 1rem;

        &::placeholder {
            color: ${props => props.theme['gray-500']};
        }
    }

    > button {
        padding: .875rem 2rem;
        border: 1px solid ${props => props.theme['green-300']};
        border-radius: 6px;
        display: flex;
        align-items: center;
        gap: .75rem;
        color: ${props => props.theme['green-300']};
        cursor: pointer;

        svg {
            font-size: 1.25rem;
        }

        span {
            font-size: 1rem;
            font-weight: bold;
        } 

        transition: background .2s;

        &:not(:disabled):hover {
            background: ${props => props.theme['green-500']};
            color: ${props => props.theme.white};
            border: 1px solid transparent;
        }

        &:disabled {
            opacity: .2;
            cursor: not-allowed;
        }
    }
`