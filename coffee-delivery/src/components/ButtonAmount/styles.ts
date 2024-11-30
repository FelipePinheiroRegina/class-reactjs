import styled from 'styled-components'

export const ButtonAmountContainer = styled.span`
    display: flex;
    align-items: center;
    gap: .4rem;
    padding: .85rem;
    border-radius: 6px;

    background-color: ${props => props.theme['base-button']};

    > svg {
        font-size: 1.4rem;
        color: ${props => props.theme.purple};
        cursor: pointer;

        &:hover {
            color: ${props => props.theme['purple-dark']};
        }
    }

    > span {
        font-size: 1.6rem;
        font-family: ${props => props.theme.fonts.roboto};
        color: ${props => props.theme['base-title']};
    }         
`