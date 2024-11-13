import styled from 'styled-components'

export const InputsContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: .8rem;

    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;
    
    .bold {
        font-weight: 700;
    }

    .medium {
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: .8rem;
    } 
`

const BaseInputs = styled.input`
    background-color: transparent;
    border: none;
    border-bottom: 2px solid ${props => props.theme['gray-500']};
    color: ${props => props.theme['gray-100']};
    font-weight: bold;
    font-size: 1.8rem;
    padding: 0 .8rem;

    &:focus {
        box-shadow: none;
        border-bottom: 2px solid ${props => props.theme['green-500']};
    }

    &::placeholder {
        color: ${props => props.theme['gray-500']};
        font-weight: 700;
    }
`

export const InputTask = styled(BaseInputs)`
    flex: 1;

    /* tira a setinha do datalist no chrome */
    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

export const InputDurationMinutes = styled(BaseInputs)`
    max-width: 7.2rem;
    padding: 0;
    text-align: center;
`