import styled from 'styled-components'

export const CardContainer = styled.div`
   width: 272px;
   display: flex;
   flex-direction: column;
   justify-content: center;

   background-color: ${props => props.theme['base-card']};

   border-top-left-radius: 6px;

   border-top-right-radius: 36px;

   border-bottom-left-radius: 36px;

   border-bottom-right-radius: 6px;

   padding: 1.8rem 2rem;
   gap: 1.6rem;

   > img {
        max-width: 12rem;
        margin: auto;
        margin-top: -35px;
   }

   > .tags-container {
        display: grid;
        grid-template-columns: repeat(3, max-content);
        justify-content: center;
        gap: .8rem;

        > .tag {
            display: flex;
            align-items: center;
            justify-content: center;
            

            padding: .4rem .8rem;
            border-radius: 10rem;

            background-color: ${props => props.theme['yellow-light']};
            color: ${props => props.theme['yellow-dark']};

            font-family: ${props => props.theme.fonts.roboto};
            font-weight: 700;
            font-size: 1rem;
            text-transform: uppercase;
        }
   }

   > .descriptions-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: .8rem;

        > h1 {
            text-align: center;

            font-size: 2rem;
            line-height: 130%;
            font-family: ${props => props.theme.fonts.baloo};
            color: ${props => props.theme['base-subtitle']};
        }
        
        > p {
            text-align: center;

            font-size: 1.4rem;
            line-height: 130%;
            font-family: ${props => props.theme.fonts.roboto};
            color: ${props => props.theme['base-label']};
        }
   }

   > .price-amount-shop-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .price-container {
            span:first-child {
                font-size: 2rem;
                line-height: 130%;
                font-family: ${props => props.theme.fonts.roboto};
                color: ${props => props.theme['base-text']};
                font-weight: 400;
                margin-right: .8rem;
            }

            span:last-child {
                font-size: 3.2rem;
                line-height: 130%;
                font-family: ${props => props.theme.fonts.baloo};
                color: ${props => props.theme['base-text']};
                font-weight: 700;
            }
        }

        > .shop-and-amount-container {
            display: flex;
            align-items: center;
            gap: 1.6rem;

            .add-coffee-shop {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: .85rem;
                background-color: ${props => props.theme['purple-dark']};
                color: ${props => props.theme['base-card']};
                border-radius: 6px;
                border: none;

                transition: background-color .3s;

                &:hover {
                    background-color: ${props => props.theme['purple']};
                    cursor: pointer;
                }
            }
        }
   }
`