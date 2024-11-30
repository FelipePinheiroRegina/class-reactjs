import styled from 'styled-components'

export const ShoppingContainer = styled.div`
    max-width: 112rem;
    margin: 4rem auto;
    display: flex;
    flex-direction: row;
    gap: 3.2rem;

    .subtitle {
        font-family: ${props => props.theme.fonts.baloo};
        color: ${props => props.theme['base-subtitle']};
        font-weight: 700;
        font-size: 1.8rem;
        line-height: 130%;
    }
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: max-content;
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: max-content;
`