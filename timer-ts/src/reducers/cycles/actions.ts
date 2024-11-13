import { Cycle } from './reducer'

export enum ActionTypes {
    ADD_NEW_CYCLE = 'ADD_NEW_CYCLE',
    INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
    FINISHED_CURRENT_CYCLE = 'FINISHED_CURRENT_CYCLE'
}

export function addNewCycleAction(newCycleData: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycleData
        }
    }
}

export function handleInterruptedCurrentCycleAction() {
    return {
        type: ActionTypes.INTERRUPT_CURRENT_CYCLE
    }
}

export function finishedCurrentCycleAction() {
    return {
        type: ActionTypes.FINISHED_CURRENT_CYCLE
    }
}