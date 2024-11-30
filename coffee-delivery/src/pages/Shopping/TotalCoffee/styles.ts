import styled from 'styled-components'

export const TotalCoffeeContainer = styled.div`
    width: 44.8rem;
    padding: 4rem;
    background-color: ${props => props.theme['base-card']};

    border-top-left-radius: 6px;

    border-top-right-radius: 36px;

    border-bottom-left-radius: 36px;

    border-bottom-right-radius: 6px;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`

export const CardSelectedCoffee = styled.div`
    display: flex;
    gap: 2rem;
    width: 100%;

    padding-bottom: 3.3rem;
    border-bottom: 1px solid ${props => props.theme['base-button']};

    > img {
        width: 6.4rem;
        object-fit: contain;
    }

    > .details {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .8rem;

        .name-price-container {
            display: flex;
            align-items: center;
            justify-content: space-between;

            span:first-child {
                font-family: ${props => props.theme.fonts.roboto};
                line-height: 130%;
                color: ${props => props.theme['base-subtitle']};
            }

            span:last-child {
                font-family: ${props => props.theme.fonts.roboto};
                line-height: 130%;
                color: ${props => props.theme['base-text']};
                font-weight: 700;
            }
        }

        .amount-remove-buttons {
            display: flex;
            gap: .8rem;

            * {
                width: max-content;
            }
        }
    }
`

export const Prices = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .styleFontNormal {
        font-family: ${props => props.theme.fonts.roboto};
        color: ${props => props.theme['base-text']};
        font-size: 1.4rem;
        font-weight: 400;
        line-height: 130%;

    }

    .styleFontBold {
        font-family: ${props => props.theme.fonts.roboto};
        color: ${props => props.theme['base-subtitle']};
        font-size: 2.0rem;
        font-weight: 700;
        line-height: 130%;
    }
`

export const ButtonSubmit = styled.button`
    font-family: ${props => props.theme.fonts.roboto};
    color: ${props => props.theme['white']};
    background-color: ${props => props.theme['yellow']};
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 160%;

    padding: 1.2rem .8rem;
    border-radius: 6px;
    border: none;

    &:hover {
        background-color: ${props => props.theme['yellow-dark']};
        cursor: pointer;
    }

    &:focus {
        outline: none;

        box-shadow: 0 0 0 2px ${props => props.theme['yellow-dark']};
    }
`