import styled from 'styled-components'

export const FormContainer = styled.form`
    background-color: ${props => props.theme['base-card']};
    border-radius: 6px;
    width: 64rem;
    padding: 4rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > .messages-container {
        display: flex;
        gap: .8rem;

        .icon {
            svg {
                color: ${props => props.theme['yellow-dark']};
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
    
    > .address-inputs {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;

        .cep {
            max-width: 40%;
        }

        .number-complement-container {
            width: 100%;
            display: flex;
            gap: 1.2rem;
            
            .number {
                max-width: 40%;
            }

            .complement {
                flex: 1;
            }
        }

        .neighborhood-city-uf-container {
            display: flex;
            gap: 1.2rem;

            .neighborhood {
                max-width: 40%;
            }

            .city {
                max-width: 50%;
            }

            .uf {
                max-width: 10%;
            }
        }
    }
`