import styled from 'styled-components'

export const HeaderContainer = styled.header`
    position: sticky;
    top: 0;
    z-index: 10;
    background-color: ${props => props.theme['background']};

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 3.2rem 16rem;
`

export const CityAndShop = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    a {
        text-decoration: none;
    }

    .span-city {
        cursor: pointer;
        > svg {
            color: ${props => props.theme.purple};
        }

        display: flex;
        align-items: center;
        gap: 4px;

        border-radius: 8px;
        padding: .8rem;
        background-color: ${props => props.theme['purple-light']};
        
        span {
            color: ${props => props.theme['purple-dark']};
            font-family: ${props => props.theme.fonts.roboto};
            font-size: 1.4rem;
        }
    }

    .span-shop {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        padding: .8rem;
        border-radius: 8px;

        background-color: ${props => props.theme['yellow-light']};

        > svg {
            font-size: 2.2rem;
            color: ${props => props.theme['yellow-dark']};
        }

        cursor: pointer;

        .qtd {
            position: absolute;
            right: -8px;
            top: -8px;

            background-color: ${props => props.theme['yellow-dark']}; 
            border-radius: 50%;
            width: 20px;
            height: 20px;

            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;

            font-size: 1.2rem;
            color: ${props => props.theme.white};
            font-family: ${props => props.theme.fonts.roboto};
            font-weight: 700;
        }
    }
`