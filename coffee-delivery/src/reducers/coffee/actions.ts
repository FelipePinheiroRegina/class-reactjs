export enum TypeActionsCoffeeReducer {
    ADD_AMOUNT = 'ADD_AMOUNT',
    MINUS_AMOUNT = 'REMOVE_AMOUNT'
}

export interface PropsActionsCoffeeReducer {
	type: TypeActionsCoffeeReducer,
	payload: number
}

export function addAmountCoffeeReducerAction(id: number) {
	return {
		type: TypeActionsCoffeeReducer.ADD_AMOUNT,
		payload: id
	}
}

export function removeAmountCoffeeReducerAction(id: number) {
	return {
		type: TypeActionsCoffeeReducer.MINUS_AMOUNT,
		payload: id
	}
}