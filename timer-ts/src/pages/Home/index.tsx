import { 
    HomeContainer, 
    FormContainer, 
    StartCountDownButton,
    StopCountDownButton
} from './styles'

import { HandPalm, Play } from '@phosphor-icons/react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { FormNewCycle } from './components/FormNewCycle'
import { CountDown } from './components/CountDown'
import { useContext } from 'react'
import { ContainerContextProps } from '../../contexts/ContextCycles'

const newCycleSubmitFormSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    durationMinutes: zod.number().min(5, 'ciclo deve ter no minimo 5 minutos').max(60, 'ciclo deve ter no maximo 60 minutos')
})

export type NewCycleFormData = zod.infer<typeof newCycleSubmitFormSchema>

export function Home() {
    const { 
        activeCycle,
        handleCreateNewCycle,
        handleInterruptedCurrentCycle
    } = useContext(ContainerContextProps)

    const useFormHook = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleSubmitFormSchema),
        defaultValues: {
            task: '',
            durationMinutes: 0,
        }
    })

    // formState - formState.errors - para tratar erros
    const { watch, handleSubmit, reset } = useFormHook

    const task = watch('task')
    const disabledSubmitIf = !task

    function handleCreateNewCycleAndReset(data: NewCycleFormData) {
        handleCreateNewCycle(data)
        reset()
    }

    return (
        <HomeContainer>
            <FormContainer onSubmit={handleSubmit(handleCreateNewCycleAndReset)}>
                <FormProvider {...useFormHook}>
                    <FormNewCycle/>
                </FormProvider>

                <CountDown/>
                    
                { activeCycle ?
                    <StopCountDownButton
                        onClick={handleInterruptedCurrentCycle}
                    >
                        <HandPalm/> Interromper
                    </StopCountDownButton>
                    :
                    <StartCountDownButton
                        disabled={disabledSubmitIf}
                        type='submit'
                    >
                        <Play/> Começar
                    </StartCountDownButton>
                }
            </FormContainer>
        </HomeContainer>
    )
}