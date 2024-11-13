import styled from 'styled-components'

export const CounterContainer = styled.div`
    display: flex;
    gap: 1.6rem;
    
    font-family: 'Roboto Mono', monospace;
    font-weight: 700;
    font-size: 16rem;
    line-height: 12.8rem;


    > span {
        border-radius: 8px;  
        background-color: ${props => props.theme['gray-700']};
        padding: 3.2rem 1.6rem;
    }
`

export const Separator = styled.div`
    padding: 3.2rem 0;

    color: ${props => props.theme['green-500']};
    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;
`