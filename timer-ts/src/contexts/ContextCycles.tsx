import { createContext, ReactNode, useState, useMemo, useReducer, useEffect } from 'react'
import { Cycle, CyclesReducer } from '../reducers/cycles/reducer'
import { addNewCycleAction, handleInterruptedCurrentCycleAction, finishedCurrentCycleAction } from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

interface DataInputs {
    task: string,
    durationMinutes: number
}

interface PropsContextType {
    cycles: Cycle[],
    activeCycle: Cycle | undefined,
    cycleActiveId: string | null,
    finishedCurrentCycle: () => void,
    amountSecondsPassed: (value: number) => void,
    amountSecondsPassedValue: number,
    handleCreateNewCycle: (data: DataInputs) => void,
    handleInterruptedCurrentCycle: () => void
}

export const ContainerContextProps = createContext({} as PropsContextType)

interface PropsFunctionLocal {
    children: ReactNode
}

export function ContextCycles({ children }: PropsFunctionLocal) {
    const [cyclesState, dispatch] = useReducer(CyclesReducer, {
        cycles: [],
        cycleActiveId: null

    }, (initialState) => {
        
        const storedStateAsJSON = localStorage.getItem('@ignite-timer:cycles-state-1.0.0')

        if(storedStateAsJSON) {
            return JSON.parse(storedStateAsJSON)
        }

        return initialState
    })

    const { cycles, cycleActiveId } = cyclesState
    const activeCycle = useMemo(() => cycles.find(cycle => cycle.id === cycleActiveId), [cycles, cycleActiveId])

    const [ amountSecondsPassedValue, setAmountSecondsPassedValue ] = useState(() => {
        if(activeCycle) {
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        }

        return 0
    })

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)

        localStorage.setItem('@ignite-timer:cycles-state-1.0.0', stateJSON)
    }, [cyclesState])

    function finishedCurrentCycle() {
        dispatch(finishedCurrentCycleAction())

        /*
        setCycles((state) => state.map((cycle) => {
            if(cycle.id === cycleActiveId) {
                return { ...cycle, finishedDate: new Date() }
            }
            return cycle
        }))
        */
    }

    function amountSecondsPassed(value: number) {
        setAmountSecondsPassedValue(value)
    }

    function handleCreateNewCycle(data: DataInputs) {
        const id = String(new Date().getTime())

        const newCycleData: Cycle = {
            id,
            task: data.task,
            durationMinutes: data.durationMinutes,
            startDate: new Date()
        }

        dispatch(addNewCycleAction(newCycleData))

        //setCycles((state) => [...state, newCycleData])
        setAmountSecondsPassedValue(0)
    }

    function handleInterruptedCurrentCycle() {
        dispatch(handleInterruptedCurrentCycleAction())
        /*
        setCycles((state) => state.map((cycle) => {
            if(cycle.id === cycleActiveId) {
                return { ...cycle, interruptedDate: new Date() }
            }
            return cycle
        }))
        
        setCycleActiveId(null)
        */
    }

    return (
        <ContainerContextProps.Provider
            value={{
                cycles,
                activeCycle,
                cycleActiveId,
                amountSecondsPassedValue,
                amountSecondsPassed,
                finishedCurrentCycle,
                handleCreateNewCycle,
                handleInterruptedCurrentCycle
            }}
        >
            {children}
        </ContainerContextProps.Provider>
    )
}
