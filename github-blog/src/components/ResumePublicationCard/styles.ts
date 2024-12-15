import styled from 'styled-components'

export const ResumePublicationCardContainer = styled.div`
    width: 100%;
    max-width: 41.6rem;
    padding: 3.2rem;
    background: ${props => props.theme['base-post']};
    border-radius: 10px;
    border: 1px solid transparent;
    cursor: pointer;

    > div:first-child {
        display: flex;
        justify-content: space-between;
        gap: .8rem;
        margin-bottom: 2rem;

        h1 {
            font-size: 2rem;
            color: ${props => props.theme['base-title']};
            width: 70%;
        }

        time {
            font-size: 1.4rem;
            color: ${props => props.theme['base-span']};
            text-align: right;
        }
    }

    > p {
        font-size: 1.6rem;
        color: ${props => props.theme['base-text']};
    }

    &:hover {
        border: 1px solid ${props => props.theme['base-label']};
    }
`