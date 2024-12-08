import styled from 'styled-components'

export const TableTransactionsContainer = styled.div`
    margin-top: 4rem;
`

export const TableContainer = styled.table`
    width: 100%;
    max-width: 70rem;
    margin: 1.5rem auto;

    font-size: 1rem;
    color: ${props => props.theme['gray-300']};
    border-collapse: collapse;

    tbody {
        tr {
            border-bottom: 8px solid ${props => props.theme['gray-800']};;
            background: ${props => props.theme['gray-700']};
            
            td {
                padding: 1.25rem 2rem;
            }

            td:first-child {
                width: 50%;    
            }

            td:last-child {
                text-align: center;                
            }
        }
    }
`

export const Positive = styled.span`
    color: ${props => props.theme['green-300']};
`

export const Negative = styled.span`
    color: ${props => props.theme['red-300']};
`