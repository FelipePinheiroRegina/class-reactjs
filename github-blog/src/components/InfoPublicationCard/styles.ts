import styled from 'styled-components'

export const InfoPublicationCardContainer = styled.div`
    margin-top: -80px;
`

export const Content = styled.div`
    width: 100%;
    max-width: 86.4rem;
    margin: auto;
    padding: 3.2rem;
    background: ${props => props.theme['base-profile']};
    border-radius: 10px;

    h1 {
        font-size: 2.4rem;
        color: ${props => props.theme['base-title']};

        margin-bottom: .8rem;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;

    > a {
        color: ${props => props.theme.blue};
        text-decoration: none;
        font-weight: bold;

        display: flex;
        align-items: center;
        gap: .8rem;

        padding-bottom: .6rem;
        border-bottom: 1px solid transparent;

        span, svg {
            font-size: 1.2rem;
            line-height: 0;
        } 

        &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
        }
    }
`

export const Infos = styled.div`
    display: flex;
    align-items: center;
    gap: 3.2rem;

    > span {
        display: flex;
        gap: .8rem;
    }

    svg {
        font-size: 1.8rem;
        color: ${props => props.theme['base-label']};
    }
`