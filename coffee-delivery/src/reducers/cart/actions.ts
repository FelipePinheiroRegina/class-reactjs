import { PropsCoffee } from '../../mocks/coffees'

export enum TypeActionsCartReducer {
    ADD_AMOUNT = 'ADD_AMOUNT',
    MINUS_AMOUNT = 'REMOVE_AMOUNT',
    ADD_NEW_COFFEE_IN_CART = 'ADD_NEW_COFFEE_IN_CART',
    REMOVE_COFFEE_IN_CART = 'REMOVE_COFFEE_IN_CART',
    CLEAR_STATE_LOCALSTORAGE = 'CLEAR_STATE_LOCALSTORAGE'
}

export interface PropsActionsCartReducer {
    type: TypeActionsCartReducer;
    payload: PropsCoffee
}

export function addAmountCoffeeCartAction(coffee: PropsCoffee) {
    return {
        type: TypeActionsCartReducer.ADD_AMOUNT,
        payload: coffee
    }
}

export function minusAmountCoffeeCartAction(coffee: PropsCoffee) {
    return {
        type: TypeActionsCartReducer.MINUS_AMOUNT,
        payload: coffee
    }
}

export function addNewCoffeeInCartAction(newCoffee: PropsCoffee) {
    return {
        type: TypeActionsCartReducer.ADD_NEW_COFFEE_IN_CART,
        payload: newCoffee
    }
}

export function removeCoffeeInCartAction(coffee: PropsCoffee) {
    return {
        type: TypeActionsCartReducer.REMOVE_COFFEE_IN_CART,
        payload: coffee
    }
}

export function clearStateAndLocalStorageAction(coffee: PropsCoffee) {
    return {
        type: TypeActionsCartReducer.CLEAR_STATE_LOCALSTORAGE,
        payload: coffee
    }
}