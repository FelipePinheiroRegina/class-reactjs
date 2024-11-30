import styled from 'styled-components'

export const OrderConfirmedContainer = styled.div`
    margin-top: 8rem;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 8rem;

    > .information {
        width: 52.6rem;
        display: flex;
        flex-direction: column;
        gap: 4rem;

        .phrase-confirm {
            display: flex;
            flex-direction: column;
            
            span:first-child {
                font-family: ${props => props.theme.fonts.baloo};
                font-size: 3.2rem;
                color: ${props => props.theme['yellow-dark']};
                line-height: 130%;
                font-weight: 800;
            }

            span:last-child {
                font-family: ${props => props.theme.fonts.roboto};
                font-size: 2rem;
                color: ${props => props.theme['base-subtitle']};
                line-height: 130%;
                font-weight: 400;
            }
        }

        .degrade-border-container {
            position: relative;
            padding: 1px;
            
            &::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(to right, #DBAC2C, #8047F8);
                z-index: -1; /* Fica atrás do conteúdo */
                border-top-left-radius: 6px;

                border-top-right-radius: 36px;

                border-bottom-left-radius: 36px;

                border-bottom-right-radius: 6px;
            }

            .icons-messages-container {
                width: 100%;
                padding: 4rem;

                display: flex;
                flex-direction: column;
                gap: 3.2rem;

                background-color: ${props => props.theme.background};

                border-top-left-radius: 6px;

                border-top-right-radius: 36px;

                border-bottom-left-radius: 36px;

                border-bottom-right-radius: 6px;

                .default {
                    display: flex;
                    align-items: center;
                    gap: 1.2rem;

                    .default-details {
                        display: flex;
                        flex-direction: column;

                        span, strong {
                            font-family: ${props => props.theme.fonts.roboto};
                            font-size: 1.6rem;
                            color: ${props => props.theme['base-text']};
                            line-height: 130%;
                        }
                    }
                }
            }
        }
    }
`