import styled from 'styled-components'

export const MethodPaymentContainer = styled.div`
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px;
    padding: 4rem;

    width: 64rem;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > .messages-container {
        display: flex;
        gap: .8rem;
        .icon {
            svg {
                color: ${props => props.theme.purple};
                font-size: 2.2rem;
            }
        }

        .messages {
            p:first-child {
                font-family: ${props => props.theme.fonts.roboto};
                color: ${props => props.theme['base-subtitle']};
                font-size: 1.6rem;
                line-height: 130%;
            }

            p:last-child {
                font-family: ${props => props.theme.fonts.roboto};
                color: ${props => props.theme['base-text']};
                font-size: 1.4rem;
                line-height: 130%;
            }
        }
    }

    > .methods-payments {
        display: flex;
        gap: 1.2rem; 
    }
`