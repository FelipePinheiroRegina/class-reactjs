import * as Dialog from '@radix-ui/react-dialog'
import {Overlay, Content, Close, TypeButtonTransaction, TypesTransaction} from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react'
import { Input } from '../Input'
import { Controller, useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { ContextTransactions } from '../../contexts/contextTransactions'

const schemaNewTransaction = zod.object({
    description: zod.string(),
    type: zod.enum(['income', 'outcome']),
    category: zod.string(),
    price: zod.number()
})

export type TypeNewTransaction = zod.infer<typeof schemaNewTransaction>

interface PropsNewTransaction {
    closeModal: () => void
}

export function NewTransaction({ closeModal }: PropsNewTransaction) {
    const createTransaction = useContextSelector(ContextTransactions, (context) => {
        return context.createTransaction
    })
    
    const { register, handleSubmit, control, reset } = useForm<TypeNewTransaction>({
        resolver: zodResolver(schemaNewTransaction),
        defaultValues: {
           description: '',
            category: '',
            type: 'income',
            price: 0,
        }
    })

    async function onSubmit(data: TypeNewTransaction) {
        await createTransaction(data)
        reset()
        closeModal()
    }

    return (
        <Dialog.Portal>
            <Overlay aria-describedby="DialogOverlay"/>
            <Content aria-describedby="DialogContent">

                <Dialog.Title className="title">
                    New Transaction Form
                </Dialog.Title>
                
                <Dialog.Description className='description'>
                    Add a new transaction
                </Dialog.Description>

                <Close>
                    <X/>
                </Close>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input type="text" placeholder='Description' {...register('description')} required/>
                    <Input type="number" placeholder='Price' {...register('price', { valueAsNumber: true })} required/>
                    <Input type="text" placeholder='Category' {...register('category')} required/>

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => (
                        <TypesTransaction onValueChange={field.onChange} value={field.value}>
                            <TypeButtonTransaction variant="Income" value="income">
                                <ArrowCircleUp />
                                <span>Income</span>
                            </TypeButtonTransaction>

                            <TypeButtonTransaction variant="Outcome" value="outcome">
                                <ArrowCircleDown />
                                <span>Outcome</span>
                            </TypeButtonTransaction>
                        </TypesTransaction>
                        )}
                    />

                    <button type="submit" className="register">
                        Register
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}