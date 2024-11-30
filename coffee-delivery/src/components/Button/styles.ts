import styled from 'styled-components'

const heightChoice = {
	large: '5rem',
	short: '3.5rem'
} as const

const activeChoice = {
	false: false,
	true: true
} as const

export type TypeHeightButton = keyof typeof heightChoice;

export type ButtonActive = keyof typeof activeChoice;

export const ButtonContainer = styled.button<{ $typeHeightButton: TypeHeightButton, $isActive: ButtonActive }>`
    padding: 1.6rem;
    cursor: pointer;
    width: 100%;
    height: ${props => heightChoice[props.$typeHeightButton]};

    display: flex;
    align-items: center;
    border-radius: 6px;

    border: none;
    background-color: ${props => activeChoice[props.$isActive]  ? props.theme['purple-light'] : props.theme['base-button']};
    box-shadow: 0 0 0 2px ${props => activeChoice[props.$isActive]  ? props.theme['purple'] : 'transparent'};

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px ${props => props.theme['purple']};
    }

    transition: background-color .3s;

    &:hover {
        background-color: ${props => props.theme['base-hover']};
    }

    > span {
        display: flex;
        align-items: flex-end;
        gap: .4rem;
        
        svg {
            display: flex;
            font-size: 1.6rem;
            color: ${props => props.theme.purple};
        } 

        span:last-child {
            font-size: 1.2rem;
            text-transform: uppercase;
            color: ${props => props.theme['base-text']};
        }  
    } 
`