import styled from 'styled-components'

export const HeaderContainer = styled.div`
    background: ${props => props.theme['gray-900']};
    padding: 2.5rem 10rem 7.625rem; // top 40px, sides 160px, bottom 122px
`

export const HeaderContent = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: auto;
    width: 100%;
    max-width: 70rem;
`

export const Logo = styled.span`
    display: flex;
    align-items: center;
    gap: 1rem;

    > img {
        height: 2.375rem;
        object-fit: contain;
    }

    > span {
        font-weight: bold;
        line-height: 160%;
        font-size: 1.5625rem;
        color: ${props => props.theme['gray-100']};
    }
`

export const Button = styled.button`
    padding: 0.75rem 1.25rem;
    color: ${props => props.theme.white};
    border-radius: 6px;
    background: ${props => props.theme['green-500']};
    border: none;
    cursor: pointer;
    transition: background-color .2s;

    &:hover {
        background: ${props => props.theme['green-300']};
    }
`
