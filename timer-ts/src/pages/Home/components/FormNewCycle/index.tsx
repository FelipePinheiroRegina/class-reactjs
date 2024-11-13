import { InputsContainer, InputTask, InputDurationMinutes } from './styles'

import { ContainerContextProps } from '../../../../contexts/ContextCycles'
import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

export function FormNewCycle() {
    const { activeCycle } = useContext(ContainerContextProps)
    const { register } = useFormContext()

    return (
        <InputsContainer>
            <label htmlFor="task" className='bold'>Vou trabalhar em</label>

            <InputTask 
                id="task" 
                list='list-task'
                type="text"
                placeholder='Dê o nome para o seu projeto'
                {...register('task')}
                disabled={!!activeCycle}
            />

            <datalist id='list-task'>
                <option value="Value 1"/>
                <option value="Value 2"/>
                <option value="Value 3"/>
                <option value="Value 4"/>
            </datalist>

            <label htmlFor="durationMinutes" className='medium'>durante</label>   
            <InputDurationMinutes 
                id="durationMinutes" 
                type="number"
                placeholder='00'
                step={5}
                min={5}
                max={60}
                {...register('durationMinutes', { valueAsNumber: true })}
                disabled={!!activeCycle}
            />
                
            <span className='bold'>minutos.</span>
        </InputsContainer>
    )
}