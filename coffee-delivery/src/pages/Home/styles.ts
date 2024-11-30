import styled from 'styled-components'

export const HomeContainer = styled.div`
    > .title-cards-container {
        display: flex;
        flex-direction: column;
        justify-self: center;
        gap: 5.2rem;
        margin: 4.2rem 0;
        
        
        > h1 {
            font-size: 3.2rem;
            font-family: ${props => props.theme.fonts.baloo};
            color: ${props => props.theme['base-subtitle']}; 
            line-height: 130%;
            font-weight: 800;
        }
    }
`

export const Banner = styled.div`
    position: relative;
    width: 100%;

    > .blur-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        background: linear-gradient(to bottom, 
        ${props => props.theme['background']} 12%,
        #ebc13627, 
        #7f47f854);

        filter: blur(65px);
        z-index: -1;
    }

    display: flex;
    gap: 5.6rem;
    justify-content: center;
    align-items: flex-start;
    padding: 9rem 0;

    > .phrases {
        max-width: 60rem;

        > h1 {
            font-size: 4.8rem;
            font-family: ${props => props.theme.fonts.baloo};
            color: ${props => props.theme['base-title']}; 
            line-height: 130%;
            margin-bottom: 1.6rem;
        }

        > p {
            font-size: 2rem;
            font-family: ${props => props.theme.fonts.roboto};
            color: ${props => props.theme['base-subtitle']}; 
            margin-bottom: 6.6rem;
        }
    }

    > .phrases > .icons-with-phrases {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 4rem;
        row-gap: 2rem;

        .icons {
            display: flex;
            align-items: center;
            gap: 1.2rem;

            white-space: nowrap;

            p {
                font-family: ${props => props.theme.fonts.roboto};
                font-size: 1.6rem;
                color: ${props => props.theme['base-text']};
            }
        }
    }

    > img {
        max-width: 48rem;
    }
`

export const GridCards = styled.main`
    max-width: max-content;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 3.2rem;
    row-gap: 4rem;
`