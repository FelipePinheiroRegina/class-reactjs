import styled from 'styled-components'

export const InputContainer = styled.div`
    display: flex;
    width: 100%;
    height: 4.2rem;
    border-radius: 4px;
    background-color: ${props => props.theme['base-input']};
    
    > input {
        flex: 1;
        height: 100%;
        width: 100%;
        padding: 1.2rem;

        border: none;
        outline: none; 
        background-color: transparent;    
        color: ${props => props.theme['base-text']};

        &::placeholder {
            font-family: ${props => props.theme.fonts.roboto};
            font-size: 1.4rem;
            line-height: 130%;
            color: ${props => props.theme['base-label']};
        }
    }

    .placeholder-left {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-right: 1.2rem;

        font-family: ${props => props.theme.fonts.roboto};
        font-size: 1.2rem;
        line-height: 130%;
        color: ${props => props.theme['base-label']};
        font-style: italic;
    }

    &:focus-within {
        box-shadow: 0 0 0 2px ${props => props.theme['yellow-dark']};

        > input {
            &::placeholder {
                color: transparent;
            }
        }

        .placeholder-left {
            opacity: 0;
        }
    }
`