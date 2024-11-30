import { createContext, useContext } from 'react'
import { PropsCoffee } from '../mocks/coffees'
import { FormAddress } from '../pages/Shopping'
import { Method } from '../pages/Shopping/MethodPayment'
import { PropsAddressPayment } from '../contexts/CartContext'


interface PropsContextProvider {
	stateCoffeeCart: PropsCoffee[],

	handleAddCoffeeInCart: ( newCoffee: PropsCoffee ) => void,
    handleRemoveCoffeeInCart: (coffee: PropsCoffee) => void,
    handleAddAmount: (coffee: PropsCoffee) => void,
    handleMinusAmount: (coffee: PropsCoffee) => void,
    
    handleClearStateAndLocalStorage: (coffee: PropsCoffee) => void,

    addressPayment: PropsAddressPayment,
    handleSetAddressPayment: (address: FormAddress, methodPayment: Method) => void,
}

export const CartContext = createContext({} as PropsContextProvider)

export function useCart() {
    const context = useContext(CartContext)

    if (!context) {
        throw new Error('useCart must be used within a CoffeeContextProvider')
    }

    return context
}