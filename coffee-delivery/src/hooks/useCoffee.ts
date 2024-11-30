import { createContext, useContext } from 'react'
import { PropsCoffee } from '../mocks/coffees'

interface PropsContextProvider {
    coffeeState: PropsCoffee[],
    handleAddAmount: (id: number) => void,
    handleMinusAmount: (id: number) => void,
}

export const CoffeeContext = createContext({} as PropsContextProvider)

export function useCoffee() {
    const context = useContext(CoffeeContext)
    
    if (!context) {
        throw new Error('useCoffee must be used within a CoffeeContextProvider')
    }

    return context
}