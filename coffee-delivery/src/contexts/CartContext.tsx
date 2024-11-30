import { ReactNode, useState, useReducer } from 'react'
import { PropsCoffee } from '../mocks/coffees'
import { CartContext } from '../hooks/useCart'
import { FormAddress } from '../pages/Shopping'
import { Method } from '../pages/Shopping/MethodPayment'
import { cartReducer } from '../reducers/cart/reducer'
import { addAmountCoffeeCartAction, minusAmountCoffeeCartAction, addNewCoffeeInCartAction, removeCoffeeInCartAction, clearStateAndLocalStorageAction } from '../reducers/cart/actions'

interface PropsContextProviderLocal {
    children: ReactNode
}

export interface PropsAddressPayment {
	address: FormAddress,
	methodPayment: Method
}

export function CartContextProvider({children}: PropsContextProviderLocal) {
	const [stateCoffeeCart, dispatch] = useReducer(cartReducer, [], () => {
		const storedState = localStorage.getItem('@coffeedelivery:statecoffeecart')
		return storedState ? JSON.parse(storedState) : []
	})
	  

	const [ addressPayment, setAddressPayment ] = useState(() => {
		const address = localStorage.getItem('@coffee-delivery:address')
		const methodPayment = localStorage.getItem('@coffee-delivery:methodPayment')

		if(address && methodPayment) {

			return {
				address: JSON.parse(address),
				methodPayment
			} as PropsAddressPayment
		} else {
			return {} as PropsAddressPayment
		}
	})

	// functions of the stateCoffeeCart
	function handleAddCoffeeInCart(newCoffee: PropsCoffee) {
		dispatch(addNewCoffeeInCartAction(newCoffee))
	}

	function handleRemoveCoffeeInCart(coffee: PropsCoffee) {
		dispatch(removeCoffeeInCartAction(coffee))	
	}

	function handleAddAmount(coffee: PropsCoffee) {
       dispatch(addAmountCoffeeCartAction(coffee))
    }

    function handleMinusAmount(coffee: PropsCoffee) {
		dispatch(minusAmountCoffeeCartAction(coffee))
    }

	function handleClearStateAndLocalStorage(coffee: PropsCoffee) {
		dispatch(clearStateAndLocalStorageAction(coffee))
	}

	// functions of the form address delivery
	function handleSetAddressPayment(address: FormAddress, methodPayment: Method) {
		localStorage.setItem('@coffee-delivery:address', JSON.stringify(address))
		localStorage.setItem('@coffee-delivery:methodPayment', methodPayment)

		setAddressPayment({
			address,
			methodPayment
		})
	}

	return (
		<CartContext.Provider value={{
			stateCoffeeCart,
			handleAddCoffeeInCart,
			handleRemoveCoffeeInCart,
			handleAddAmount,
			handleMinusAmount,
			handleClearStateAndLocalStorage,

			addressPayment,
			handleSetAddressPayment
		 }}>
			{children}
		</CartContext.Provider>
	)
}