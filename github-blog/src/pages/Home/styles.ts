import styled from 'styled-components'

export const HomeContainer = styled.div`
    padding-bottom: 3.2rem;
`

export const Form = styled.form`
    margin: 7.2rem auto 4.8rem;
    max-width: 86.4rem;

`

export const InfoPublications = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 1.2rem;

    > strong {
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.8rem;
    }

    > span {
        color: ${props => props.theme['base-span']};
        font-size: 1.4rem;
    }
`

export const GridResume = styled.div`
    width: 100%;
    max-width: 86.4rem;
    margin: auto;
    
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;
    gap: 3.2rem;

`