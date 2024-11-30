import { ShoppingContainer, LeftContainer, RightContainer } from './styles'
import { Form } from './Form'
import { MethodPayment } from './MethodPayment'
import { TotalCoffee } from './TotalCoffee'
import { useForm, FormProvider } from 'react-hook-form'
import { Method } from './MethodPayment'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useNavigate } from 'react-router-dom'

const formAddressSchema = z.object({
	cep: z.string()
	  .length(8, 'CEP deve ter exatamente 8 dígitos') // Verifica se o CEP tem 8 caracteres
	  .regex(/^\d{8}$/, 'CEP deve conter apenas números'), // Garante que o CEP seja composto apenas por números
  
	city: z.string()
	  .min(3, 'A cidade deve ter no mínimo 3 caracteres') // A cidade precisa ter pelo menos 3 caracteres
	  .max(100, 'A cidade pode ter no máximo 100 caracteres'), // A cidade não pode ser muito longa
  
	complement: z.string().optional(),
  
	neighborhood: z.string().optional(), // O bairro continua sendo opcional
  
	number: z.string()
	  .min(1, 'O número da residência deve ter pelo menos 1 caractere'), // Garante que o número seja fornecido
  
	street: z.string()
	  .min(3, 'A rua deve ter no mínimo 3 caracteres'), // Garante que o nome da rua tenha pelo menos 3 caracteres
  
	uf: z.string()
	  .length(2, 'A UF (unidade federativa) deve ter exatamente 2 caracteres') // Validação para a UF
	  .regex(/^[A-Za-z]{2}$/, 'A UF deve conter apenas letras e ser composta por 2 caracteres') // Apenas letras, 2 caracteres
  })

export type FormAddress = z.infer<typeof formAddressSchema>

export function Shopping() {
	const { handleSetAddressPayment, addressPayment, handleClearStateAndLocalStorage, stateCoffeeCart } = useCart()
	const navigate = useNavigate()

	const methods = useForm<FormAddress>({
		resolver: zodResolver(formAddressSchema),
		defaultValues: {
			cep: addressPayment.address ? addressPayment.address.cep : '',
			city: addressPayment.address ? addressPayment.address.city : '',
			complement: addressPayment.address ? addressPayment.address.complement : undefined,
			neighborhood: addressPayment.address ? addressPayment.address.neighborhood : '',
			number: addressPayment.address ? addressPayment.address.number : '',
			street: addressPayment.address ? addressPayment.address.street : '',
			uf: addressPayment.address ? addressPayment.address.uf : ''
		}
	})

	/* para tratar erros
	const { formState } = methods
	console.log(formState.errors)
	*/

	const [methodPayment, setMethodPayment] = useState<Method>(() => {
		if(addressPayment.methodPayment) {
			return addressPayment.methodPayment
		} else {
			return 'money'
		}
	})

	function handleClickMethod(methodPayment: Method) {
		setMethodPayment(methodPayment)
	}

	function onSubmit(address: FormAddress) {
		handleSetAddressPayment(address, methodPayment)

		const existsCoffeesInCart = stateCoffeeCart.length > 0 // if yes, return true

		if(existsCoffeesInCart) {
			handleClearStateAndLocalStorage(stateCoffeeCart[0]) // desconsiderar este e outros parametros relacionado ao clearStateAndLocal, é apenas para seguir a tipagem da action do reducer
			navigate('/order')
		}
	}

	return (
		<FormProvider {...methods}>
			<ShoppingContainer>
				<LeftContainer>
					<h2 className='subtitle'>complete your order</h2>
					<Form onSubmit={methods.handleSubmit(onSubmit)}/>
					<MethodPayment 
						onClick={handleClickMethod}
						methodPayment={methodPayment}
					/>
				</LeftContainer>
				
				<RightContainer>
					<h2 className='subtitle'>selected coffees</h2>
					<TotalCoffee handleSubmit={methods.handleSubmit(onSubmit)}/>
				</RightContainer>
			</ShoppingContainer>
		</FormProvider>
	)
}