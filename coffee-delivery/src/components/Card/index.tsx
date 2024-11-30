import { ShoppingCart } from '@phosphor-icons/react'
import { CardContainer } from './styles'
import { ButtonAmount } from '../ButtonAmount'
import { PropsCoffee } from '../../mocks/coffees'
import { imagesCoffees } from '../../mocks/coffees'
import { formatPrice } from '../../utilsFunctions/formatPrice'

import { useCoffee } from '../../hooks/useCoffee'
import { useCart } from '../../hooks/useCart'

interface PropsCard {
	coffee: PropsCoffee
}

export function Card({ coffee }: PropsCard ) {
	const { handleAddAmount, handleMinusAmount } = useCoffee()
	const { handleAddCoffeeInCart } = useCart()
	
	return (
		<CardContainer>
			<img src={imagesCoffees[coffee.path]}/> {/* <-- get image on array of images on position coffee.path */}

			<div className='tags-container'>
				{ coffee.tags &&
					coffee.tags.map((tag, index) => (
						<span 
							key={index} /* It is not ideal to use the index as a key, but it was necessary because my tags not have a id */
							className='tag'
						>
							{tag}
						</span>
					))
				}
			</div>

			<div className='descriptions-container'>
				<h1>{coffee.name}</h1>
				<p>{coffee.description}</p>
			</div>

			<div className='price-amount-shop-container'>
				<span className='price-container' >
					<span>R$</span>
					<span>{formatPrice(coffee.price)}</span>
				</span>

				<span className='shop-and-amount-container'>
					<ButtonAmount 
						amount={coffee.amount}
						onClickPlus={() => handleAddAmount(coffee.id)}
						onClickMinus={() => handleMinusAmount(coffee.id)}
					/>

					<button 
						className='add-coffee-shop'
						onClick={() => handleAddCoffeeInCart(coffee)}
					>
						<ShoppingCart weight='fill'/>
					</button>
				</span>
			</div>
		</CardContainer>
	)
}