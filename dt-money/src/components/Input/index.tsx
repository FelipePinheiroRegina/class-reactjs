import { InputHTMLAttributes, forwardRef, Ref } from 'react'
import { InputContainer } from './styles'

function InputComponent({...props}: InputHTMLAttributes<HTMLInputElement>, ref: Ref<HTMLInputElement> ){
	return <InputContainer ref={ref} {...props}/>
}

export const Input = forwardRef(InputComponent)