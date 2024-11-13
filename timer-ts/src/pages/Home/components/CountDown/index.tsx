import { CounterContainer, Separator } from './styles'

import { useEffect } from 'react'
import { useContext } from 'react'
import { ContainerContextProps } from '../../../../contexts/ContextCycles'
import { differenceInSeconds } from 'date-fns'

export function CountDown() {
    const {  
        cycleActiveId, 
        activeCycle,
        amountSecondsPassedValue,
        amountSecondsPassed,
        finishedCurrentCycle

    } = useContext(ContainerContextProps)

    const totalSeconds = activeCycle ? activeCycle.durationMinutes * 60 : 0
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassedValue : 0

    const minutesAmount = Math.floor(currentSeconds / 60) 
    const secondsAmount = currentSeconds % 60

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        let interval: number

        if(activeCycle) {
            interval = setInterval(() => {
                const secondsDifference = differenceInSeconds(
                    new Date(), 
                    new Date(activeCycle.startDate)
                )

                if(secondsDifference >= totalSeconds) {
                    
                    finishedCurrentCycle()
                    amountSecondsPassed(totalSeconds)
                    clearInterval(interval)
                } else {
                    amountSecondsPassed(secondsDifference)
                }

            }, 1000)
        }

        return () => {
            clearInterval(interval)
        }

    }, [activeCycle, totalSeconds, cycleActiveId, finishedCurrentCycle,  amountSecondsPassed])

    useEffect(() => {
        if(activeCycle) {
            document.title = `${minutes}:${seconds}`
        } else {
            document.title = 'Timer TypeScript'
        }

    }, [minutes, seconds, activeCycle])

    return (
        <CounterContainer>
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            <Separator>
                :
            </Separator>
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </CounterContainer>
    )
}