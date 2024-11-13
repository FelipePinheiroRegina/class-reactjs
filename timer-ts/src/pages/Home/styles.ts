import styled from 'styled-components'

export const HomeContainer = styled.div`
    margin-top: 7.4rem;
    /* Para Chrome, Safari, Edge e Opera
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }

     Para Firefox 
    input[type="number"] {
    -moz-appearance: textfield;
    }
    */
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6rem;
    max-width: max-content;
    margin: 0 auto;
`

export const BaseCountDownButton = styled.button`
    width: 100%;
    border: none;
    padding: 1.6rem;
    border-radius: 8px;

    font-size: 1.6rem;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .8rem;
    justify-content: center;
    color: ${props => props.theme['gray-100']};

    svg {
        font-size: 2.4rem;
    }

`

export const StartCountDownButton = styled(BaseCountDownButton)`
    background-color: ${props => props.theme['green-500']};

    &:disabled {
        cursor: not-allowed;
        background-color: ${props => props.theme['green-700']};
    }

    &:not(:disabled):hover {
        cursor: pointer;
        background-color: ${props => props.theme['green-300']};
    }
`

export const StopCountDownButton = styled(BaseCountDownButton)`
    background-color: ${props => props.theme['red-700']};

    &:not(:disabled):hover {
        cursor: pointer;
        background-color: ${props => props.theme['red-500']};
    }
`