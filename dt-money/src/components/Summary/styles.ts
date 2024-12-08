import styled from 'styled-components'

export const SummaryContainer = styled.div`
   margin-top: -4.375rem;
  
    > .centralize {
        width: 100%;
        max-width: 70rem;
        margin: auto;

        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
`

const COLORS_ICONS = {
    green: 'green-300',
    red: 'red-300',
    white: 'white'
} as const

interface PropsToApplyColor {
    $variant?: 'filled'
    $colorIcon: keyof typeof COLORS_ICONS
}

export const Card = styled.div<PropsToApplyColor>`
    background: ${props => props.$variant === 'filled' ? props.theme['green-700'] : props.theme['gray-600']};
    width: 100%;
    max-width: 21.875rem;
    border-radius: 6px;
    padding: 1.5rem 1.5rem 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    gap: .75rem;

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {
            color: ${props => props.theme['gray-300']};
            font-size: 1rem;
        }

        svg {
            font-size: 2rem;
            color: ${props => props.theme[COLORS_ICONS[props.$colorIcon]]};
        }
    }

    > .value {
        font-size: 2rem;
        color: ${props => props.theme['gray-100']};
        line-height: 140%;
    }
`