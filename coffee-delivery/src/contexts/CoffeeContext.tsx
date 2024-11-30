import { ReactNode, useReducer} from 'react'
import { coffees } from '../mocks/coffees'
import { CoffeeContext } from '../hooks/useCoffee'
import { coffeeReducer } from '../reducers/coffee/reducer'
import { addAmountCoffeeReducerAction, removeAmountCoffeeReducerAction} from '../reducers/coffee/actions'

interface PropsFunctionProvider {
    children: ReactNode
}

export function CoffeeContextProvider({ children }: PropsFunctionProvider) {
    const [ coffeeState, dispatch ] = useReducer(coffeeReducer, coffees)

    function handleAddAmount(id: number) {
        dispatch(addAmountCoffeeReducerAction(id))
    }

    function handleMinusAmount(id: number) {
        dispatch(removeAmountCoffeeReducerAction(id))
    }

    return (
        <CoffeeContext.Provider value={{
            coffeeState,
            handleAddAmount,
            handleMinusAmount
        }}>
            { children }
        </CoffeeContext.Provider>
    )
}