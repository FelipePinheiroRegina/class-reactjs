import { ReactNode } from 'react'
import { IconBackgroundRadiusContainer } from './styles'
import { TypeColorsBackgroundRadius } from './styles'

interface PropsIconBackgroundRadius {
    typeColorsBackgroundRadius: TypeColorsBackgroundRadius
    children: ReactNode
}

export function IconBackgroundRadius({ typeColorsBackgroundRadius, children }: PropsIconBackgroundRadius) {
	return (
		<IconBackgroundRadiusContainer $colorsBackgroundRadius={typeColorsBackgroundRadius}>
			{children}
		</IconBackgroundRadiusContainer>
	)
    
}