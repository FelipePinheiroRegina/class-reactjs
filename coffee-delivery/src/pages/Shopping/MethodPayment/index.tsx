import { CurrencyDollar, CreditCard, Bank, Money } from '@phosphor-icons/react'
import { MethodPaymentContainer } from './styles'
import { Button } from '../../../components/Button'

export type Method = 'credit' | 'debit' | 'money'

interface PropsMethodPayment {
	onClick: (methodPayment: Method) => void,
	methodPayment: Method
}

export function MethodPayment({ onClick, methodPayment }: PropsMethodPayment) {

	return (
		<MethodPaymentContainer>
			<div className='messages-container'>
				<div className='icon'>
					<CurrencyDollar/>
				</div>

				<div className='messages'>
					<p>Payment</p>
					<p>Payment is made upon delivery. Choose the way you want to pay</p>
				</div>
			</div>

			<div className='methods-payments'>
				<Button 
					Icon={CreditCard} 
					label="Credit Card"
					onClick={() => onClick('credit')}
					isActive={methodPayment === 'credit' ? 'true' : 'false'}
				/>

				<Button 
					Icon={Bank} 
					label="Debit Card"
					onClick={() => onClick('debit')}
					isActive={methodPayment === 'debit' ? 'true' : 'false'}
				/>

				<Button 
					Icon={Money} 
					label="Money"
					onClick={() => onClick('money')}
					isActive={methodPayment === 'money' ? 'true' : 'false'}
				/>
			</div>
		</MethodPaymentContainer>
	)
}