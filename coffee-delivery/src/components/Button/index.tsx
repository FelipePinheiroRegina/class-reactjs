import { ButtonHTMLAttributes } from 'react'
import { ButtonContainer, TypeHeightButton, ButtonActive } from './styles'
import { Icon } from '@phosphor-icons/react'

interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: Icon
    label: string;
    typeHeightButton?: TypeHeightButton;
	isActive?: ButtonActive
}

export function Button({ Icon, label, typeHeightButton = 'large', isActive = 'false', ...rest }: PropsButton) {
	return (
		<ButtonContainer $typeHeightButton={typeHeightButton} $isActive={isActive} {...rest}>
			<span>
				<span>
					<Icon />
				</span>
				<span>{label}</span>
			</span>
		</ButtonContainer>
	)
}
