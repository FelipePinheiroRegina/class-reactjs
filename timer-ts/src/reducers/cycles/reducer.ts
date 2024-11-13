import { ActionTypes } from './actions'
import { produce } from 'immer'
export interface Cycle {
    id: string,
    task: string,
    durationMinutes: number,
    startDate: Date,
    interruptedDate?: Date,
    finishedDate?: Date
}

interface CyclesState {
    cycles: Cycle[],
    cycleActiveId: string | null
}

export function CyclesReducer(state: CyclesState, action: any) {
    switch(action.type) {
    case ActionTypes.ADD_NEW_CYCLE:
        /*
        return {
            ...state,
            cycles: [...state.cycles, action.payload.newCycleData],
            cycleActiveId: action.payload.newCycleData.id
        }
        */

        return produce(state, draft => {
            draft.cycles.push(action.payload.newCycleData)
            draft.cycleActiveId = action.payload.newCycleData.id
        })

    case ActionTypes.INTERRUPT_CURRENT_CYCLE: {
        /*
        return {
            ...state,

            cycles: state.cycles.map((cycle) => {
                if(cycle.id === state.cycleActiveId) {
                    return { ...cycle, interruptedDate: new Date() }
                } else {
                    return cycle
                }
            }),
            cycleActiveId: null
        }
        */

        const currentCycleIndex = state.cycles.findIndex((cycle) => {
            return cycle.id === state.cycleActiveId
        })

        if(currentCycleIndex < 0 ) {
            return state
        }

        return produce(state, draft => {
            draft.cycleActiveId = null
            draft.cycles[currentCycleIndex].interruptedDate = new Date()
        })
    }

    case ActionTypes.FINISHED_CURRENT_CYCLE: {
        /*
        return {
            ...state,
            cycles: state.cycles.map((cycle) => {
                if(cycle.id === state.cycleActiveId) {
                    return { ...cycle, finishedDate: new Date() }
                } else {
                    return cycle
                }
            })
        }
        */

        const currentCycleIndex = state.cycles.findIndex((cycle) => {
            return cycle.id === state.cycleActiveId
        })

        if(currentCycleIndex < 0 ) {
            return state
        }

        return produce(state, draft => {
            draft.cycleActiveId = null
            draft.cycles[currentCycleIndex].finishedDate = new Date()
        })
    }

    default:
        return state
    }

}