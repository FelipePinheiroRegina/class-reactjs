import styled from 'styled-components'

export const HistoryContainer = styled.div`
    margin-top: 5rem;
    max-width: 90rem;
    margin-inline: auto;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    > h1 {
        font-size: 2.4rem;
    }

`

export const TableContainer = styled.div`
    overflow: auto;

    > table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
        font-size: 1.4rem;
        line-height: 1.6;
        min-width: 600px;

        thead th {
            background-color: ${props => props.theme['gray-600']};
            padding: 1.6rem 2.4rem;

            &:first-child {
                border-top-left-radius: 8px;
            }

            &:last-child {
                border-top-right-radius: 8px;
            }
        }

        tbody td {
            padding: 1.6rem 2.4rem;
            color: ${props => props.theme['gray-300']};
            background-color: ${props => props.theme['gray-700']};

            border-top: 4px solid ${props => props.theme['gray-800']};

            &:first-child {
                width: 49%;
            }

            
        }
    }
`
const COLORS_STATUS = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500'
} as const

interface ColorNameProps {
    $nameColor: keyof typeof COLORS_STATUS
}

export const Status = styled.span<ColorNameProps>`
    &::before {
        content: '';
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${(props) => props.theme[COLORS_STATUS[props.$nameColor]]};
    }
    
    display: flex;
    align-items: center;
    gap: .8rem;
    width: max-content;
`