import { Trash } from '@phosphor-icons/react'
import { TotalCoffeeContainer, CardSelectedCoffee, Prices, ButtonSubmit } from './styles'
import { ButtonAmount } from '../../../components/ButtonAmount'
import { Button } from '../../../components/Button'
import { imagesCoffees } from '../../../mocks/coffees'
import { useCart } from '../../../hooks/useCart'
import { useEffect, useState } from 'react'
import { formatPrice } from '../../../utilsFunctions/formatPrice'

interface PropsTotalCoffee {
	handleSubmit: () => void
}

export function TotalCoffee({handleSubmit}: PropsTotalCoffee) {
	const { handleAddAmount, handleMinusAmount, stateCoffeeCart, handleRemoveCoffeeInCart } = useCart()
	const [ totalItems, setTotalItems ] = useState(0)
	const [ totalItemsWithDelivery, setTotalItemsWithDelivery ] = useState(0)
	const delivery = 3.00
	
	
	useEffect(() => {

		const total = stateCoffeeCart.reduce((accumulator, coffee) => {
			return accumulator + coffee.amount * coffee.price
		}, 0)

		setTotalItems(total)
		setTotalItemsWithDelivery(total + delivery)

	}, [stateCoffeeCart])

	return (
		<TotalCoffeeContainer>
			{ stateCoffeeCart && 
				stateCoffeeCart.map((coffee) => (
					<CardSelectedCoffee key={coffee.id}>
						<img src={imagesCoffees[coffee.path]} alt="coffee espresso"/>

						<div className='details'>
							<div className='name-price-container'>
								<span>{coffee.name}</span>
								<span>R$ {formatPrice(coffee.price)}</span>
							</div>
							
							<div className='amount-remove-buttons'>
								<ButtonAmount
									onClickMinus={() => handleMinusAmount(coffee)}
									amount={coffee.amount}
									onClickPlus={() => handleAddAmount(coffee)}
								/>
								<Button 
									typeHeightButton='short'
									Icon={Trash} 
									label='Remove'
									onClick={() => handleRemoveCoffeeInCart(coffee)}
								/>
							</div>
						</div>
					</CardSelectedCoffee>
				))
			}
			
			<Prices>
				<div>
					<span className='styleFontNormal'>Total items</span>
					<span className='styleFontNormal'>R$ {totalItems && formatPrice(totalItems)}</span>
				</div>

				<div>
					<span className='styleFontNormal'>Delivery</span>
					<span className='styleFontNormal'>R$ {delivery && totalItems && formatPrice(delivery)}</span>
				</div>

				<div>
					<span className='styleFontBold'>Total</span>
					<span className='styleFontBold'>R$ {totalItemsWithDelivery && totalItems && formatPrice(totalItemsWithDelivery)}</span>
				</div>
			</Prices>

			<ButtonSubmit onClick={handleSubmit}>Confirm Order</ButtonSubmit>
		</TotalCoffeeContainer>
	)
}