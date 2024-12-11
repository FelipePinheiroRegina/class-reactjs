import styled from 'styled-components'

export const LayoutDefaultContainer = styled.div`
    
`

export const  BannerContainer = styled.div`
    width: 100%;
    height: 29.6rem;
    
    background: linear-gradient(90deg, rgb(11, 27, 43), rgb(12, 33, 55));

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Image = styled.img`   
    object-fit: contain;
    height: max-content;
`

export const  Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    height: 100%;
    margin-top: 6.4rem;
`

export const ImageTerminal = styled.img`
    width: 4.8rem;
    object-fit: contain;
`
export const  Phrase = styled.div`
    font-family:  "Coda", system-ui;
    font-size: 2.4rem;
    font-weight: 400;
    color: ${props => props.theme.blue};
`
