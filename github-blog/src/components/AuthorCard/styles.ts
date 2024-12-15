import styled from 'styled-components'

export const AuthorCardContainer = styled.div`
    margin-top: -100px;
`

export const Card = styled.div`
    margin: auto;
    width: 100%;
    max-width: 86.4rem;
    background-color: ${props => props.theme['base-profile']};

    display: flex;
    align-items: center;
    gap: 3.2rem;
    border-radius: 10px;

    padding: 3.2rem 3.2rem 3.2rem 4rem;
`

export const Image = styled.img`
    width: 14.8rem;
    height: 14.8rem;
    object-fit: contain;
    border-radius: 8px;
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
`

export const UserDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    div:first-child {
        display: flex;
        justify-content: space-between;

        h1 {
            color: ${props => props.theme['base-title']};
            font-size: 2.4rem;
        }

        a {
            color: ${props => props.theme.blue};
            text-decoration: none;
            display: flex;
            align-items: center;
            line-height: 0;
            gap: .8rem;

            span {
                font-size: 1.2rem;
                font-weight: bold;
                line-height: 0;
            }

            svg {
                font-size: 1.2rem;
                line-height: 0;
            }

            &:hover {
                border-bottom: 1px solid ${props => props.theme.blue};
            }
        }
    }

    p {
        color: ${props => props.theme['base-text']};
        line-height: 160%;

    }
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 2.4rem;
   
   > span {
        display: flex;
        align-items: center;
        gap: .8rem;

        svg {
            font-size: 1.8rem;
            color: ${props => props.theme['base-label']};
        }
   }
`