import { PropsCoffee } from '../../mocks/coffees'
import { PropsActionsCoffeeReducer, TypeActionsCoffeeReducer } from './actions'
import { produce } from 'immer'

export function coffeeReducer(state: PropsCoffee[], action: PropsActionsCoffeeReducer){
	switch(action.type) {
		case TypeActionsCoffeeReducer.ADD_AMOUNT: {
			const indexCoffee = state.findIndex(coffee => coffee.id === action.payload)

			if(indexCoffee < 0) return state

			return produce(state, draft => {
				draft[indexCoffee].amount += 1
			})
		}

		case TypeActionsCoffeeReducer.MINUS_AMOUNT: {
			const indexCoffee = state.findIndex((coffee) => coffee.id === action.payload)
			
			if(indexCoffee < 0 || state[indexCoffee].amount === 1) return state

			return produce(state, draft => {
				draft[indexCoffee].amount -= 1
			})
		}
	}
}