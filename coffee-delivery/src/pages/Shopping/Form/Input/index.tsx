import { InputHTMLAttributes, forwardRef, Ref } from 'react'
import { InputContainer } from './styles'

interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
	placeholderLeft?: string,
	className?: string,
}

function InputComponent(
	{ 	placeholderLeft, className, ...props}: PropsInput,
		ref: Ref<HTMLInputElement>
	){

	return (
		<InputContainer className={className}>
			<input ref={ref} {...props}/>
			<span className='placeholder-left'>{placeholderLeft}</span>
		</InputContainer>
	)
}

export const Input = forwardRef(InputComponent)