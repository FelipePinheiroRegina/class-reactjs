import { Minus, Plus } from '@phosphor-icons/react'
import { ButtonAmountContainer } from './styles'

interface PropsButtonAmount {
	onClickMinus: () => void,
	onClickPlus: () => void,
	amount: number
}

export function ButtonAmount({ amount, onClickMinus, onClickPlus }: PropsButtonAmount) {
	return (
		<ButtonAmountContainer>
			<Minus onClick={onClickMinus}/>
			<span>{amount}</span>
			<Plus onClick={onClickPlus}/>
		</ButtonAmountContainer>
	)
}