import { produce } from 'immer'
import { PropsCoffee } from '../../mocks/coffees'
import { PropsActionsCartReducer, TypeActionsCartReducer } from './actions'

export function cartReducer(state: PropsCoffee[], action: PropsActionsCartReducer) {
    switch(action.type) {
        case TypeActionsCartReducer.ADD_AMOUNT: { 
            const indexCoffee = state.findIndex((coffee) => coffee.id === action.payload.id)

            const currentStateCoffeeCart = produce(state, draft => {
                draft[indexCoffee].amount += 1
            })
            
            localStorage.setItem('@coffeedelivery:statecoffeecart', JSON.stringify(currentStateCoffeeCart))
            return currentStateCoffeeCart
        }

        case TypeActionsCartReducer.MINUS_AMOUNT: {
            const indexCoffee = state.findIndex((coffee) => coffee.id === action.payload.id)

            if(state[indexCoffee].amount === 1) return state

            const currentStateCoffeeCart = produce(state, draft => {
                draft[indexCoffee].amount -= 1
            })

            localStorage.setItem('@coffeedelivery:statecoffeecart', JSON.stringify(currentStateCoffeeCart))
            return currentStateCoffeeCart
        }

        case TypeActionsCartReducer.ADD_NEW_COFFEE_IN_CART: {
            const indexCoffee = state.findIndex((coffee) => coffee.id === action.payload.id)
            
            const coffeeYetNotExist = indexCoffee === -1 // se não existir retorna true

            let currentStateCoffeeCart: PropsCoffee[] 

            if(coffeeYetNotExist ) {
                currentStateCoffeeCart = produce(state, draft => {
                    draft.push(action.payload)
                })
            
            } else {
                currentStateCoffeeCart = produce(state, draft => {
                    draft[indexCoffee] = action.payload
                }) 
            }

            localStorage.setItem('@coffeedelivery:statecoffeecart', JSON.stringify(currentStateCoffeeCart))
            return currentStateCoffeeCart
        }

        case TypeActionsCartReducer.REMOVE_COFFEE_IN_CART: {
            const currentStateCoffeeCart = state.filter((coffee) => coffee.id !== action.payload.id)

            localStorage.setItem('@coffeedelivery:statecoffeecart', JSON.stringify(currentStateCoffeeCart))
            return currentStateCoffeeCart
        }

        case TypeActionsCartReducer.CLEAR_STATE_LOCALSTORAGE: {
            localStorage.removeItem('@coffeedelivery:statecoffeecart')
            return []
        }
    }
}