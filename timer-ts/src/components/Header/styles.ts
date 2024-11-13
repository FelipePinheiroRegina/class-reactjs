import styled from 'styled-components'

export const HeaderContainer = styled.header`
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 4rem;

    > nav {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;

        a {
            width: 4.8rem;
            height: 4.8rem;
            display: flex;
            align-items: center;
            justify-content: center;

            svg {
                font-size: 2.4rem;
                color: ${props => props.theme['gray-100']};
            }
            
            border-bottom: 4px solid transparent;
            border-top: 4px solid transparent;

            &:hover {
                border-bottom: 4px solid ${props => props.theme['green-500']};
            }

            &.active {
                svg {
                    color: ${props => props.theme['green-500']};
                }   
            }
        }
    }
`