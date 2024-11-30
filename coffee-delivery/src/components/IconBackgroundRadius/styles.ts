import styled from 'styled-components'

const COLORS_BACKGROUND_RADIUS = {
	yellow_dark: 'yellow-dark',
	yellow: 'yellow',
	base_text: 'base-text',
	purple: 'purple'
} as const

export type TypeColorsBackgroundRadius = keyof typeof COLORS_BACKGROUND_RADIUS

export const IconBackgroundRadiusContainer = styled.span<{$colorsBackgroundRadius: TypeColorsBackgroundRadius}>`
background-color: ${props => props.theme[COLORS_BACKGROUND_RADIUS[props.$colorsBackgroundRadius]]};
padding: .8rem;

display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
width: max-content;
height: max-content;

> svg {
    font-size: 1.6rem;
    color: ${props => props.theme.background};
}
`