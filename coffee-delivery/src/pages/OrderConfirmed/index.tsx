import { MapPin, Timer, CurrencyDollar } from '@phosphor-icons/react'
import { OrderConfirmedContainer } from './styles'
import { IconBackgroundRadius } from '../../components/IconBackgroundRadius'
import delivery from '../../assets/Illustration.png'
import { useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Method } from '../Shopping/MethodPayment'

export function OrderConfirmed() {
	const { addressPayment } = useCart()
	
	const navigate = useNavigate()

	useEffect(() => {
		if(addressPayment.address === undefined) {
			navigate('/')
		}

	}, [addressPayment, navigate])
	
	function treatmentPaymentView(methodPayment: Method) {
		switch(methodPayment) {
			case 'credit':
				return 'Credit Card'
			
			case 'debit':
				return 'Debit Card'
			
			case 'money':
				return 'Money'
			
			default:
				return 'Money'
		}
	}

	return (
		<OrderConfirmedContainer>
			<div className='information'>
				<div className='phrase-confirm'>
					<span>Uhu! Order confirmed</span>
					<span>Now just wait and the coffee will soon reach you.</span>
				</div>

				<div className="degrade-border-container">
					<div className='icons-messages-container'>
						<div className='default'>
							<IconBackgroundRadius typeColorsBackgroundRadius='purple'>
								<MapPin weight='fill'/>
							</IconBackgroundRadius>

							<span className='default-details'>
								<span>
									Delivery at 
									<strong>
										{ addressPayment.address && 
											` ${addressPayment.address.street}, 
											${addressPayment.address.number}`
										}
									</strong>
								</span>

								<span>{addressPayment.address && `${addressPayment.address.city}, ${addressPayment.address.uf}`}</span>
							</span>
						</div>

						<div className='default'>
							<IconBackgroundRadius typeColorsBackgroundRadius='yellow'>
								<Timer weight='fill'/>
							</IconBackgroundRadius>

							<span className='default-details'>
								<span>Delivery forecast</span>
								<strong>20 min - 30 min</strong>
							</span>
						</div>

						<div className='default'>
							<IconBackgroundRadius typeColorsBackgroundRadius='yellow_dark'>
								<CurrencyDollar/>
							</IconBackgroundRadius>

							<span className='default-details'>
								<span>Payment on delivery</span>
								<strong>{treatmentPaymentView(addressPayment.methodPayment)}</strong>
							</span>
						</div>
					</div>
				</div>
			</div>

			<img src={delivery}/>
		</OrderConfirmedContainer>
	)
}