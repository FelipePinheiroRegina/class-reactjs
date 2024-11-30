import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { HeaderContainer, CityAndShop } from './styles'
import { useCart } from '../../hooks/useCart'
import logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom'
import { FormAddress } from '../../pages/Shopping'

export function Header() {
	const { stateCoffeeCart, addressPayment } = useCart()

	function altRenderingLocation(address: FormAddress) {
		if(address === undefined) {
			return <span>City, UF</span>
		} else {
			return <span>{address.city}, {address.uf}</span>
		}
	}
	
	return (
		<HeaderContainer>
			<NavLink to='/'>
				<img src={logo} alt="image of a coffee cup, and a written phrase: coffee delivery" />
			</NavLink>

			
			<CityAndShop> {/*Component to local style*/}
				<NavLink to='/shopping'>
					<span className='span-city'>
						<MapPin weight='fill'/>
						{altRenderingLocation(addressPayment.address)}
					</span>
				</NavLink>

				<NavLink to='/shopping'>
					<span className='span-shop'>
						<ShoppingCart weight='fill'/>
						{ stateCoffeeCart.length > 0 && <span className='qtd'> { stateCoffeeCart.length } </span> }
					</span>
				</NavLink>
			</CityAndShop>
		</HeaderContainer>
	)
}