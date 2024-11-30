import { FormContainer } from './styles'
import { MapPinLine } from '@phosphor-icons/react'
import { Input } from './Input'
import { useFormContext } from 'react-hook-form'

interface PropsForm {
	onSubmit: () => void
}
export function Form({onSubmit}: PropsForm) {
	const { register } = useFormContext()
	
	return (
		<FormContainer onSubmit={onSubmit} >
			<div className='messages-container'>
				<div className='icon'>
					<MapPinLine/>
				</div>

				<div className='messages'>
					<p>Delivery Address</p>
					<p>Enter the address where you would like to wait for your order</p>
				</div>
			</div>

			<div className='address-inputs'>
				<Input 
					placeholder="CEP" 
					className='cep'
					{...register('cep')}
				/>

				<Input 
					placeholder="Street" 
					className='street'
					{...register('street')}
				/>

				<div className='number-complement-container'>
					<Input 
						placeholder="Number" 
						className='number'
						{...register('number')}
					/>
					<Input  
						placeholder="Complement" 
						placeholderLeft="Optional" 
						className='complement'
						{...register('complement')}
					/>
				</div>
                
				<div className='neighborhood-city-uf-container'>
					<Input 
						placeholder="Neighborhood" 
						className='neighborhood'
						{...register('neighborhood')}
					/>

					<Input 
						placeholder="City" 
						className='city'
						{...register('city')}
					/>
					<Input 
						placeholder="UF" 
						className='uf'
						{...register('uf')}
					/>
				</div>
			</div>
		</FormContainer>
	)
}